import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Features from "@/components/header/Features";
import CardsMenu from "@/components/cards-menu/CardsMenu";
import About from "@/components/about/About";
import ScrollToTop from "@/components/utils/ScrollToTop";

export default async function Welcome({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="lg:container mx-auto animate__animated  animate__zoomInDown">
      <ScrollToTop />
      <Features dictionary={dictionary} />
      <CardsMenu dictionary={dictionary} />
      <About />
    </div>
  );
}
