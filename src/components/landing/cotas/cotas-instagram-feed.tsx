"use client";

import { Instagram } from "lucide-react";
import { Container } from "@/components/layout";

export function CotasInstagramFeed() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Instagram Embed */}
          <div className="relative">
            <div 
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: '#FAFAFA',
                border: '1px solid #DBDBDB'
              }}
            >
              {/* Instagram post header */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#3D2A1E' }}
                >
                  <span className="text-white text-sm font-bold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">marcelocolen.adv</p>
                  <p className="text-xs text-gray-500">Advogado • Especialista em Cotas</p>
                </div>
              </div>
              
              {/* Post image placeholder */}
              <div 
                className="aspect-square flex items-center justify-center"
                style={{ backgroundColor: '#F0F0F0' }}
              >
                <div className="text-center p-8">
                  <Instagram className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500 text-sm">
                    Acompanhe nosso conteúdo diário sobre cotas e concursos
                  </p>
                </div>
              </div>

              {/* Post footer */}
              <div className="p-4">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <span className="font-semibold">marcelocolen.adv</span>{" "}
                  Você sabia que é possível recorrer de uma decisão de heteroidentificação? 
                  Conheça seus direitos! ⚖️
                </p>
                <p className="text-xs text-gray-400 mt-2">Ver todos os 47 comentários</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ color: '#3D2A1E' }}
              >
                Acompanhe nossas redes sociais
              </h2>
              <p className="text-lg" style={{ color: '#666666' }}>
                Fique por dentro de todas as novidades sobre cotas, concursos e direito administrativo.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://instagram.com/marcelocolen.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{ 
                  background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)',
                }}
              >
                <Instagram className="w-5 h-5" />
                <span>Seguir no Instagram</span>
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
