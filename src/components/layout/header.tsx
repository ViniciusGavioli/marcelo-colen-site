"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-hairline">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Editorial Typography */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-navy">
              {SITE_CONFIG.name}
            </span>
            <span className="hidden md:block w-px h-5 bg-hairline" />
            <span className="hidden md:block text-xs text-muted-foreground font-normal tracking-wide uppercase">
              Advocacia
            </span>
          </Link>

          {/* Desktop Navigation - Clean editorial style */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA - Understated elegance */}
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-navy hover:bg-navy-deep text-white font-medium"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full screen editorial */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isMenuOpen ? "max-h-[70vh] pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-4 border-t border-hairline">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-2 py-3 text-base font-medium text-navy hover:text-bronze transition-colors border-b border-hairline/50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile CTA */}
            <Button
              asChild
              size="lg"
              className="mt-4 bg-bronze hover:bg-bronze-hover text-navy font-medium"
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
          </nav>
        </div>
      </div>
    </header>
  );
}
