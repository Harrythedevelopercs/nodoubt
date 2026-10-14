"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Scripts = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;
      removeListeners();

      /* ----------------------------
             ✅ Google Tag Manager
        ----------------------------- */
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      if (gtmId) {
        const gtmScript = document.createElement("script");
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        document.head.appendChild(gtmScript);

        // GTM noscript
        const noscriptDiv = document.createElement("noscript");
        noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.insertBefore(noscriptDiv, document.body.firstChild);
      }

      /* ----------------------------
             ✅ Google Analytics & Ads (gtag.js)
        ----------------------------- */
      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      const adsId = process.env.NEXT_PUBLIC_ADS_ID;
      if (gaId || adsId) {
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId || adsId}`;
        document.head.appendChild(gaScript);

        gaScript.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          if (gaId) gtag("config", gaId);
          if (adsId) gtag("config", adsId);
        };
      }

      /* ----------------------------
             ✅ Tawk.to Chat
        ----------------------------- */
      const tawkSrc = process.env.NEXT_PUBLIC_TAWK_SRC;
      if (tawkSrc && !window.Tawk_API) {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const tawkScript = document.createElement("script");
        tawkScript.async = true;
        tawkScript.src = tawkSrc;
        tawkScript.charset = "UTF-8";
        document.body.appendChild(tawkScript);
      }
    };

    const events = ["pointerdown", "click", "touchstart", "keydown"];
    const addListeners = () => events.forEach((evt) => window.addEventListener(evt, loadScripts, { passive: true, once: true }));
    const removeListeners = () => events.forEach((evt) => window.removeEventListener(evt, loadScripts));

    addListeners();
    const timer = setTimeout(loadScripts, 6000);

    return () => {
      removeListeners();
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default Scripts;
