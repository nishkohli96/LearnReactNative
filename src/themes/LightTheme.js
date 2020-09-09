import { DefaultTheme } from 'react-native-paper';

export const LightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffffff',
        background: '#ffffff',
        card: 'lightgreen',
        text: '#000000',
        border: 'silver',
        notification: 'silver',
        header: 'lightgreen',
    },
};
