import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // As páginas *-backup são rotas públicas que respondem 200 e duplicam
      // as LPs principais. Sem isto competem por indexação com elas.
      disallow: [
        "/api/",
        "/_next/",
        "/lp-principal-cotas/lp-principal-cotas-backup",
        "/advogado-especialista/advogado-especialista-backup",
      ],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
