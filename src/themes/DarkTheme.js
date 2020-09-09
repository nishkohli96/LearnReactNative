import { DefaultTheme } from 'react-native-paper';

export const DarkTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: 'grey',
        background: '#000000',
        card: 'green',
        text: '#ffffff',
        border: 'white',
        notification: 'grey',
        header: 'darkgreen',
    },
};
