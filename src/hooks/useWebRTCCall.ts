"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export type CallStatus = "idle" | "requesting" | "ringing" | "connected" | "ended";

interface UseWebRTCCallProps {
  chatId: string | null;
  role: "visitor" | "admin";
}

const ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

export function useWebRTCCall({ chatId, role }: UseWebRTCCallProps) {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const callRecordIdRef = useRef<string | null>(null);
  const callStartTimeRef = useRef<string | null>(null);

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const channelRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ringtoneRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const otherRole = role === "visitor" ? "admin" : "visitor";

  // Cleanup helper
  const cleanup = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (ringtoneRef.current) clearInterval(ringtoneRef.current);
    pcRef.current?.close();
    pcRef.current = null;
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    localStreamRef.current = null;
    setDuration(0);
    setIsMuted(false);
  }, []);

  // Save call record to database
  const saveCallStart = useCallback(async () => {
    if (!chatId) return;
    callStartTimeRef.current = new Date().toISOString();
    try {
      const res = await fetch("/api/support/call-record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start", chatId, callType: role === "visitor" ? "inbound" : "outbound" }),
      });
      const data = await res.json();
      if (data.id) callRecordIdRef.current = data.id;
    } catch (err) {}
  }, [chatId, role]);

  const saveCallEnd = useCallback(async (finalStatus: string, finalDuration: number) => {
    if (!callRecordIdRef.current) return;
    try {
      await fetch("/api/support/call-record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          recordId: callRecordIdRef.current,
          status: finalStatus,
          durationSeconds: finalDuration,
        }),
      });
    } catch (err) {}
    callRecordIdRef.current = null;
    callStartTimeRef.current = null;
  }, []);

  // Create peer connection
  const createPC = useCallback(() => {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    pc.onicecandidate = (event) => {
      if (event.candidate && channelRef.current) {
        channelRef.current.send({
          type: "broadcast",
          event: "webrtc",
          payload: { type: "candidate", candidate: event.candidate, from: role },
        });
      }
    };

    pc.ontrack = (event) => {
      if (!remoteAudioRef.current) {
        remoteAudioRef.current = new Audio();
        remoteAudioRef.current.autoplay = true;
      }
      remoteAudioRef.current.srcObject = event.streams[0];
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "connected") {
        setCallStatus("connected");
        if (ringtoneRef.current) clearInterval(ringtoneRef.current);
        timerRef.current = setInterval(() => {
          setDuration((d) => d + 1);
        }, 1000);
      } else if (["disconnected", "failed", "closed"].includes(pc.connectionState)) {
        endCall();
      }
    };

    pcRef.current = pc;
    return pc;
  }, [role]);

  // Subscribe to real-time events
  useEffect(() => {
    if (!chatId) return;

    const channel = supabase.channel(`call-${chatId}`);
    channelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
      cleanup();
    };
  }, [chatId, cleanup]);

  // Start outbound call
  const startCall = useCallback(async () => {
    if (!chatId) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      localStreamRef.current = stream;
      const pc = createPC();
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      setCallStatus("requesting");
      channelRef.current?.send({
        type: "broadcast",
        event: "webrtc",
        payload: { type: "call-request", offer, from: role },
      });

      await saveCallStart();
    } catch (err) {
      setCallStatus("ended");
    }
  }, [chatId, createPC, role, saveCallStart]);

  // Answer incoming call
  const answerCall = useCallback(async (offer: RTCSessionDescriptionInit) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      localStreamRef.current = stream;
      const pc = createPC();
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      setCallStatus("connected");
      channelRef.current?.send({
        type: "broadcast",
        event: "webrtc",
        payload: { type: "call-answer", answer, from: role },
      });
    } catch (err) {
      setCallStatus("ended");
    }
  }, [createPC, role]);

  // Reject incoming call
  const rejectCall = useCallback(() => {
    channelRef.current?.send({
      type: "broadcast",
      event: "webrtc",
      payload: { type: "call-reject", from: role },
    });
    setCallStatus("idle");
    cleanup();
  }, [cleanup, role]);

  // End active call
  const endCall = useCallback(() => {
    channelRef.current?.send({
      type: "broadcast",
      event: "webrtc",
      payload: { type: "call-end", from: role },
    });
    setCallStatus("ended");
    cleanup();
  }, [cleanup, role]);

  // Toggle audio mute
  const toggleMute = useCallback(() => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMuted(!audioTrack.enabled);
      }
    }
  }, []);

  return {
    callStatus,
    duration,
    isMuted,
    startCall,
    answerCall,
    rejectCall,
    endCall,
    toggleMute,
  };
}
