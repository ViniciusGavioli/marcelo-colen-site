// Analytics IDs - DESCONECTADO
// Quando conectar, adicione os IDs reais aqui

export const GTM_ID = "";
export const GA_ID = "";
export const ADS_CONVERSION_ID = "";
export const FB_PIXEL_ID = "";

// Event tracking functions (preparadas para quando GTM/GA estiverem ativos)
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
