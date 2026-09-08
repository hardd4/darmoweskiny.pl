import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polityka prywatności — Darmoweskiny.pl',
  description: 'Informacje o plikach cookies i przetwarzaniu danych w serwisie Darmoweskiny.pl.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-white sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl border border-red-500/20 bg-[#0b090a]/95 p-5 shadow-2xl shadow-black/40 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[.2em] text-red-500">Darmoweskiny.pl</p>
        <h1 className="mt-3 text-3xl font-black tracking-[.015em] sm:text-5xl">Polityka prywatności</h1>
        <p className="mt-3 text-sm leading-6 text-white/75">Ostatnia aktualizacja: 8 września 2026 r.</p>

        <PolicySection title="1. Administrator">
          <p>Administratorem serwisu i danych przetwarzanych bezpośrednio przez Darmoweskiny.pl jest właściciel serwisu Darmoweskiny.pl. Kontakt jest możliwy przez profile społecznościowe podane na stronie głównej.</p>
        </PolicySection>

        <PolicySection title="2. Jakie dane są przetwarzane">
          <p>Serwis nie prowadzi kont użytkowników, sprzedaży ani formularzy kontaktowych. Po wyrażeniu zgody narzędzia analityczne mogą przetwarzać informacje o urządzeniu i przeglądarce, adres IP, przybliżoną lokalizację, odwiedzone podstrony, źródło wizyty oraz kliknięcia w bonusy, konkursy i profile społecznościowe.</p>
        </PolicySection>

        <PolicySection title="3. Google Analytics i Meta">
          <p>Za zgodą użytkownika korzystamy z Google Analytics oraz Meta Pixel. Serwis może również przekazywać zdarzenia do Meta przez Conversions API. Dostawcy mogą otrzymywać identyfikatory cookies, adres IP, dane przeglądarki i informacje o interakcjach ze stroną. Dane służą do mierzenia ruchu, skuteczności treści i reklam.</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-red-400">
            <a href="https://policies.google.com/privacy?hl=pl" target="_blank" rel="noopener noreferrer">Polityka Google</a>
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Polityka Meta</a>
          </div>
        </PolicySection>

        <PolicySection title="4. Cookies i zgoda">
          <p>Cookies analityczne i marketingowe są uruchamiane dopiero po wybraniu opcji „Akceptuj”. Zgodę można w każdej chwili zmienić przyciskiem „Ustawienia cookies” na stronie. Odrzucenie zgody nie ogranicza dostępu do treści serwisu.</p>
        </PolicySection>

        <PolicySection title="5. Podstawa i czas przetwarzania">
          <p>Podstawą przetwarzania danych przez narzędzia analityczne i marketingowe jest zgoda użytkownika. Dane są przetwarzane do czasu jej wycofania albo przez okres wynikający z ustawień Google i Meta. Wycofanie zgody nie wpływa na zgodność wcześniejszego przetwarzania.</p>
        </PolicySection>

        <PolicySection title="6. Linki zewnętrzne">
          <p>Strona zawiera linki partnerskie prowadzące do zewnętrznych serwisów, między innymi CSGO-SKINS, CaseHug i G4Skins. Po przejściu na inną stronę obowiązuje polityka prywatności jej operatora. Darmoweskiny.pl nie realizuje wpłat ani konkursów bezpośrednio.</p>
        </PolicySection>

        <PolicySection title="7. Prawa użytkownika">
          <p>W zależności od sytuacji użytkownik może żądać dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania lub wnieść sprzeciw, a także wycofać zgodę. Przysługuje również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
        </PolicySection>

        <Link href="/" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-black uppercase transition hover:bg-red-500">
          Wróć na stronę główną
        </Link>
      </article>
    </main>
  );
}

function PolicySection({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-black tracking-[.015em] sm:text-xl">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">{children}</div>
    </section>
  );
}
