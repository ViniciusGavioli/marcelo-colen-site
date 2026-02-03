'use client';

import Script from 'next/script';

// Google Ads ID - Heteroidentificação Campaign
export const GOOGLE_ADS_ID = 'AW-17916516335';

export default function GoogleAdsTag() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                id="google-ads-gtag"
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-ads-config"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ADS_ID}');
                `}
            </Script>
        </>
    );
}

// Helper para disparar eventos de conversão do Google Ads
export function trackGoogleAdsConversion() {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
            'event',
            'conversion',
            { 'send_to': 'AW-17916516335/wVSJCNbo_fAbEO-vod9C' }
        );
    }
}
