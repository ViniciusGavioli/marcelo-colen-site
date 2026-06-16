import React from "react";

// Analytics IDs - CONECTADO
export const GTM_ID = "GTM-P4XVVVQM";
export const GA_ID = "G-XHC2DVLZES";
export const ADS_CONVERSION_ID = "AW-17916516335"; // Google Ads - Heteroidentificação Campaign
export const ADS_CONVERSION_LABEL = "wVSJCNbo_fAbEO-vod9C"; // WhatsApp conversion label
export const FB_PIXEL_ID = "1269676835042138"; // Facebook Pixel ID

// Event tracking functions
export const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, eventData);
  }
};

// Track Google Ads WhatsApp conversion
export const trackGoogleAdsWhatsAppConversion = () => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      "conversion",
      {
        "send_to": `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}`
      }
    );
    return true;
  }
  return false;
};

// Handler para clicks em botões WhatsApp
export const trackWhatsAppClick = (e?: React.MouseEvent<HTMLAnchorElement>) => {
  // Google Analytics event
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: "whatsapp_contact"
  });

  // Google Ads conversion
  trackGoogleAdsWhatsAppConversion();
};

export const trackFormSubmission = (formType: string) => {
  trackEvent("form_submit", {
    form_type: formType,
    event_category: "conversion"
  });
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle
  });
};
