// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Benvenuto nel mio Blog ✍️
      </h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Qui condividerò articoli, pensieri e risorse interessanti su vari argomenti.
      </p>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Chi sono
        </Link>
        <Link
          href="/posts"
          className="px-6 py-3 border border-gray-400 rounded-2xl shadow hover:bg-gray-100 transition"
        >
          Leggi articoli
        </Link>
      </div>
    </main>
  );
}
