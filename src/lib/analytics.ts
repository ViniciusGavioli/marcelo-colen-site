// Analytics IDs - CONECTADO
export const GTM_ID = "GTM-P4XVVVQM";
export const GA_ID = ""; // Preencher com seu GA4 ID quando disponível
export const ADS_CONVERSION_ID = ""; // Preencher com seu Google Ads ID quando disponível
export const FB_PIXEL_ID = ""; // Preencher com seu Facebook Pixel ID quando disponível

// Event tracking functions
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: "whatsapp_contact"
  });
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
