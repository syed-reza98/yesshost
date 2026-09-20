"use client";
import { Navigate } from "@/lib/router-compat";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
const CallCenterRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const hasAccess = user?.role === "admin" || user?.role === "call_center";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin-login" replace />;
  if (!hasAccess) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
};

export default CallCenterRoute;
