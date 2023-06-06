import Link from "next/link";

interface Props {
  nav: {
    about: string;
    works: string;
    contacts: string;
  };
}

export default function NavBar({ dictionary }: { dictionary: Props }) {
  return (
    <>
      <nav className="flex my-3 w-full px-3 h-16 items-center justify-center">
        <div>
          <Link
            href="#about"
            className="p-3 pr-5 font-bold  text-slate-800 dark:text-white  hover:text-pink-600"
          >
            {dictionary.nav.about}
          </Link>
          <Link
            href="#works"
            className="p-3 pr-5 font-bold text-slate-800 dark:text-white hover:text-pink-600"
          >
            {dictionary.nav.works}
          </Link>
          <Link
            href="#contacts"
            className="p-3 pr-5 font-bold text-slate-800 dark:text-white hover:text-pink-600"
          >
            {dictionary.nav.contacts}
          </Link>
        </div>
      </nav>
    </>
  );
}
