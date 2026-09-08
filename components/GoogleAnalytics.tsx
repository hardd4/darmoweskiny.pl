'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const MEASUREMENT_ID = 'G-DT3SCN8P6R';
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
        if (name === '_ga' || name?.startsWith('_ga_')) {
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
        </>
      )}

      {showSettings ? (
        <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-white/15 bg-[#0b090a]/95 p-4 text-white shadow-2xl shadow-black/60 backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-5" role="dialog" aria-label="Ustawienia cookies" aria-live="polite">
          <p className="text-sm font-black">ANALITYCZNE COOKIES</p>
          <p className="mt-1.5 text-xs leading-5 text-white/80 sm:text-sm">Czy zgadzasz się na Google Analytics? Pomaga sprawdzać liczbę odwiedzin i ulepszać stronę.</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => chooseConsent('declined')} className="min-h-11 rounded-xl border border-white/15 px-3 py-2 text-xs font-black uppercase transition hover:bg-white/10">Nie teraz</button>
            <button type="button" onClick={() => chooseConsent('accepted')} className="min-h-11 rounded-xl bg-red-600 px-3 py-2 text-xs font-black uppercase transition hover:bg-red-500">Akceptuję</button>
          </div>
        </div>
      ) : consent !== null ? (
        <button type="button" onClick={() => setShowSettings(true)} className="fixed bottom-3 left-3 z-40 rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-[10px] font-bold text-white/70 backdrop-blur transition hover:text-white sm:bottom-5 sm:left-5">Ustawienia cookies</button>
      ) : null}
    </>
  );
}
