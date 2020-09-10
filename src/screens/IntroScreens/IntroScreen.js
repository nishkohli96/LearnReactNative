import React from 'react';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { AsyncStorage } from 'react-native';

const IntroScreen = () => {

    const navigation = useNavigation(); /* Navigation Hook */
    
    const gotoMainPage = async () => {
        await AsyncStorage.setItem('firstTime','false');
        navigation.navigate('NavList');
    };

    const checkFirstUse = async() => {
        let appFirstTime = await AsyncStorage.getItem('firstTime');
        console.log('first tim ? ', appFirstTime);
        if(appFirstTime === null){
            console.log('set item')
            await AsyncStorage.setItem('firstTime','true');
        }
        if(appFirstTime === 'false') {
            navigation.navigate('NavList');
        }
    }
    const DoneBtn = () => {
        return <Text onPress={() => gotoMainPage()}>Done</Text>;
    };

    checkFirstUse();

    /* Refer https://www.npmjs.com/package/react-native-onboarding-swiper  */
    return (
        <Onboarding
            onSkip={() => gotoMainPage()}
            onDone={() => gotoMainPage()}
            DoneButtonComponent={DoneBtn}
            pages={[
                {
                    backgroundColor: 'skyblue',
                    image: <Image source={require('../../assets/icon.png')} />,
                    title: 'Welcome To LearnReactNative',
                    subtitle: 'Learn Fundamentals of React-Native',
                },
                {
                    backgroundColor: 'red',
                    image: (
                        <Image source={require('../../assets/favicon.png')} />
                    ),
                    title: 'Demos in the form of a List',
                    subtitle: 'Touch to view or expand for its description',
                },
                {
                    backgroundColor: 'yellow',
                    image: (
                        <Image source={require('../../assets/favicon.png')} />
                    ),
                    title: 'Enjoy....',
                    subtitle: 'Feel Free to Edit the Code and Experiment',
                },
            ]}
        />
    );
};

export default IntroScreen;
