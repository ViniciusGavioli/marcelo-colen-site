"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

// ============================================================================
// PALETA LP COTAS - MARROM + DOURADO
// ============================================================================
const COLORS = {
  brown: '#8B4513',
  gold: '#D4AF37',
  white: '#FFFFFF',
};

const NAV_LINKS = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Quem Sou", href: "#quem-sou" },
  { label: "Dúvidas", href: "#faq" },
];

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Quero analisar meu caso de heteroidentificação.";

export function CotasHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? 'rgba(139, 69, 19, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/cotas" className="flex items-center gap-3 group">
            <div className="relative">
              <span 
                className="text-2xl font-serif font-bold tracking-tight"
                style={{ color: COLORS.gold }}
              >
                MC
              </span>
            </div>
            <div className="hidden sm:block">
              <span 
                className="font-medium text-sm block"
                style={{ color: COLORS.white }}
              >
                Marcelo Colen
              </span>
              <span 
                className="text-xs block"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Advocacia
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: COLORS.gold }}
                />
              </button>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: COLORS.gold,
                color: COLORS.white,
                borderRadius: '4px',
              }}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden"
          style={{ 
            backgroundColor: 'rgba(44, 24, 16, 0.98)',
            borderTop: '1px solid rgba(93, 122, 58, 0.2)'
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-lg font-medium transition-colors"
                style={{ 
                  color: 'rgba(255,255,255,0.85)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 font-semibold text-sm"
                style={{
                  backgroundColor: COLORS.gold,
                  color: COLORS.white,
                  borderRadius: '4px',
                }}
              >
                <Phone className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
