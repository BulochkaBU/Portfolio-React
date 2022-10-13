import React from "react";
import university from "../icons/experience/university.svg";
import courses from "../icons/experience/courses.svg";
import work from "../icons/experience/work.png";

const MyExperience = () => {
  return (
    <section className="my-experience" id="my-experience">
      <div className="container">
        <div className="title title_fz19 subheader__subtitle subheader__subtitle_my-experience">
          Про опыт
        </div>
        <h2 className="title title_fz36 subheader__title subheader__title_my-experience">
          Чем я буду полезна
        </h2>
        <div className="subheader__divider"></div>

        <div className="my-experience__wrapper">
          <div className="my-experience__column">
            <h3 className="title title_fz20 my-experience__column-title">
              Образование
            </h3>
            <ul>
              <li>
                <div className="my-experience__item">
                  <div className="my-experience__item-head">
                    <div className="my-experience__item-icon">
                      <img src={university} alt="university"></img>
                    </div>
                    <h4 className="title title_fz14">МГТУ им. Н. Э. Баумана</h4>
                    <div className="my-experience__item-location">
                      Диплом магистра | Москва (2014-2020)
                    </div>
                  </div>
                  <div className="my-experience__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmo.
                  </div>
                </div>
              </li>
              <li>
                <div className="my-experience__item">
                  <div className="my-experience__item-head">
                    <div className="my-experience__item-icon">
                      <img src={courses} alt="course"></img>
                    </div>
                    <h4 className="title title_fz14">Udemy</h4>
                    <div className="my-experience__item-location">
                      Курсы по Web-разработке{" "}
                    </div>
                  </div>
                  <div className="my-experience__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmo.
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="my-experience__column">
            <h3 className="title title_fz20 my-experience__column-title">
              Опыт работы
            </h3>
            <ul>
              <li>
                <div className="my-experience__item">
                  <div className="my-experience__item-head">
                    <div className="my-experience__item-icon">
                      <img src={work} alt="work"></img>
                    </div>
                    <h4 className="title title_fz14">МГТУ им. Н. Э. Баумана</h4>
                    <div className="my-experience__item-location">
                      Диплом магистра | Москва (2014-2020)
                    </div>
                  </div>
                  <div className="my-experience__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmo.
                  </div>
                </div>
              </li>
              <li>
                <div className="my-experience__item">
                  <div className="my-experience__item-head">
                    <div className="my-experience__item-icon">
                      <img src={work} alt="work"></img>
                    </div>
                    <h4 className="title title_fz14">МГТУ им. Н. Э. Баумана</h4>
                    <div className="my-experience__item-location">
                      Диплом магистра | Москва (2014-2020)
                    </div>
                  </div>
                  <div className="my-experience__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmo.
                  </div>
                </div>
              </li>
              <li>
                <div className="my-experience__item">
                  <div className="my-experience__item-head">
                    <div className="my-experience__item-icon">
                      <img src={work} alt="work"></img>
                    </div>
                    <h4 className="title title_fz14">МГТУ им. Н. Э. Баумана</h4>
                    <div className="my-experience__item-location">
                      Диплом магистра | Москва (2014-2020)
                    </div>
                  </div>
                  <div className="my-experience__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmo.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
