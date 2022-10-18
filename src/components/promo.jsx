import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const Promo = ({ onClickHamburger }) => {
  const { t, i18n } = useTranslation();
  const [languageRu, setLanguageRu] = useState(false);

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
          languageRu ? () => changeLanguage("ru") : () => changeLanguage("en")
        }
      >
        {languageRu ? "RU" : "EN"}
      </button>

      <div className="container">
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="title title_fz19 title_fz15 subheader__subtitle subheader__subtitle_promo">
            {t("Меня зовут Анастасия Прудинская")}
          </div>
          <h1 className="title title_fz48 promo__title">
            {t("Я начинающий")} <br></br> {t("React-разработчик")}
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
