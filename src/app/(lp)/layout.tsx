import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

// Layout limpo para Landing Pages - SEM Header/Footer
// Foco total em conversão

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${raleway.variable} font-sans bg-[#3D2314]`} style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>
      {children}
    </div>
  );
}
