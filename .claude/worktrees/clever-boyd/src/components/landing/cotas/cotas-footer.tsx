import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ============================================================================
// PALETA LP COTAS - MARROM + DOURADO
// ============================================================================
const COLORS = {
  brown: '#8B4513',
  gold: '#D4AF37',
  white: '#FFFFFF',
};

export function CotasFooter() {
  return (
    <footer 
      className="relative"
      style={{ backgroundColor: COLORS.brown }}
    >
      {/* Gold divider line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ 
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
          opacity: 0.5
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div>
            <span 
              className="text-3xl font-serif font-bold"
              style={{ color: COLORS.gold }}
            >
              Marcelo Colen
            </span>
            <p 
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Advocacia especializada em Heteroidentificação, Cotas Raciais 
              e defesa dos direitos à igualdade racial.
            </p>
            <p 
              className="text-xs mt-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {SITE_CONFIG.oab}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: COLORS.white }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-sm flex items-center gap-2 transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Mail className="w-4 h-4" style={{ color: COLORS.gold }} />
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${SITE_CONFIG.contact.whatsapp}`}
                  className="text-sm flex items-center gap-2 transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: COLORS.gold }} />
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/marcelocolen.adv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Instagram className="w-4 h-4" style={{ color: COLORS.gold }} />
                  @marcelocolen.adv
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: COLORS.white }}
            >
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/sobre" 
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Sobre o Advogado
                </Link>
              </li>
              <li>
                <Link 
                  href="/atuacao/igualdade-racial" 
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Área de Atuação
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacidade" 
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/termos" 
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p 
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            © {new Date().getFullYear()} Marcelo Colen Advocacia. Todos os direitos reservados.
          </p>
          <p 
            className="text-xs text-center sm:text-right"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Este site não constitui publicidade irregular. Conforme Provimento 94/2000 da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
