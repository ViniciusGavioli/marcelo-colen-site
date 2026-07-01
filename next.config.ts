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
        permanent: false, // 307 — temporário, até a nova home ficar pronta
      },
    ];
  },
};

export default nextConfig;
