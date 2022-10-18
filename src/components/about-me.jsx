import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import React from "react";
import mainPhoto from "../img/main-photo.jpg";
import dataSkills from "../dataBase.json";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="grid-container">
          <div className="grid-elem" id="grid-photo">
            <img className="about-me__photo" src={mainPhoto} alt="me" />
          </div>
          <div className="grid-elem">
            <div className="title title_fz19 subheader__subtitle subheader__subtitle_about-me">
              {t("Про меня")}
            </div>
            <h2 className="title title_fz36 subheader__title subheader__title_about-me">
              {t("Меня зовут Анастасия")}
            </h2>
            <div className="subheader__divider subheader__divider_about-me"></div>
            <div className="about-me__descr">
              <p>
                {t(
                  "В 2020 году я решила поменять свою деятельность и войти в 'IT'. Изучала, какие бывают направления, инструменты, требования, распрашивала специалистов об их работе, пробовала на себя примерить различные профессии, и пришла к тому, что ближе мне разработка. Мне нравится видеть результат своих действий и создавать на чистой странице браузера красивые, анимированные и функциональные сайты."
                )}
              </p>
              <p>
                {t(
                  "Начала с языка пограммирования Python и его фреймворком Django, и последующий поиск стажировки/работы привел меня в компанию, где требовались молодые 'зеленые' специалисты, правда, со знанием JavaScript и React. Окрыленная такой перспективой, я нашла новые курсы и погрузилась в учебу. К моменту, когда я их заканчивала, я переехала в другую страну, и о стажировке в той компании, пришлось забыть. Но это меня ни чуть не оставливает, наоборот, появилось дополнительное время, чтобы еще поднятнуть знания инструментов верстки HTML и CSS, чем я и занялась."
                )}
              </p>
              <p>
                {t(
                  "На сегодняшний день я готова к новым открытиям, новым возможностям и к новым испытаниям!"
                )}
              </p>
            </div>
          </div>

          <div className="skills__rating">
            {dataSkills.rating.map(({id, name, counter}) => (
              <div className="skills__rating-item" key={id}>
                <div className="titletitle_fz14 skills__rating-title">
                  {t(name)}
                </div>
                <div className="skills__rating-counter">{counter}</div>
                <div className="skills__rating-line">
                  <span style={{ width: counter }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(AboutMe);
