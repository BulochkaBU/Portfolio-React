import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Features from "@/components/header/Features";
import NavBar from "@/components/header/Navbar";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <NavBar dictionary={dictionary} />
      <Features dictionary={dictionary} />
      <iframe src="https://embed.lottiefiles.com/animation/144414"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/142007"></iframe>
    </>
  );
}
