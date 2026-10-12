import { grafoBase } from "@/lib/dados-estruturados";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Escritório, advogado e site (lib/dados-estruturados.ts), em toda página do
// site e das LPs.
export function DadosEstruturadosBase() {
    return <JsonLd data={grafoBase()} />;
}
