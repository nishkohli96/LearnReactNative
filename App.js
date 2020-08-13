import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, BackHandler, Text, Alert } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavList from './screens/NavList';
import BasicUI from './components/BasicUI';
import KbdAvoidingView from './components/KbdAvoidingView';
import ModalComponent from './components/ModalComponent';
import OnBoardScreen from './screens/IntroScreens/OnBoardScreen';
import IntroScreen1 from './screens/IntroScreens/IntroScreen1';
import IntroScreen2 from './screens/IntroScreens/IntroScreen2';
import IntroScreen3 from './screens/IntroScreens/IntroScreen3';

const Stack = createStackNavigator();

export default function App() {
    /* Back Button Implementation For Android */
    useEffect(() => {
        const backAction = () => {
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007aba',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
