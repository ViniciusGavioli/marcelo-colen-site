import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container className="text-center">
        <div className="max-w-lg mx-auto">
          {/* 404 Number */}
          <p className="text-8xl md:text-9xl font-bold text-bronze/20 mb-4">
            404
          </p>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Página não encontrada
          </h1>
          
          {/* Description */}
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
            Verifique o endereço digitado ou navegue pelo menu.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-bronze text-bronze hover:bg-bronze hover:text-white"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
