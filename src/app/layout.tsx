import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG, DEFAULT_SEO } from "@/lib/constants";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAdsTag from "@/components/GoogleAdsTag";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <FacebookPixel />
        <GoogleAdsTag />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
