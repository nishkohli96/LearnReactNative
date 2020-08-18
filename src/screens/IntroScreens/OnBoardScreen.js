import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { vw } from 'react-native-expo-viewport-units';

const OnBoardScreen = () => (
	<Onboarding
		pages={[
			{
				backgroundColor: '#fff',
				image: <Image source={require('../../assets/favicon.png')} />,
				title: 'Onboarding',
				subtitle: 'Done with React Native Onboarding Swiper',
				containerStyles: styles.screens,
			},
			{
				backgroundColor: '#fe6e58',
				image: <Image source={require('../../assets/icon.png')} />,
				title: 'The Title',
				subtitle: 'This is the subtitle that sumplements the title.',
				containerStyles: styles.screens,
			},
			{
				backgroundColor: '#999',
				image: <Image source={require('../../assets/favicon.png')} />,
				title: 'Triangle',
				subtitle: 'Beautiful, isn\'t it?',
				containerStyles: styles.screens,
			},
		]}
	/>
);

const styles = StyleSheet.create({
	screens: {
		width: vw(100),
		justifyContent: 'center',
	},
});

export default OnBoardScreen;
