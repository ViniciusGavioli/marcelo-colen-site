import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS, NAV_ITEMS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const fullAddress = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.complement} - ${SITE_CONFIG.address.neighborhood}, ${SITE_CONFIG.address.city}/${SITE_CONFIG.address.state}`;

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Top section - Logo and tagline */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-tight">
                {SITE_CONFIG.name.split(" ")[0]}
                <span className="text-bronze mx-2">|</span>
                <span className="font-normal">Advocacia</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-bronze text-sm font-medium tracking-wide">
              {SITE_CONFIG.oab}
            </p>
          </div>
          
          {/* Navigation columns */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-3 gap-8">
              {/* Menu */}
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white/40">
                  Menu
                </h4>
                <ul className="space-y-3">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 hover:text-bronze transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Áreas */}
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white/40">
                  Áreas de Atuação
                </h4>
                <ul className="space-y-3">
                  {FOOTER_LINKS.conteudo.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-bronze transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-white/40">
                  Contato
                </h4>
                <ul className="space-y-4">
                  <li className="text-sm text-white/70 leading-relaxed">
                    <MapPin className="w-4 h-4 inline-block mr-2 text-bronze" />
                    {fullAddress}
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, "")}`}
                      className="text-sm text-white/70 hover:text-bronze transition-colors"
                    >
                      <Phone className="w-4 h-4 inline-block mr-2 text-bronze" />
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm text-white/70 hover:text-bronze transition-colors"
                    >
                      <Mail className="w-4 h-4 inline-block mr-2 text-bronze" />
                      {SITE_CONFIG.contact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm">Precisa de orientação jurídica?</p>
              <p className="font-serif text-xl text-white">Entre em contato para uma análise inicial</p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bronze text-white text-sm font-medium hover:bg-bronze-hover transition-colors"
            >
              Fale pelo WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {currentYear} {SITE_CONFIG.fullName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <p className="mt-8 text-xs text-white/30 text-center max-w-3xl mx-auto leading-relaxed">
            Este site tem caráter informativo e não constitui publicidade ou oferta de
            serviços. O conteúdo disponibilizado não configura aconselhamento jurídico.
            Cada caso requer análise individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
}
