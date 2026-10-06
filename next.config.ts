import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|mp4|webm)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/recurso-heteroidentificacao",
        // 307, temporário: a home nova está em /site-oficial
        // (SITE_CONFIG.homePath) até assumir a raiz.
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
