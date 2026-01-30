import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG, DEFAULT_SEO } from "@/lib/constants";
import FacebookPixel from "@/components/FacebookPixel";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B6914",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
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
};

// Root Layout - apenas HTML/Body
// Header/Footer são adicionados no (main)/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col antialiased">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
