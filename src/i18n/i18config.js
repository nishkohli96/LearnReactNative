import i18next from 'i18next';
import { AsyncStorage } from 'react-native';
import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';

let currentLang;

export const setLang = async (lang) => {
    lang = lang === undefined ? 'en' : lang;
    await AsyncStorage.setItem('Language', lang);
};

const setInitialLang = async () => {
    let initialLang = getCurrentLang();
    if (initialLang) {
        setLang(initialLang);
    } else {
        setLang('en');
    }
};

export const getCurrentLang = async () => {
    currentLang = await AsyncStorage.getItem('Language');

    console.log('lang ', currentLang);
    return currentLang;
};

setLang();

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: currentLang, // language to use
    resources: {
        en: {
            common: common_en, // 'common' is our custom namespace
        },
        fr: {
            common: common_fr,
        },
    },
});

const get18config = () => {
    return i18next;
};

export default get18config;
