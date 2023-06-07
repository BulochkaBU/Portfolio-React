import PageError404 from "@/components/404/404";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";

export default async function NotFound() {
  return <PageError404 />;
}
