import Link from "next/link";
import classes from "./promo.module.scss";

interface Props {
  me: string;
  seeMore: string;
}
export default function Promo({ dictionary }: { dictionary: Props }) {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center flex-col">
      <h1
        className={`${classes.glowGreen} sm:text-6xl sm:leading-normal text-3xl uppercase text-center px-6 text-green-700 leading-normal`}
      >
        {dictionary.me}
      </h1>
      <Link
        href="/welcome"
        className={`${classes.glowPink} text-3xl leading-normal uppercase text-center px-6 mt-8 text-pink-700`}
      >
        {dictionary.seeMore}
      </Link>
    </section>
  );
}
