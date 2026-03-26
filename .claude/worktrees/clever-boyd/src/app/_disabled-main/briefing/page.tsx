import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { BriefingForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Briefing | Interno",
  description: "Formulário interno para preenchimento de dados do site.",
  robots: {
    index: false,
    follow: false,
  },
};

interface BriefingPageProps {
  searchParams: Promise<{ k?: string }>;
}

export default async function BriefingPage({ searchParams }: BriefingPageProps) {
  const params = await searchParams;
  const providedToken = params.k;
  const expectedToken = process.env.BRIEFING_ACCESS_TOKEN;

  // Validação do token
  if (!expectedToken) {
    console.error("[Briefing] BRIEFING_ACCESS_TOKEN not configured");
    notFound();
  }

  if (!providedToken || providedToken !== expectedToken) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-off-white py-12">
      <Container size="default">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-graphite mb-3">
            Briefing do Site
          </h1>
          <p className="text-graphite-light max-w-2xl mx-auto">
            Preencha os dados abaixo para gerar o conteúdo do site. Ao enviar,
            você receberá um JSON pronto para copiar e colar no arquivo{" "}
            <code className="bg-graphite/10 px-2 py-0.5 rounded text-sm">
              constants.ts
            </code>
            .
          </p>
        </div>

        {/* Instruções */}
        <div className="mb-8 p-4 bg-bronze/5 border border-bronze/20 rounded-lg">
          <h2 className="font-semibold text-graphite mb-2">Instruções:</h2>
          <ul className="text-sm text-graphite-light space-y-1">
            <li>• Preencha todas as seções obrigatórias (*)</li>
            <li>• Para áreas de atuação, inclua pelo menos 3 bullets por área</li>
            <li>• FAQs devem ter perguntas e respostas completas</li>
            <li>
              • Após enviar, copie o JSON gerado e substitua no arquivo
              constants.ts
            </li>
          </ul>
        </div>

        {/* Form */}
        <BriefingForm accessToken={expectedToken} />
      </Container>
    </main>
  );
}
