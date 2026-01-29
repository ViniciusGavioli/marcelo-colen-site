"use client";

import Image from "next/image";
import { Instagram, MessageCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Gostaria de conversar sobre meu caso de heteroidentificação.";

export function CotasInstagramWordpress() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Instagram Profile Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 max-w-md w-full">
              {/* Profile Header */}
              <div className="flex items-start gap-4">
                {/* Profile Photo with gradient border */}
                <div className="relative shrink-0">
                  <div 
                    className="w-20 h-20 rounded-full p-[3px]"
                    style={{ 
                      background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)' 
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                      <Image
                        src="/images/wordpress/marcelo-hero.jpg"
                        alt="Marcelo Colen"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">marcelocolen.adv</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500" />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg text-gray-700 font-medium">
                      Seguindo ▾
                    </button>
                    <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg text-gray-700 font-medium">
                      Enviar mensagem
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mt-3 text-sm">
                    <div>
                      <span className="font-bold text-gray-900">467</span>
                      <span className="text-gray-500 ml-1">posts</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">55 mil</span>
                      <span className="text-gray-500 ml-1">seguidores</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">4.959</span>
                      <span className="text-gray-500 ml-1">seguindo</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-3 text-sm text-gray-700 space-y-0.5">
                    <p className="font-semibold">Marcelo Colen</p>
                    <p className="text-gray-500">Criador(a) de conteúdo digital</p>
                    <p>Racismo é crime. Reaja! ✊🏿</p>
                    <p>Atuação jurídica em casos de discriminação racial 👨🏿‍⚖️</p>
                    <p>Diretor da OAB/MG ⚠️</p>
                    <p>Atendimento 📲</p>
                  </div>

                  {/* Followed by */}
                  <p className="mt-2 text-xs text-gray-500">
                    Seguido(a) por <span className="font-semibold">drathais.bh</span>, <span className="font-semibold">marinacolenfotografia</span> e outras 9 pessoas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: '#1A1A1A' }}
            >
              Acompanhe meu Instagram ou entre em contato:
            </h2>

            {/* Instagram Button - Gradient */}
            <a
              href="https://instagram.com/marcelocolen.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg"
              style={{ 
                background: 'linear-gradient(90deg, #F7B731 0%, #DD2A7B 50%, #8134AF 100%)',
              }}
            >
              <Instagram className="w-6 h-6" />
              @marcelocolen.adv
            </a>

            {/* WhatsApp Button - Green */}
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg"
              style={{ 
                backgroundColor: '#25D366',
              }}
            >
              <MessageCircle className="w-6 h-6" />
              Falar com um advogado
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
