"use client";

import { Container } from "@/components/layout";

export function CotasNaoEOFim() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: '#1a1a1a' }}
            >
              Foi impedido de concorrer como cotista?"
            </h2>

            {/* Text content */}
            <div className="space-y-4" style={{ color: '#333' }}>
              <p className="leading-relaxed">
                Ter sua autodeclaração racial rejeitada pela banca avaliadora pode ser 
                um golpe duro — mas não significa <span className="italic">o fim do seu sonho</span>.
              </p>
              
              <p className="leading-relaxed">
                A legislação brasileira garante instrumentos eficazes para{" "}
                <strong>reverter decisões injustas</strong>, especialmente quando não são respeitados os 
                critérios legais e constitucionais aplicáveis às cotas raciais. Com o 
                apoio certo, é possível <strong>formular um recurso administrativo</strong> ou, se 
                necessário, <strong>ajuizar uma ação judicial com embasamento sólido</strong>.
              </p>

              <p className="leading-relaxed">
                Cada caso exige estratégia, conhecimento e atuação precisa. E é 
                justamente isso que oferecemos: uma abordagem jurídica 
                especializada, com experiência prática e embasamento nos principais 
                precedentes judiciais sobre a matéria.
              </p>

              <p 
                className="font-medium underline"
                style={{ color: '#1a1a1a' }}
              >
                Você tem o direito de lutar… E não precisa fazer isso sozinho!
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Marcelo Colen - Heteroidentificação"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
