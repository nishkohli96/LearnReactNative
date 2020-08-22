import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SoVeryBlue, DarkBlue } from './src/constants/Themes';
import { DarkTheme } from '@react-navigation/native';

export const AppContext =  React.createContext(null);

const AppContextProvider = ({ children }) => {
    const [theme, changeTheme] = useState(DarkBlue);

    return (
        <AppContext.Provider value={{ theme: theme, changeTheme}}>
            <PaperProvider theme = {theme}>
                {children}
            </PaperProvider>
        </AppContext.Provider>
    );
}

export default AppContextProvider;