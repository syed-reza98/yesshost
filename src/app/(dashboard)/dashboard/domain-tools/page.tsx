import { Suspense } from "react";
import DomainToolsPageClient from "./DomainToolsPageClient";
import { Loader2 } from "lucide-react";

export default function DomainToolsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-muted-foreground flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">Loading...</p>
        </div>
      }
    >
      <DomainToolsPageClient />
    </Suspense>
  );
}
