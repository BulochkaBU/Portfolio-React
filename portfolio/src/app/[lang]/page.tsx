import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Promo from "@/components/promo/Promo";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return <Promo dictionary={dictionary} />;
}
