import { Montserrat } from "next/font/google";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import "animate.css";
import "@/styles/globals.scss";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.header.title,
    description: dictionary.header.description,
    openGraph: {
      title: dictionary.header.title,
      description: dictionary.header.description,
      type: "website",
      siteName: "Anastasiia Prudinskaya is a Frontend-Developer",
      // url: "https://prudinskaya.com/",
      // images: "icon.png",
      icons: {
        icon: "favicon.ico",
      },
    },
    twitter: {
      title: dictionary.header.title,
      description: dictionary.header.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montserrat.className} dark:bg-slate-900`}>
        <div className="min-h-screen ">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  const locales = i18n.locales.map((locale) => ({ lang: locale }));

  return locales;
}
