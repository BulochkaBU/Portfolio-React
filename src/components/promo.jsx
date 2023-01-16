import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const Promo = ({ onClickHamburger }) => {
  const { t, i18n } = useTranslation();
  const [languageRu, setLanguageRu] = useState(false);
  console.log(process.env.NODE_ENV);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageRu(!languageRu);
  };

  return (
    <section className="promo">
      <div className="hamburger" onClick={onClickHamburger}>
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <button
        className="btn btn_lang"
        onClick={
          languageRu ? () => changeLanguage("en") : () => changeLanguage("ru")
        }
      >
        {languageRu ? "EN" : "RU"}
      </button>

      <a
        className="promo__link_cv btn"
        href={
          languageRu
            ? "CV_Anastasia_Prudinskaya_(RUS).pdf"
            : "CV_Anastasia_Prudinskaya_(ENG).pdf"
        }
        download
      >
        {languageRu ? "Резюме" : "CV"}
      </a>

      <div className="container">
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="title title_fz19 title_fz15 subheader__subtitle subheader__subtitle_promo">
            {t("Меня зовут Анастасия Прудинская")}
          </div>
          <h1 className="title title_fz48 promo__title">
            {t("Я начинающий")} <br></br> {t("Frontend-разработчик")}
          </h1>
          <div className="promo__btns">
            <a href="#works" className="promo__link btn">
              {t("Портфолио")}
            </a>
            <a href="#about-me" className="promo__link promo__link_about-me">
              {t("Про меня")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Promo);
