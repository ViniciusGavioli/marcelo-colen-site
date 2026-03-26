module.exports = [
"[project]/.claude/worktrees/clever-boyd/src/lib/analytics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADS_CONVERSION_ID",
    ()=>ADS_CONVERSION_ID,
    "ADS_CONVERSION_LABEL",
    ()=>ADS_CONVERSION_LABEL,
    "FB_PIXEL_ID",
    ()=>FB_PIXEL_ID,
    "GA_ID",
    ()=>GA_ID,
    "GTM_ID",
    ()=>GTM_ID,
    "trackEvent",
    ()=>trackEvent,
    "trackFormSubmission",
    ()=>trackFormSubmission,
    "trackGoogleAdsWhatsAppConversion",
    ()=>trackGoogleAdsWhatsAppConversion,
    "trackPageView",
    ()=>trackPageView,
    "trackWhatsAppClick",
    ()=>trackWhatsAppClick
]);
const GTM_ID = "GTM-P4XVVVQM";
const GA_ID = "G-XHC2DVLZES";
const ADS_CONVERSION_ID = "AW-17916516335"; // Google Ads - Heteroidentificação Campaign
const ADS_CONVERSION_LABEL = "wVSJCNbo_fAbEO-vod9C"; // WhatsApp conversion label
const FB_PIXEL_ID = "1269676835042138"; // Facebook Pixel ID
const trackEvent = (eventName, eventData)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const trackGoogleAdsWhatsAppConversion = (url)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return false;
};
const trackWhatsAppClick = (e)=>{
    // Deduplicação: disparar apenas uma vez por sessão
    if (("TURBOPACK compile-time value", "undefined") !== "undefined" && sessionStorage.getItem("wa_fired")) //TURBOPACK unreachable
    ;
    // Google Analytics event
    trackEvent("whatsapp_click", {
        event_category: "engagement",
        event_label: "whatsapp_contact"
    });
    // Marcar como disparado
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Google Ads conversion com callback
    if (e) {
        const url = e.currentTarget.href;
        const handled = trackGoogleAdsWhatsAppConversion(url);
        if (handled) {
            e.preventDefault(); // Callback vai navegar após conversão
        }
    } else {
        trackGoogleAdsWhatsAppConversion();
    }
};
const trackFormSubmission = (formType)=>{
    trackEvent("form_submit", {
        form_type: formType,
        event_category: "conversion"
    });
};
const trackPageView = (pagePath, pageTitle)=>{
    trackEvent("page_view", {
        page_path: pagePath,
        page_title: pageTitle
    });
};
}),
"[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/clever-boyd/src/lib/analytics.ts [app-rsc] (ecmascript)");
;
;
;
function LandingPageLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans bg-[#3D2314]",
        style: {
            fontFamily: "var(--font-sans)"
        },
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GTM_ID"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: `https://www.googletagmanager.com/ns.html?id=${__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GTM_ID"]}`,
                    height: "0",
                    width: "0",
                    style: {
                        display: "none",
                        visibility: "hidden"
                    }
                }, void 0, false, {
                    fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GTM_ID"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                id: "gtm-script",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GTM_ID"]}');
            `
                }
            }, void 0, false, {
                fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GA_ID"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: `https://www.googletagmanager.com/gtag/js?id=${__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GA_ID"]}`,
                        strategy: "afterInteractive"
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: "ga-script",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$clever$2d$boyd$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GA_ID"]}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  'conversion_linker': true
                });
              `
                        }
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/.claude/worktrees/clever-boyd/src/app/(lp)/layout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$4_$40$babel$2b$core$40$7$2e$2_1030efa206a82bc0948ff4616bea95d1$2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.4_@babel+core@7.2_1030efa206a82bc0948ff4616bea95d1/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_bbe5a5ef._.js.map