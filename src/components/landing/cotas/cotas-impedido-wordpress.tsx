"use client";

import { Container } from "@/components/layout";

export function CotasImpedidoWordpress() {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#D9D9D9' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ============================================ */}
          {/* TEXT SIDE - Left */}
          {/* ============================================ */}
          <div className="space-y-6">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
              style={{ 
                color: '#1A1A1A',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Foi impedido de concorrer como cotista?"
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              Ter sua autodeclaração racial rejeitada pela banca avaliadora pode ser um golpe duro — mas não significa o fim do seu sonho.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              A legislação brasileira garante instrumentos eficazes para{' '}
              <strong>reverter decisões injustas</strong>, especialmente quando não são respeitados os critérios legais e constitucionais aplicáveis às cotas raciais. Com o apoio certo, é possível{' '}
              <strong>formular um recurso administrativo</strong> ou, se necessário,{' '}
              <strong>ajuizar uma ação judicial com embasamento sólido</strong>.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              Cada caso exige estratégia, conhecimento e atuação precisa. E é justamente isso que oferecemos: uma abordagem jurídica especializada, com experiência prática e embasamento nos principais precedentes judiciais sobre a matéria.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed underline font-medium"
              style={{ color: '#1A1A1A' }}
            >
              Você tem o direito de lutar… E não precisa fazer isso sozinho!
            </p>
          </div>

          {/* ============================================ */}
          {/* VIDEO SIDE - Right */}
          {/* ============================================ */}
          <div className="relative">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for video - you can replace with actual video embed */}
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="Dr. Marcelo Colen - Heteroidentificação"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Fallback image if no video */}
              {/* <Image
                src="/images/marcelo/marcelo-video-thumb.jpg"
                alt="Dr. Marcelo Colen"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
