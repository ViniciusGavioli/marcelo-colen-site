import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { ARTIGOS_PUBLICADOS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Páginas institucionais
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/atuacao`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/midia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // LPs ativas — alto valor para SEO
    {
      url: `${baseUrl}/recurso-heteroidentificacao`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reprovado-heteroidentificacao`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/mandado-seguranca-heteroidentificacao`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/advogado-cotas-raciais`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/advogado-especialista`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog: só artigos publicados; os em construção são noindex.
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...ARTIGOS_PUBLICADOS.map((artigo) => ({
      url: `${baseUrl}/blog/${artigo.slug}`,
      lastModified: new Date(`${artigo.atualizadoEm ?? artigo.publicadoEm}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
