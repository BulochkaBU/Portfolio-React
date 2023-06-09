import Link from "next/link";
import classes from "./works.module.scss";

export default function Works() {
  const works: any = [
    { name: "LKS", link: "https://github.com/littleknitsstory/frontend" },
    {
      name: "Portfolio",
      link: "https://github.com/BulochkaBU/Portfolio-React",
    },
    { name: "Marvel", link: "https://github.com/BulochkaBU/marvel" },
    {
      name: "Heroes",
      link: "https://github.com/BulochkaBU/hero_admin_panel_template",
    },
    { name: "AlfaDev", link: "https://github.com/BulochkaBU/alphadev" },
  ];

  return (
    <section className="my-8 sm:my-12 px-4 min-[370px]:px-8 min-[400px]:px-16 xl:px-28">
      <h2 className="sm:text-3xl text-2xl font-bold text-green-700 dark:text-green-500 ">
        works
      </h2>
      <div className="flex justify-around items-center mt-7">
        {works.map((work: any) => (
          <>
            <div
              className={`${classes.circle} flex justify-center items-center bg-orange-200 font-bold dark:text-white dark:bg-orange-600`}
            >
              <Link href={work.link}>{work.name}</Link>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
