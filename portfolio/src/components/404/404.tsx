"use client";

import Link from "next/link";

export default function PageError404() {
  return (
    <section className="text-center mt-28">
      <p className="mt-3 sm:text-6xl text-3xl text-orange-600">404</p>
      <p className="mt-3 sm:text-6xl text-3xl text-orange-600">Not found</p>
      <p className="mt-10 sm:text-6xl text-3xl text-slate-800 hover:text-green-700">
        <Link href="/welcome">Go to main</Link>
      </p>
    </section>
  );
}
