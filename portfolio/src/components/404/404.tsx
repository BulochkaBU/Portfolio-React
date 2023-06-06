"use client";

import { useRouter } from "next/navigation";

export default function PageError404() {
  const router = useRouter();
  return (
    <section className="text-center mt-10">
      <iframe
        src="https://embed.lottiefiles.com/animation/140399"
        className="mx-auto"
      ></iframe>

      <p className="mt-3 text-orange-600">Not Found</p>

      <div className="mt-3">
        <p className="m-0 font-bold  text-slate-800 dark:text-white-">
          The page you are trying to reach does not exist or has been deleted.
        </p>
        <button
          className="mt-3 font-bold  text-slate-800 dark:text-white"
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </section>
  );
}
