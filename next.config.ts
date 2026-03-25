import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/advogado-cotas-raciais",
        permanent: false, // 307 — temporário, até a nova home ficar pronta
      },
    ];
  },
};

export default nextConfig;
