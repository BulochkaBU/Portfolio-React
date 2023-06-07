import { Locale } from "@/i18n-config";
import Link from "next/link";

export default function CV({ lang }: { lang: Locale }) {
  return (
    <div className=" hover:border border-pink-600 rounded-full">
      <Link
        className="p-3 font-bold dark:text-white text-pink-600 text-xl "
        href={
          lang === "ru"
            ? "CV_Anastasia_Prudinskaya_(RUS).pdf"
            : "CV_Anastasia_Prudinskaya_(ENG).pdf"
        }
        download
      >
        {lang === "ru" ? "Резюме" : "CV"}
      </Link>
    </div>
  );
}
