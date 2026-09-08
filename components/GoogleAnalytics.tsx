'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MEASUREMENT_ID = 'G-DT3SCN8P6R';
const META_PIXEL_ID = '1568612291403940';
const CONSENT_KEY = 'analytics-consent';

type Consent = 'accepted' | 'declined' | null;

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'accepted' || savedConsent === 'declined') {
      setConsent(savedConsent);
    } else {
      setShowSettings(true);
    }
  }, []);

  function chooseConsent(value: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setShowSettings(false);

    if (value === 'declined') {
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0]?.trim();
        if (name === '_ga' || name?.startsWith('_ga_') || name === '_fbp' || name === '_fbc') {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        }
      });
    }
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${MEASUREMENT_ID}');`}
          </Script>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
const pageViewEventId = crypto.randomUUID();
fbq('track', 'PageView', {}, {eventID: pageViewEventId});
fetch('/api/meta-event', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({eventName: 'PageView', eventId: pageViewEventId, eventSourceUrl: location.href, data: {}}),
  keepalive: true
});`}
          </Script>
        </>
      )}

      {showSettings ? (
        <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#0b090a]/95 p-4 text-white shadow-2xl shadow-black/60 backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-5" role="dialog" aria-label="Ustawienia cookies" aria-live="polite">
          <p className="text-sm font-black">Ta strona używa plików cookies</p>
          <p className="mt-1.5 text-xs leading-5 text-white/80 sm:text-sm">
            Używamy cookies analitycznych, aby lepiej rozumieć, jak odwiedzasz stronę.{' '}
            <Link href="/polityka-prywatnosci" className="font-bold text-red-400 underline decoration-red-500/50 underline-offset-2 hover:text-red-300">Polityka prywatności</Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => chooseConsent('declined')} className="min-h-11 rounded-xl border border-white/15 px-3 py-2 text-xs font-black uppercase transition hover:bg-white/10">Odrzuć</button>
            <button type="button" onClick={() => chooseConsent('accepted')} className="min-h-11 rounded-xl bg-red-600 px-3 py-2 text-xs font-black uppercase transition hover:bg-red-500">Akceptuj</button>
          </div>
        </div>
      ) : consent !== null ? (
        <button type="button" onClick={() => setShowSettings(true)} className="fixed bottom-3 left-3 z-40 rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-[10px] font-bold text-white/70 backdrop-blur transition hover:text-white sm:bottom-5 sm:left-5">Ustawienia cookies</button>
      ) : null}
    </>
  );
}
