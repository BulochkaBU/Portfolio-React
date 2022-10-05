import dataSkills from '../dataBase.json'

const Skills = () => {
    return(
        <section className="skills" id="skills">
        <div className="container">
            <div className="title title_fz19 subheader__subtitle subheader__subtitle_skills">Про навыки</div>
            <h2 className="title title_fz36 subheader__title">Что я использую в работе</h2>
            <div className="subheader__divider"></div>
            <div className="skills__wrapper">
                {
                   dataSkills.skills.map(item => {
                        return(
                            <div className="skills__item" key={item.id}>
                                <img src={item.imageSkills} alt={item.name} className="skills__icon"></img>
                                <div className="skills__subtitle">{item.name}</div>
                                <div className="skills__descr">{item.description}</div>
                            </div>
                        )
                   }) 
                }
            </div>
        </div>
    </section>
    )
}


export default Skills;