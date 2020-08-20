/* App Setting Objects Key-Value pair, being used to render in a radio-dialog */

export const THEME = {
    name: 'Theme',
    value: 'Light',
    options: [
        { label: 'Light', index: 0 },
        { label: 'Dark', index: 1 },
        { label: 'SoVeryBlue', index: 2 },
    ],
    selectedIndex: 2,
};

export const LANGUAGE = {
    name: 'Language',
    value: 'English',
    options: [
        { label: 'English', index: 0 },
        { label: 'French', index: 1 },
    ],
    selectedIndex: 0,
};
