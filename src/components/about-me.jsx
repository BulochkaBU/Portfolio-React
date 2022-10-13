import mainPhoto from "../img/main-photo.jpg";
import dataSkills from "../dataBase.json";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="grid-container">
          <div className="grid-elem" id="grid-photo">
            <img className="about-me__photo" src={mainPhoto} alt="me" />
          </div>
          <div className="grid-elem">
            <div className="title title_fz19 subheader__subtitle subheader__subtitle_about-me">
              Про меня
            </div>
            <h2 className="title title_fz36 subheader__title subheader__title_about-me">
              Меня зовут Анастасия
            </h2>
            <div className="subheader__divider subheader__divider_about-me"></div>
            <div className="about-me__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>

          <div className="skills__rating">
            {dataSkills.rating.map((item) => (
              <div className="skills__rating-item" key={item.id}>
                <div className="titletitle_fz14 skills__rating-title">
                  {item.name}
                </div>
                <div className="skills__rating-counter">{item.counter}</div>
                <div className="skills__rating-line">
                  <span style={{ width: item.counter }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
