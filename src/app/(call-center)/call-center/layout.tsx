"use client";

import CallCenterLayout from "@/components/CallCenterLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CallCenterLayout>{children}</CallCenterLayout>;
}
