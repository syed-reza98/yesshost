import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import LiveChatWidget from "@/components/LiveChatWidget";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <FooterSection />
      <LiveChatWidget />
      <CartDrawer />
      <ScrollToTop />
    </div>
  );
}
