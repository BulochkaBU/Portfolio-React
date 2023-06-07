import Link from "next/link";
import classes from "./card-menu.module.scss";
import me from "../../assets/images/me.jpg";
import phone from "../../assets/images/phone.jpg";
import works from "../../assets/images/works.png";

interface Props {
  about: string;
  works: string;
  contacts: string;
}
export default function CardsMenu({ dictionary }: { dictionary: Props }) {
  return (
    <div
      className={`${classes.cardGrid} flex justify-center gap-3 lg:gap-10 items-center mt-8 flex-col lg:flex-row`}
    >
      <Link className={`${classes.card} relative `} href="#">
        <div
          className={`${classes.card__background} rounded-2xl `}
          style={{ backgroundImage: `url(${me.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2  text-white text-bold text-3xl p-2 hover:text-pink-600 ">
          {dictionary.about}
        </h3>
      </Link>
      <Link className={`${classes.card} relative  `} href="#">
        <div
          className={`${classes.card__background} rounded-2xl `}
          style={{ backgroundImage: `url(${works.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2 text-white text-bold text-3xl p-2 hover:text-pink-600">
          {dictionary.works}
        </h3>
      </Link>
      <Link className={`${classes.card} relative  `} href="#">
        <div
          className={`${classes.card__background} rounded-2xl `}
          style={{ backgroundImage: `url(${phone.src})` }}
        ></div>
        <h3 className="absolute left-3 bottom-2 text-white text-bold text-3xl p-2 hover:text-pink-600">
          {dictionary.contacts}
        </h3>
      </Link>
    </div>
  );
}
