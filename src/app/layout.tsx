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
      <body className="min-h-screen flex flex-col antialiased">
        <FacebookPixel />
        <GoogleAdsTag />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
