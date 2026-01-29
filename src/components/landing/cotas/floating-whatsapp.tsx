"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show tooltip after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsTooltipVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="relative bg-white shadow-lg rounded-lg p-3 pr-8 max-w-50 animate-fade-in">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-navy font-medium">
            Dúvidas sobre cotas? Fale agora no WhatsApp!
          </p>
          {/* Triangle */}
          <div className="absolute -right-2 bottom-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink("Olá! Vi a página sobre cotas raciais e gostaria de tirar algumas dúvidas.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] transition-all hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
