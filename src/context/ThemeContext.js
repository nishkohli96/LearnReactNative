import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SoVeryBlue } from '../themes/SoVeryBlue';
import { DarkTheme } from '../themes/DarkTheme';
import { LightTheme } from '../themes/LightTheme';

export const ThemeToggleContext = React.createContext();

const AppThemeContext = ({ children }) => {
    const [currentTheme, setTheme] = React.useState('light');

    const themeToggle = (newTheme) => {
        setTheme(newTheme);
    };

    const Theme = ({ children }) => {
        const newTheme =
            currentTheme === 'blue'
                ? SoVeryBlue
                : currentTheme === 'light'
                ? LightTheme
                : DarkTheme;

        return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
    };

    return (
        <ThemeToggleContext.Provider
            value={{ theme: currentTheme, changeTheme: themeToggle }}
        >
            <Theme>{children}</Theme>
        </ThemeToggleContext.Provider>
    );
};

export default AppThemeContext;
