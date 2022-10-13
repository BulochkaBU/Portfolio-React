import { Link } from "react-router-dom";
import error404image from "../img/404.jpg";

const Page404 = () => {
  return (
    <div className="page-404">
      <img src={error404image} alt="Error" />
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};

export default Page404;
