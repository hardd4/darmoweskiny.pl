import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-center text-white">
      <div>
        <p className="text-sm font-black uppercase tracking-[.2em] text-red-500">Błąd 404</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">Nie znaleziono strony</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white sm:text-base">Ten adres nie istnieje albo został przeniesiony.</p>
        <Link href="/" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase transition hover:bg-red-500">
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
