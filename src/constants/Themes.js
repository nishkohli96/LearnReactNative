import { DefaultTheme } from 'react-native-paper';

export const SoVeryBlue = {
    dark: false,
    colors: {
        primary: 'blue',
        background: 'lightblue',
        card: 'darkblue',
        text: '#007aba',
        border: 'indigo',
        notification: 'violet',
    },
};

export const DarkBlue = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
    },
};
