export function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function AttorneyJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Attorney",
        name: "Marcelo Colen",
        alternateName: "Dr. Marcelo Colen",
        description:
            "Advogado especialista em heteroidentificação, cotas raciais e direito antidiscriminatório. Mestre em Direito pela UFMG, Diretor de Diversidade da OAB/MG.",
        url: "https://marcelocolen.com.br",
        telephone: "+55-31-97220-6996",
        email: "marcelo@cardosocolen.com.br",
        image: "https://marcelocolen.com.br/images/marcelo/marcelo-hero.jpg",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Afonso Pena, 1500, Sala 1201",
            addressLocality: "Belo Horizonte",
            addressRegion: "MG",
            postalCode: "30130-001",
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -19.9191,
            longitude: -43.9386,
        },
        areaServed: {
            "@type": "Country",
            name: "Brasil",
        },
        priceRange: "$$",
        openingHours: "Mo-Fr 08:00-18:00",
        sameAs: [
            "https://instagram.com/marcelocolen.adv",
            "https://youtube.com/@MarceloColenAdvogado",
        ],
        knowsAbout: [
            "Heteroidentificação",
            "Cotas Raciais",
            "Direito Antidiscriminatório",
            "Direito Criminal",
            "Compliance Antidiscriminatório",
        ],
        hasCredential: [
            {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                name: "Mestre em Direito",
                recognizedBy: {
                    "@type": "Organization",
                    name: "Universidade Federal de Minas Gerais (UFMG)",
                },
            },
        ],
        memberOf: [
            {
                "@type": "Organization",
                name: "OAB/MG",
                description: "Diretor de Diversidade e Inclusão",
            },
            {
                "@type": "Organization",
                name: "Conselho Federal da OAB",
                description: "Secretário da Comissão Nacional de Igualdade Racial",
            },
        ],
    };

    return <JsonLd data={data} />;
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return <JsonLd data={data} />;
}
