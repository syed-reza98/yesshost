"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { signOut as nextAuthSignOut } from "next-auth/react";

export interface AuthUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  supportPin?: string | null;
}

export interface UserProfile {
  id?: string;
  user_id?: string;
  full_name?: string | null;
  avatar_url?: string | null;
  phone?: string | null;
  company_name?: string | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  vat_id?: string | null;
  support_pin?: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  profile: UserProfile | null;
  role: string;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  role: "guest",
  loading: true,
  signOut: async () => {},
  refreshProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children, initialUser }: { children: ReactNode; initialUser?: AuthUser | null }) => {
  const [user, setUser] = useState<AuthUser | null>(initialUser ?? null);
  const [loading, setLoading] = useState(initialUser === undefined);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const session = await res.json();
          if (session?.user) {
            setUser({
              id: session.user.id,
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
              role: session.user.role || "user",
              supportPin: session.user.supportPin,
            });
          } else {
            setUser(null);
          }
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    if (initialUser === undefined) {
      checkSession();
    }
  }, [initialUser]);

  const signOut = async () => {
    await nextAuthSignOut({ callbackUrl: "/" });
  };

  const refreshProfile = async () => {
    const res = await fetch("/api/auth/session");
    if (res.ok) {
      const session = await res.json();
      if (session?.user) {
        setUser(session.user);
      }
    }
  };

  const profile: UserProfile | null = user
    ? {
        id: user.id,
        user_id: user.id,
        full_name: user.name,
        avatar_url: user.image,
        support_pin: user.supportPin,
      }
    : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role: user?.role || "guest",
        loading,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
