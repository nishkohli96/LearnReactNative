import { DefaultTheme } from 'react-native-paper';

export const SoVeryBlue = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        background: 'lightblue',
        card: 'darkblue',
        text: '#007aba',
        border: 'indigo',
        notification: 'violet',
        header: '#007aba',
    },
};
