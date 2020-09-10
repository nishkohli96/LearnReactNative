import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './IntroScreens/IntroScreen';
import NavList from './NavList';

import BasicUI from '../components/BasicUI';
import ModalComponent from '../components/ModalComponent';
import ApiList from '../components/ApiList';
import WebViewComp from '../components/WebViewComp';
import LinkinginApps from '../components/LinkinginApps';
import CountriesList from '../components/CountriesList';
import ListItemPageRoute from '../components/ListItemPageRoute';
import FlexView from '../components/FlexView';

import MatTabTop from './MatTabTop';
import MatTabBottom from './MatTabBottom';
import NavDrawer from './NavDrawer';
import AppSettings from './AppSettings';

import ThemeContext from '../context/ThemeContext';
import { LightTheme } from '../themes/LightTheme';

/* To add a new route, make sure to add item in Listdata.js */
const Stack = createStackNavigator();

const Index = () => {
    return (
        <ThemeContext>
            <NavigationContainer theme={LightTheme}>
                {/* Setting Default Props of header across all screens  */}
                <Stack.Navigator
                    initialRouteName="IntroScreen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: 'blue',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen
                        name="IntroScreen"
                        component={IntroScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="NavList"
                        component={NavList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="BasicUI" component={BasicUI} />
                    <Stack.Screen
                        name="LinkinginApps"
                        component={LinkinginApps}
                    />
                    <Stack.Screen name="Modal" component={ModalComponent} />
                    {/* <Stack.Screen name="MatTabBottom" component={MatTabBottom} /> */}
                    <Stack.Screen
                        name="CountriesList"
                        component={CountriesList}
                    />
                    <Stack.Screen
                        name="FlexView"
                        component={FlexView}
                        options={{
                            title: 'Flex Layout',
                            headerTintColor: 'yellow',
                            headerStyle: {
                                backgroundColor: '#007aba',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="ApiList"
                        component={ApiList}
                        options={{ title: 'Pokemon List' }}
                    />
                    <Stack.Screen
                        name="AppSettings"
                        component={AppSettings}
                        options={{ title: 'Settings' }}
                    />
                    <Stack.Screen name="WebViewComp" component={WebViewComp} />
                    <Stack.Screen
                        name="ListItemPageRoute"
                        component={ListItemPageRoute}
                    />
                    <Stack.Screen name="MatTabTop" component={MatTabTop} />
                    <Stack.Screen
                        name="MatTabBottom"
                        component={MatTabBottom}
                    />
                    <Stack.Screen name="NavDrawer" component={NavDrawer} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeContext>
    );
};

export default Index;
