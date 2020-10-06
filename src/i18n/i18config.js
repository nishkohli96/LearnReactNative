import i18next from 'i18next';
import { AsyncStorage } from '@react-native-community/async-storage';
import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';

let currentLang = 'en';

/* Retrieving the AsyncStorage value for 'Language' Property, and then configure
    i18n to use that language only, unless changed in settings */

    export const getCurrentLang = async () => {
        try {
            currentLang = await AsyncStorage.getItem('Language');
        } catch {
            /* handle promise rejection, in case the AsyncStorage Item not found */
            currentLang = 'en'; 
        }
        return currentLang;
    };

export const changeLang = async (lang) => {
    await AsyncStorage.setItem('Language', lang);
};

const setInitialLang = async () => {
    let initialLang = await getCurrentLang();
    if (!initialLang) {
        changeLang(currentLang);
    }
    configurei18();
};

const configurei18 = () => {
    i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
        lng: currentLang, // language to use
        fallbackLng: 'en', // in case no language found
        resources: {
            en: {
                common: common_en, // 'common' is our custom namespace
            },
            fr: {
                common: common_fr,
            },
        },
    });
};

const get18config = () => {
    return i18next;
};

setInitialLang();

export default get18config;
