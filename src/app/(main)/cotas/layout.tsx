import { CotasHeader } from "@/components/landing/cotas/cotas-header";
import { CotasFooter } from "@/components/landing/cotas/cotas-footer";

// ============================================================================
// LAYOUT LP COTAS
// Layout dedicado para Landing Page sem header/footer do site principal
// ============================================================================

export default function CotasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#8B4513' }}
    >
      <CotasHeader />
      <main className="flex-1">{children}</main>
      <CotasFooter />
    </div>
  );
}
