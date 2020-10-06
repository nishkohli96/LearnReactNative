import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { AsyncStorage } from '@react-native-community/async-storage';

const IntroScreen = () => {
    const navigation = useNavigation(); /* Navigation Hook */

    const gotoMainPage = async () => {
        await AsyncStorage.setItem('firstTime', 'false');
        navigation.navigate('NavList');
    };

    const SkipBtn = () => {
        return <Text style={styles.skipBtn}>Skip</Text>;
    };

    const NextBtn = () => {
        return <Text style={styles.doneBtn}>Next</Text>;
    };

    const DoneBtn = () => {
        return <Text style={styles.doneBtn} onPress={() => gotoMainPage()}>Done</Text>;
    };

    // checkFirstUse();

    /* Refer https://www.npmjs.com/package/react-native-onboarding-swiper  */
    return (
        <Onboarding
            onSkip={() => gotoMainPage()}
            onDone={() => gotoMainPage()}
            nextLabel={<NextBtn />}
            skipLabel={<SkipBtn />}
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

const styles = StyleSheet.create({
    doneBtn: {
        marginRight: 20,
        fontSize: 20,
    },
    skipBtn: {
        marginLeft: 20,
        fontSize: 20,
    },
});

export default IntroScreen;
