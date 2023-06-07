import { Locale } from "@/i18n-config";
import CV from "../cv/CV";
import DarkMode from "../utils/DarkMode";
import LanguageToggler from "../utils/LanguageToggler";

interface Props {
  dictionary: Dictionary;
  lang: Locale;
}
interface Dictionary {
  dark: string;
  light: string;
}

export default function Features({ dictionary, lang }: Props) {
  return (
    <div className="flex items-center justify-around my-8  ">
      <LanguageToggler />
      <CV lang={lang} />
      <DarkMode dictionary={dictionary} />
    </div>
  );
}
