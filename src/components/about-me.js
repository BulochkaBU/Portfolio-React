import mainPhoto from '../img/main-photo.jpg';
import design from '../icons/about_me/design.svg';
import webDevelopment from '../icons/about_me/web_development.svg';
import mobileDevelopment from '../icons/about_me/mobile_dev.svg';

const AboutMe = () => {
    return(
        <section className="about-me" id="about-me">
            <div className="container">
                <div className="grid-container">
                    <div className="grid-elem" id="grid-photo">                   
                        <img className="about-me__photo" src={mainPhoto} alt="me"/>
                    </div>
                    <div className="grid-elem">
                        <div className="title title_fz19 subheader__subtitle subheader__subtitle_about-me">Про меня</div>
                        <h2 className="title title_fz36 subheader__title subheader__title_about-me">Меня зовут Анастасия</h2>
                        <div className="subheader__divider subheader__divider_about-me"></div>
                        <div className="about-me__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    </div>
                    <div className="subgrid-container">
                        <div className="subgrid-elem">                        
                            <div className="subgrid-elem__circle">
                                <img className="subgrid-elem__img" src={webDevelopment} alt="web_development"/>
                            </div>                                                
                            <div className="subgrid-elem__descr">   
                                <div className="subgrid-elem__title">Web-разработка</div>                           
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="subgrid-elem">                        
                            <div className="subgrid-elem__circle">
                                <img className="subgrid-elem__img" src={design} alt="design"/>
                            </div>  
                                                
                            <div className="subgrid-elem__descr">
                                <div className="subgrid-elem__title">UI/UX design</div>  
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="subgrid-elem">                        
                            <div className="subgrid-elem__circle">
                                <img className="subgrid-elem__img" src={mobileDevelopment} alt="mobile_development"/>
                            </div>  
                                                
                            <div className="subgrid-elem__descr">
                                <div className="subgrid-elem__title">Мобильная разработка</div>  
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    )

}

export default AboutMe;