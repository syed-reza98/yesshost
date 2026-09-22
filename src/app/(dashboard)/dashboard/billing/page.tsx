import { Suspense } from "react";
import BillingPageClient from "./BillingPageClient";
import { Loader2 } from "lucide-react";

export default function BillingPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-muted-foreground flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">Loading...</p>
        </div>
      }
    >
      <BillingPageClient />
    </Suspense>
  );
}
