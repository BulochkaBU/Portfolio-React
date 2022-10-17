import React from "react";
import dataWorks from "../dataBase.json";

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="title title_fz19 subheader__subtitle subheader__subtitle_works">
          Про проекты
        </div>
        <h2 className="title title_fz36 subheader__title">Мои работы</h2>
        <div className="subheader__divider"></div>
        <div className="works__wrapper">
          {dataWorks.works.map((item) => 
            (
              <a href={item.link} className={item.classNameWorks} key={item.id}>
                <img src={item.imageWorks} alt={item.name} />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
