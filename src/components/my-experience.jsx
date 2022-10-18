import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import React from "react";
import data from "../dataBase.json";

const MyExperience = () => {
  const { t } = useTranslation();
  return (
    <section className="my-experience" id="my-experience">
      <div className="container">
        <div className="title title_fz19 subheader__subtitle subheader__subtitle_my-experience">
          {t("Про ОПЫТ")}
        </div>
        <h2 className="title title_fz36 subheader__title subheader__title_my-experience">
          {t('Чем я буду полезна')}
        </h2>
        <div className="subheader__divider"></div>

        <div className="my-experience__wrapper">
          <div className="my-experience__column">
            <h3 className="title title_fz20 my-experience__column-title">
              {t('Образование')}
            </h3>
            <ul>
              {data.education.map((item) => (
                <li key={item.id}>
                  <div className="my-experience__item">
                    <div className="my-experience__item-head">
                      <div className="my-experience__item-icon">
                        <img src={item.image} alt={item.name}></img>
                      </div>
                      <h4 className="title title_fz14">{t(item.name)}</h4>
                      <div className="my-experience__item-location">
                        {t(item.location)}
                      </div>
                    </div>
                    <div className="my-experience__item-body">{t(item.descr)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-experience__column">
            <h3 className="title title_fz20 my-experience__column-title">
              {t('Опыт работы')}
            </h3>
            <ul>
              {data.experience.map((item) => (
                <li key={item.id}>
                  <div className="my-experience__item">
                    <div className="my-experience__item-head">
                      <div className="my-experience__item-icon">
                        <img src={item.image} alt={item.name}></img>
                      </div>
                      <h4 className="title title_fz14">{t(item.name)}</h4>
                      <div className="my-experience__item-location">
                      {t(item.location)}
                      </div>
                    </div>
                    <div className="my-experience__item-body">{t(item.descr)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(MyExperience);
