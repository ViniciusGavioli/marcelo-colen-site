import { z } from "zod";

/**
 * Schema para uma área de atuação (Criminal, Compliance, Direitos Humanos)
 */
const areaSchema = z.object({
  title: z.string().min(2, "Título obrigatório"),
  subtitle: z.string().min(5, "Subtítulo obrigatório"),
  description: z.string().min(20, "Descrição deve ter pelo menos 20 caracteres"),
  bullets: z
    .array(z.string().min(3, "Bullet muito curto"))
    .min(3, "Mínimo 3 bullets")
    .max(12, "Máximo 12 bullets"),
  whenToSeek: z
    .array(z.string().min(5, "Item muito curto"))
    .min(2, "Mínimo 2 itens")
    .max(8, "Máximo 8 itens"),
  faq: z
    .array(
      z.object({
        question: z.string().min(10, "Pergunta muito curta"),
        answer: z.string().min(20, "Resposta muito curta"),
      })
    )
    .min(2, "Mínimo 2 FAQs")
    .max(6, "Máximo 6 FAQs"),
});

/**
 * Schema para item de timeline
 */
const timelineItemSchema = z.object({
  label: z.string().min(3, "Label obrigatório"),
  year: z.string().optional(),
});

/**
 * Schema para credenciais
 */
const credentialSchema = z.object({
  icon: z.string().default("Award"),
  title: z.string().min(3, "Título obrigatório"),
  description: z.string().min(10, "Descrição obrigatória"),
});

/**
 * Schema para links/referências
 */
const linksSchema = z.object({
  instagram: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  youtube: z.string().url().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
  publications: z.array(z.string()).optional().default([]),
  interviews: z.array(z.string()).optional().default([]),
});

/**
 * Schema principal do briefing
 */
export const briefingSchema = z.object({
  // Identificação
  name: z.string().min(3, "Nome completo obrigatório"),
  oab: z.string().optional().default(""),
  city: z.string().optional().default(""),
  atendimento: z.string().optional().default(""),

  // Contatos
  email: z.string().email("E-mail inválido"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .regex(/^\d+$/, "Apenas números"),

  // Bio
  bioShort: z
    .string()
    .min(50, "Bio curta deve ter pelo menos 50 caracteres")
    .max(300, "Bio curta deve ter no máximo 300 caracteres"),
  bioLong: z
    .string()
    .min(100, "Bio longa deve ter pelo menos 100 caracteres")
    .max(2000, "Bio longa deve ter no máximo 2000 caracteres"),

  // Áreas de atuação
  areas: z.object({
    criminal: areaSchema,
    compliance: areaSchema,
    direitosHumanos: areaSchema,
  }),

  // Credenciais
  credentials: z
    .array(credentialSchema)
    .min(1, "Mínimo 1 credencial")
    .max(10, "Máximo 10 credenciais"),

  // Timeline
  timeline: z
    .array(timelineItemSchema)
    .min(1, "Mínimo 1 item na timeline")
    .max(15, "Máximo 15 itens na timeline"),

  // Links
  links: linksSchema,

  // Observações
  notes: z.string().optional().default(""),

  // Consentimento
  consent: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos",
  }),
});

export type BriefingInput = z.infer<typeof briefingSchema>;
export type AreaInput = z.infer<typeof areaSchema>;
export type TimelineItem = z.infer<typeof timelineItemSchema>;
export type CredentialItem = z.infer<typeof credentialSchema>;
export type LinksInput = z.infer<typeof linksSchema>;

/**
 * Converte o briefing para o formato de constants.ts
 */
export function briefingToConstants(data: BriefingInput) {
  const MARCELO_PROFILE = {
    name: data.name,
    headline: data.bioShort,
    badges: [data.oab || "OAB/MG", data.city || "Belo Horizonte"],
    positioning: {
      title: "Advogado Criminalista",
      subtitle: data.bioShort,
    },
    summary: data.bioLong.split("\n").filter((p) => p.trim()),
    credentials: data.credentials.map((c) => ({
      icon: c.icon,
      title: c.title,
      description: c.description,
    })),
    timeline: data.timeline.map((t) => ({
      year: t.year || "",
      label: t.label,
    })),
    instagramUrl: data.links.instagram || "",
    youtubeUrl: data.links.youtube || "",
    linkedinUrl: data.links.linkedin || "",
  };

  const AREAS_DATA = {
    tracks: [
      {
        slug: "criminal",
        title: data.areas.criminal.title,
        subtitle: data.areas.criminal.subtitle,
        description: data.areas.criminal.description,
        icon: "Scale",
        color: "bronze",
        hero: {
          title: data.areas.criminal.title,
          subtitle: data.areas.criminal.subtitle,
          description: data.areas.criminal.description,
          values: data.areas.criminal.bullets.slice(0, 3),
        },
        scope: data.areas.criminal.bullets,
        whenToSeek: data.areas.criminal.whenToSeek,
        faq: data.areas.criminal.faq,
      },
      {
        slug: "compliance",
        title: data.areas.compliance.title,
        subtitle: data.areas.compliance.subtitle,
        description: data.areas.compliance.description,
        icon: "Shield",
        color: "bronze",
        hero: {
          title: data.areas.compliance.title,
          subtitle: data.areas.compliance.subtitle,
          description: data.areas.compliance.description,
          values: data.areas.compliance.bullets.slice(0, 3),
        },
        scope: data.areas.compliance.bullets,
        whenToSeek: data.areas.compliance.whenToSeek,
        faq: data.areas.compliance.faq,
      },
      {
        slug: "direitos-humanos",
        title: data.areas.direitosHumanos.title,
        subtitle: data.areas.direitosHumanos.subtitle,
        description: data.areas.direitosHumanos.description,
        icon: "Heart",
        color: "bronze",
        hero: {
          title: data.areas.direitosHumanos.title,
          subtitle: data.areas.direitosHumanos.subtitle,
          description: data.areas.direitosHumanos.description,
          values: data.areas.direitosHumanos.bullets.slice(0, 3),
        },
        scope: data.areas.direitosHumanos.bullets,
        whenToSeek: data.areas.direitosHumanos.whenToSeek,
        faq: data.areas.direitosHumanos.faq,
      },
    ],
  };

  const CONTACT = {
    email: data.email,
    whatsapp: data.whatsapp,
    oab: data.oab,
    city: data.city,
    atendimento: data.atendimento,
    social: {
      instagram: data.links.instagram,
      linkedin: data.links.linkedin,
      youtube: data.links.youtube,
      website: data.links.website,
    },
  };

  return {
    MARCELO_PROFILE,
    AREAS_DATA,
    CONTACT,
    _meta: {
      generatedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/**
 * Valores default para o formulário
 */
export const defaultBriefingValues: Partial<BriefingInput> = {
  name: "",
  oab: "",
  city: "Belo Horizonte",
  atendimento: "Online e presencial",
  email: "",
  whatsapp: "",
  bioShort: "",
  bioLong: "",
  areas: {
    criminal: {
      title: "Direito Criminal",
      subtitle: "Defesa técnica, ética e estratégica em matéria penal",
      description: "",
      bullets: [""],
      whenToSeek: [""],
      faq: [{ question: "", answer: "" }],
    },
    compliance: {
      title: "Compliance",
      subtitle: "Programas de integridade e prevenção de riscos",
      description: "",
      bullets: [""],
      whenToSeek: [""],
      faq: [{ question: "", answer: "" }],
    },
    direitosHumanos: {
      title: "Direitos Humanos e Antidiscriminação",
      subtitle: "Defesa de direitos fundamentais e combate à discriminação",
      description: "",
      bullets: [""],
      whenToSeek: [""],
      faq: [{ question: "", answer: "" }],
    },
  },
  credentials: [{ icon: "Award", title: "", description: "" }],
  timeline: [{ label: "", year: "" }],
  links: {
    instagram: "",
    linkedin: "",
    youtube: "",
    website: "",
    publications: [],
    interviews: [],
  },
  notes: "",
  consent: false,
};
