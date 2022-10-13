
import { withTranslation } from 'react-i18next';
import { useTranslation } from "react-i18next";

function Text () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("fr")}>FR</button>
            <div>{t('Hello Work')}</div>
        </>

    )
}

export default withTranslation()(Text);