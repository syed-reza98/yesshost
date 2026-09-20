"use client";
import { Search, Download, RefreshCw, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export type FilterOption = { value: string; label: string; count?: number };
export type FilterGroup = { key: string; value: string; onChange: (v: string) => void; options: FilterOption[] };

interface DataToolbarProps {
  search: string;
  onSearch?: (v: string) => void;
  onSearchChange?: (v: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  filters?: (FilterOption | FilterGroup)[];
  activeFilter?: string;
  onFilter?: (v: string) => void;
  onExport?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  resultCount?: number;
}

/**
 * Shared dashboard toolbar: live search, status filter chips,
 * CSV export and refresh — bilingual and mobile friendly.
 */
const DataToolbar = ({
  search,
  onSearch,
  onSearchChange,
  placeholder,
  searchPlaceholder,
  filters,
  activeFilter,
  onFilter,
  onExport,
  onRefresh,
  refreshing,
  resultCount,
}: DataToolbarProps) => {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const handleSearch = onSearch || onSearchChange || (() => {});
  const effectivePlaceholder = placeholder || searchPlaceholder;

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={e => handleSearch(e.target.value)}
            placeholder={effectivePlaceholder || (bn ? "খুঁজুন..." : "Search...")}
            aria-label={bn ? "খুঁজুন" : "Search"}
            className="w-full h-11 pl-9 pr-9 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/30"
          />
          {search && (
            <button
              type="button"
              onClick={() => handleSearch("")}
              aria-label={bn ? "মুছুন" : "Clear"}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-muted-foreground hover:bg-secondary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              disabled={refreshing}
              className="h-11 px-3 inline-flex items-center gap-2 rounded-xl border border-border bg-card text-sm font-medium text-foreground hover:bg-secondary disabled:opacity-60"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">{bn ? "রিফ্রেশ" : "Refresh"}</span>
            </button>
          )}
          {onExport && (
            <button
              type="button"
              onClick={onExport}
              className="h-11 px-3 inline-flex items-center gap-2 rounded-xl border border-border bg-card text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">CSV</span>
            </button>
          )}
        </div>
      </div>

      {filters && filters.length > 0 && (
        <div className="flex flex-wrap gap-2 py-0.5">
          {filters.map((f: any, idx: number) => {
            if (f.options && f.onChange) {
              return (
                <div key={f.key || idx} className="flex flex-wrap gap-1.5 items-center">
                  {f.options.map((opt: FilterOption) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => f.onChange(opt.value)}
                      className={`h-8 px-3 rounded-full text-xs font-semibold border transition-colors ${
                        f.value === opt.value
                          ? "bg-primary text-primary-foreground border-primary shadow-xs"
                          : "bg-card text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              );
            }

            return (
              <button
                key={f.value}
                type="button"
                onClick={() => onFilter?.(f.value)}
                className={`h-8 px-3 rounded-full text-xs font-semibold border transition-colors ${
                  activeFilter === f.value
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-card text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                }`}
              >
                {f.label}
                {typeof f.count === "number" && (
                  <span className="ml-1.5 opacity-70">{f.count}</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {typeof resultCount === "number" && (
        <p className="text-xs text-muted-foreground">
          {resultCount} {bn ? "টি ফলাফল" : "results"}
        </p>
      )}
    </div>
  );
};

export default DataToolbar;
