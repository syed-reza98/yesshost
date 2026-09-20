"use client";

import type { LucideIcon } from "lucide-react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function StaffPageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-xl font-semibold text-foreground">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {actions}
    </div>
  );
}

export type StaffMetric = {
  label: string;
  value: string | number;
  detail: string;
  icon: LucideIcon;
  tone?: "primary" | "success" | "warning" | "danger";
};

export function StaffMetricStrip({ metrics }: { metrics: StaffMetric[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="p-4 rounded-xl border border-border/70 bg-card/60 shadow-xs"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </span>
              <Icon
                className={cn(
                  "size-4",
                  metric.tone === "success"
                    ? "text-emerald-600"
                    : metric.tone === "warning"
                    ? "text-amber-600"
                    : metric.tone === "danger"
                    ? "text-rose-600"
                    : "text-primary"
                )}
              />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <strong className="text-2xl font-bold tabular-nums text-foreground">
                {metric.value}
              </strong>
              <span className="text-xs text-muted-foreground">{metric.detail}</span>
            </div>
            <div
              className={cn(
                "mt-3 h-1 rounded-full bg-secondary after:block after:h-full after:w-2/3 after:rounded-full",
                metric.tone === "success"
                  ? "after:bg-emerald-500"
                  : metric.tone === "warning"
                  ? "after:bg-amber-500"
                  : metric.tone === "danger"
                  ? "after:bg-rose-500"
                  : "after:bg-primary"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

export function StaffSearch({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative min-w-0 flex-1">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 pl-9 bg-card"
      />
    </div>
  );
}

export function StaffLoading({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="h-16 w-full rounded-xl" />
      ))}
    </div>
  );
}

export function StaffEmpty({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center px-6 text-center rounded-2xl border border-dashed border-border bg-card/40">
      <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
        <Icon className="size-5" />
      </div>
      <p className="font-semibold text-foreground">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
