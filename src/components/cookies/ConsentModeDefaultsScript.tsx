import Script from "next/script";

/**
 * Inline Consent Mode defaults — must run before any Google tags.
 * Keeps all storage denied until React consent provider grants categories.
 */
export function ConsentModeDefaultsScript() {
  return (
    <Script id="fee-consent-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  );
}
