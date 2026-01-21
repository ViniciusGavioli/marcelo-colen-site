import Link from "next/link";
import Script from "next/script";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { PortraitCard } from "@/components/ui/portrait";
import { SITE_CONFIG, MARCELO_PROFILE, AREAS_TRACKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  getLegalServiceSchema,
  getPersonSchema,
  getWebsiteSchema,
} from "@/lib/schema";

export default function HomePage() {
  const structuredData = [
    getLegalServiceSchema(),
    getPersonSchema(),
    getWebsiteSchema(),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Section - Editorial Premium */}
      <section className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden bg-editorial">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy to-navy/95" />
        
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-bronze to-transparent opacity-60" />
        
        <Container className="relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7">
              {/* Editorial label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-bronze" />
                <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                  Advocacia Criminal • Compliance • Direitos Humanos
                </p>
              </div>
              
              {/* Main headline - Serif editorial */}
              <h1 
                className="uppercase font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-6 leading-[1.1] relative z-20"
                style={{ color: '#FFFFFF' }}
              >
                Defesa técnica{" "}
                <span style={{ color: '#C5A059' }}>estratégica</span>
                <br />
                em causas complexas
              </h1>
              
              {/* Subheadline */}
              <p 
                className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed relative z-20"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {MARCELO_PROFILE.yearsExperience}+ anos de experiência em defesas criminais,
                estruturação de programas de integridade e litígios estratégicos.
                Atuação em Belo Horizonte e todo o território nacional.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="bronze"
                  className="font-medium px-8"
                >
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost-white"
                >
                  <Link href="/atuacao">
                    Conhecer Áreas de Atuação
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Portrait */}
            <div className="lg:col-span-5 hidden lg:block">
              <PortraitCard
                src="/images/marcelo/marcelo-hero.jpg"
                alt="Dr. Marcelo Colen - Advogado Criminalista"
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </Container>
        
        {/* Bottom decorative element - transição elegante */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-ice via-ice/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-px h-16 bg-linear-to-b from-bronze to-transparent" />
        </div>
      </section>

      {/* Social Proof Bar - Editorial minimal */}
      <section className="py-12 md:py-16 bg-ice border-b border-hairline bg-paper">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium text-navy">{MARCELO_PROFILE.yearsExperience}+</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium text-navy">4</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">Áreas de Especialização</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium text-bronze">OAB</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">{MARCELO_PROFILE.oab}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-medium text-navy">BR</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">Atuação Nacional</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Practice Areas Section - Editorial Cards */}
      <section className="py-20 md:py-28 bg-white bg-paper">
        <Container>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-bronze" />
              <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                Expertise
              </p>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-navy mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atuação concentrada em frentes complementares que demandam
              conhecimento técnico aprofundado e visão estratégica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {AREAS_TRACKS.map((area, index) => (
              <Link
                key={area.slug}
                href={`/atuacao/${area.slug}`}
                className="group block"
              >
                <article className="relative bg-white border border-hairline hover:border-bronze/40 transition-all duration-300 h-full">
                  {/* Top decorative line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-bronze transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="p-8">
                    {/* Number indicator - editorial style */}
                    <div className="mb-6">
                      <span className="font-serif text-5xl text-bronze/20 group-hover:text-bronze/40 transition-colors">
                        0{index + 1}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-bronze transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {area.shortDescription}
                    </p>
                    
                    {/* Highlights with minimal markers */}
                    <ul className="text-sm text-muted-foreground space-y-2 mb-6 border-l border-hairline pl-4">
                      {area.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="relative">
                          <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-bronze/40 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Editorial link */}
                    <div className="flex items-center gap-2 text-bronze text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Explorar área</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Section - Editorial Grid */}
      <section className="py-20 md:py-28 bg-ice bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left column - Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-bronze" />
                  <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                    Diferenciais
                  </p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
                  Por que confiar no escritório
                </h2>
                <p className="text-muted-foreground">
                  Compromisso com excelência técnica e atendimento humanizado em cada caso.
                </p>
              </div>
            </div>
            
            {/* Right column - Features grid - 6 cards */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
                {[
                  {
                    title: "Expertise Comprovada",
                    desc: "Formação acadêmica sólida com especialização e mestrado em Direito. Atuação em tribunais superiores.",
                  },
                  {
                    title: "Atendimento Direto",
                    desc: "O advogado responsável acompanha pessoalmente cada etapa do processo com comunicação transparente.",
                  },
                  {
                    title: "Visão Estratégica",
                    desc: "Análise criteriosa de riscos e oportunidades. Planejamento processual focado em resultados.",
                  },
                  {
                    title: "Sigilo Absoluto",
                    desc: "Confidencialidade garantida em todas as tratativas. Compromisso ético inegociável.",
                  },
                  {
                    title: "Atuação Nacional",
                    desc: "Atendimento em Belo Horizonte e em todo o território brasileiro em causas complexas.",
                  },
                  {
                    title: "Linguagem Acessível",
                    desc: "Explicação clara sobre cada fase processual, sem juridiquês. Você entende seu caso.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 group card-editorial">
                    <span className="font-serif text-3xl text-bronze/30 block mb-3">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-lg text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview Section - Editorial */}
      <section className="py-20 md:py-28 bg-white bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-bronze" />
                <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                  Dr. {MARCELO_PROFILE.name}
                </p>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-navy mb-6 leading-tight">
                Advocacia com{" "}
                <span className="italic text-bronze">propósito</span>{" "}
                e técnica
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Advogado criminalista com {MARCELO_PROFILE.yearsExperience}+ anos de experiência,
                  atuando na defesa de pessoas físicas e jurídicas em processos
                  criminais, inquéritos policiais e procedimentos administrativos.
                </p>
                <p>
                  Especializado em Direito Penal Econômico, Compliance e Direitos Humanos,
                  com formação acadêmica em instituições de referência e atuação
                  perante tribunais de todo o país.
                </p>
                <p>
                  Cada caso recebe atenção individualizada, com estratégia processual
                  definida a partir de análise técnica rigorosa e comunicação
                  transparente com o cliente em todas as etapas.
                </p>
              </div>
              
              <Link
                href="/sobre"
                className="link-editorial"
              >
                Conheça a trajetória profissional
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-bronze/30" />
                <PortraitCard
                  src="/images/marcelo/marcelo-bio.jpg"
                  alt="Dr. Marcelo Colen"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Editorial */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden bg-editorial">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-bronze/40" />
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy to-navy" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-bronze" />
              <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                Consultoria Inicial
              </p>
              <div className="w-8 h-px bg-bronze" />
            </div>
            
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight relative z-20"
              style={{ color: '#FFFFFF' }}
            >
              Precisa de orientação jurídica{" "}
              <span style={{ color: '#C5A059' }}>especializada</span>?
            </h2>
            
            <p 
              className="mb-10 max-w-xl mx-auto relative z-20"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Agende uma consulta inicial para análise do seu caso.
              Atendimento sigiloso e sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bronze"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direto
              </a>
              <Link
                href="/contato"
                className="btn-ghost-white"
              >
                Enviar Mensagem
              </Link>
            </div>

            {/* Instagram CTA */}
            <div className="pt-6 border-t border-white/10">
              <a
                href="https://instagram.com/marcelocolen.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-bronze transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @marcelocolen.adv
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
