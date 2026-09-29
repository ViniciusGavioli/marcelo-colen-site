import { AttorneyJsonLd } from "@/components/site/JsonLd";

// Layout limpo para Landing Pages - SEM Header/Footer
// Foco total em conversão.
// GTM e GA4 saíram daqui para app/layout.tsx: montados só neste grupo,
// deixavam as páginas institucionais sem GA4.

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="font-sans bg-[#3D2314]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* E-E-A-T: identifica o advogado responsável, credenciais e OAB
          para toda LP do grupo. Antes só /inicio tinha dado estruturado. */}
      <AttorneyJsonLd />
      {children}
    </div>
  );
}
