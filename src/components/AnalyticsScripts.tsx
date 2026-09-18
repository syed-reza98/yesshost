import Script from "next/script";

// =============================================
// 🔧 আপনার ট্র্যাকিং আইডি এখানে বসান:
// =============================================
const GA_MEASUREMENT_ID = "G-WKRJJB7EPB"; // Google Analytics 4 Measurement ID
const FB_PIXEL_ID = "1033602763169756";           // Facebook Pixel ID
// =============================================

const isEnabled = (id: string, placeholder: string) => Boolean(id && id !== placeholder);

const AnalyticsScripts = () => {
  const gaEnabled = isEnabled(GA_MEASUREMENT_ID, "G-XXXXXXXXXX");
  const fbEnabled = isEnabled(FB_PIXEL_ID, "000000000000000");

  return (
    <>
      {/* Google Analytics 4 */}
      {gaEnabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook / Meta Pixel */}
      {fbEnabled && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
};

export default AnalyticsScripts;
