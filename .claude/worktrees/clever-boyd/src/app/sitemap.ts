import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  
  const routes = [
    "",
    "/sobre",
    "/atuacao",
    "/atuacao/criminal",
    "/atuacao/compliance",
    "/atuacao/direitos-humanos",
    "/atuacao/igualdade-racial",
    "/conteudos",
    "/midia",
    "/publicacoes",
    "/contato",
    "/privacidade",
    "/termos",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contato" ? 0.9 : 0.8,
  }));
}
