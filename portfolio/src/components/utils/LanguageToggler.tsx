"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, i18n } from "@/i18n-config";

export default function LanguageToggler() {
  const pathname = usePathname();
  const locales = i18n.locales;
  const currentLanguage = pathname.split("/")[1] as Locale;

  const togglerText = {
    en: "En",
    ru: "Ru",
  };

  function toggleLanguages() {
    let nextLanguage: string;

    const currentLanguageIndex = locales.findIndex(
      (locale) => locale === currentLanguage
    );

    if (currentLanguageIndex >= locales.length - 1) {
      nextLanguage = `${pathname.replace(currentLanguage, locales[0])}`;
    } else {
      nextLanguage = `${pathname.replace(
        currentLanguage,
        locales[currentLanguageIndex + 1]
      )}`;
    }

    return nextLanguage;
  }

  return (
    <Link
      replace
      href={toggleLanguages()}
      className="p-3 font-bold dark:text-white text-orange-600"
    >
      {togglerText[currentLanguage]}
    </Link>
  );
}
