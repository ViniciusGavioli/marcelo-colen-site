import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, DEFAULT_SEO, OG_IMAGES } from "@/lib/constants";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAdsTag from "@/components/GoogleAdsTag";
import Analytics from "@/components/Analytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Par do site institucional. Adicionado, nao substitui: as landing pages
// continuam em Cormorant/Inter e nao devem mudar de aparencia.
// Source Serif nasceu para leitura longa e publicacao academica; IBM Plex Sans
// da o registro institucional e tecnico sem o ar corporativo do Inter.
const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: DEFAULT_SEO.description,
  keywords: [...DEFAULT_SEO.keywords],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  // Default de preview social para toda rota. Um layout filho que declare
  // openGraph substitui este objeto inteiro, então lá o `images` é repetido
  // via OG_IMAGES — sem isso a imagem some, que era o caso em 10/10 rotas.
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: OG_IMAGES.institucional,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: OG_IMAGES.institucional.map((i) => i.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Ns_Z2vCPeOAsmOHF-_SNMmQFk1ix_B6gqykjRSZ2xQ0",
  },
};

// Root Layout — apenas HTML/Body/Providers
// Header/Footer ficam nos route group layouts: (site)/layout.tsx e (lp)/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${inter.variable} ${sourceSerif.variable} ${plexSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Analytics />
        <FacebookPixel />
        <GoogleAdsTag />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
