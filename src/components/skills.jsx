import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import WOW from "wowjs";
import dataSkills from "../dataBase.json";

const Skills = () => {
  const { t } = useTranslation();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="title title_fz19 subheader__subtitle subheader__subtitle_skills">
          {t("Про навыки")}
        </div>
        <h2 className="title title_fz36 subheader__title">
          {t("Что я использую в работе")}
        </h2>
        <div className="subheader__divider"></div>
        <div className="skills__wrapper">
          {dataSkills.skills.map((item) => (
            <div
              className="skills__item wow animate__animated animate__fadeIn"
              data-wow-duration={item.durationForSkills}
              key={item.id}
            >
              <img
                src={item.imageSkills}
                alt={item.name}
                className="skills__icon"
              ></img>
              <div className="skills__subtitle">{item.name}</div>
              <div className="skills__descr">{t(item.description)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Skills);
