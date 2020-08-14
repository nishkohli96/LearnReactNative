import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler, Alert, Platform } from 'react-native';

import NavList from './NavList';
import BasicUI from '../components/BasicUI';
import KbdAvoidingView from '../components/KbdAvoidingView';
import ModalComponent from '../components/ModalComponent';
import OnBoardScreen from './IntroScreens/OnBoardScreen';
import IntroScreen1 from './IntroScreens/IntroScreen1';
import IntroScreen2 from './IntroScreens/IntroScreen2';
import IntroScreen3 from './IntroScreens/IntroScreen3';
import ApiList from '../components/ApiList';
import WebViewComp from '../components/WebViewComp';

const Stack = createStackNavigator();

const Index = () => {

    /* Back Button Implementation For Android */
    useEffect(() => {
        const backAction = () => {
            if( Platform.OS === 'android' ) {
                // if(  Stack.Screen.name === 'NavList'){
            Alert.alert('Hold on!', 'Close the App?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'YES',
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
            //}
            }
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NavList">
                <Stack.Screen
                    name="NavList"
                    component={NavList}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="BasicUI" component={BasicUI} />
                <Stack.Screen name="Modal" component={ModalComponent} />
                <Stack.Screen
                    name="IntroScreen1"
                    component={IntroScreen1}
                    options={{ title: 'IntroScreen1' }}
                />
                <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
                <Stack.Screen
                    name="IntroScreen3"
                    component={IntroScreen3}
                    options={{ title: 'IntroScreen3' }}
                />
                <Stack.Screen
                    name="ApiList"
                    component={ApiList}
                    options={{ title: 'Pokemon List' }}
                />
                <Stack.Screen name="WebViewComp" component={WebViewComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Index;