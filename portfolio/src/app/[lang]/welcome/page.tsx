import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Features from "@/components/header/Features";
import NavBar from "@/components/header/Navbar";

export default async function Welcome({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="lg:container mx-auto ">
      <NavBar dictionary={dictionary} />
      <Features dictionary={dictionary} />
    </div>
  );
}
