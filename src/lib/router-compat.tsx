"use client";

import NextLink from "next/link";
import { useRouter, usePathname, useParams as useNextParams } from "next/navigation";
import React, { AnchorHTMLAttributes, forwardRef } from "react";

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to?: string;
  href?: string;
  search?: Record<string, any>;
  replace?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, href, search, ...props }, ref) => {
  let target = to || href || "/";
  if (search && Object.keys(search).length > 0) {
    const sp = new URLSearchParams();
    for (const [k, v] of Object.entries(search)) {
      if (v !== undefined && v !== null) {
        sp.set(k, String(v));
      }
    }
    const qs = sp.toString();
    if (qs) {
      target += (target.includes("?") ? "&" : "?") + qs;
    }
  }

  return <NextLink ref={ref} href={target} {...props} />;
});

Link.displayName = "Link";

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setSearch(window.location.search);
    }
  }, [pathname]);

  return {
    pathname,
    search,
    hash: typeof window !== "undefined" ? window.location.hash : "",
  };
}

export function useParams() {
  return useNextParams() as Record<string, string>;
}

export function useSearchParams() {
  const [searchParams, setSearchParams] = React.useState<URLSearchParams>(
    new URLSearchParams(typeof window !== "undefined" ? window.location.search : "")
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, []);

  return [searchParams, () => {}] as const;
}

export function Navigate({ to, replace, state }: { to: string; replace?: boolean; state?: any }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}

export function Outlet({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

