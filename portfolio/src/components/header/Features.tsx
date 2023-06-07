import DarkMode from "../utils/DarkMode";
import LanguageToggler from "../utils/LanguageToggler";

interface Props {
  dark: string;
  light: string;
}

export default function Features({ dictionary }: { dictionary: Props }) {
  return (
    <div className="flex items-center justify-around my-8  ">
      <LanguageToggler />
      <DarkMode dictionary={dictionary} />
    </div>
  );
}