import React from "react";
const Promo = ({ onClickHamburger }) => {
  return (
    <section className="promo">
      <div className="hamburger" onClick={onClickHamburger}>
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <div className="container">
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="title title_fz19 title_fz15 subheader__subtitle subheader__subtitle_promo">
            Меня зовут Анастасия Прудинская
          </div>
          <h1 className="title title_fz48 promo__title">
            Я веб-разработчик <br></br> в Монтенегро
          </h1>
          <div className="promo__btns">
            <a href="#works" className="promo__link btn">
              Портфолио
            </a>
            <a href="#about-me" className="promo__link promo__link_about-me">
              Про меня
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
