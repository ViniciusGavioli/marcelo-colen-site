import { Container } from "@/components/layout";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";
import { SITE_CONFIG } from "@/lib/constants";

export function CriminalFooter() {
    return (
        <footer className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Brand Seal */}
                    <div className="w-16 h-16 rounded-full border border-[#c9a227]/30 flex items-center justify-center mx-auto mb-10">
                        <ShieldCheck className="w-8 h-8 text-[#c9a227]" />
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        {CRIMINAL_PAGE.footer.headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {CRIMINAL_PAGE.footer.subheadline}
                    </p>

                    {/* Premium CTA */}
                    <a
                        href="/consulta"
                        className="inline-flex items-center justify-center gap-4 px-12 py-6 font-bold text-xl rounded-full transition-all duration-300 bg-white hover:bg-gray-100 text-black shadow-2xl hover:scale-105"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {CRIMINAL_PAGE.footer.cta}
                    </a>

                    {/* Legal Info */}
                    <div className="mt-24 pt-12 border-t border-white/10 grid md:grid-cols-3 gap-8 items-center">
                        <div className="text-left">
                            <p className="text-white font-bold text-lg mb-1">{SITE_CONFIG.name}</p>
                            <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase">{SITE_CONFIG.oab}</p>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-500 text-sm">
                                Atendimento Criminal Estratégico em <br /> todo o território nacional.
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-gray-400 text-sm mb-1">{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}</p>
                            <p className="text-gray-600 text-xs">A defesa é um direito inalienável.</p>
                        </div>
                    </div>

                    <p className="mt-16 text-[10px] text-gray-700 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} {SITE_CONFIG.fullName} • Todos os direitos reservados
                    </p>
                </div>
            </Container>

            {/* Background shadow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a227]/5 to-transparent pointer-events-none" />
        </footer>
    );
}
