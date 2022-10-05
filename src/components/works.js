import dataWorks from '../dataBase.json'

const Works = () => {
    return(
        <section className="works" id="works">
        <div className="container">
            <div className="title title_fz19 subheader__subtitle subheader__subtitle_works">Про проекты</div>
            <h2 className="title title_fz36 subheader__title">Мои работы</h2>
            <div className="subheader__divider"></div>
            <div className="works__wrapper">
                {
                    dataWorks.works.map(item => {
                        return(
                            <a href={item.link} className={item.classNameWorks} key={item.id}>
                                <img src={item.imageWorks} alt={item.name}/>
                            </a>
                        )
                    })
                }
                
                {/* <a href="#" className="works__item">
                    <img src="img/works/pulse.jpg" alt="pulse">
                </a>
                <!-- <a href="#" className="works__item">
                    <img src="img/works/bread.jpg" alt="bread">
                </a> -->
                <!-- <a href="#" className="works__item">
                    <img src="img/works/ipad.jpg" alt="ipad">
                </a> -->
                <a href="#" className="works__item horizontal">
                    <img src="img/works/marvel.jpg" alt="marvel">
                </a>
                <a href="#" className="works__item vertical">
                    <img src="img/works/plans.jpg" alt="plans">
                </a> */}
            </div>
        </div>
    </section>
    )
}

export default Works;