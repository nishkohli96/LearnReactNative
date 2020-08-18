import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavList from './NavList';
import BasicUI from '../components/BasicUI';
// import KbdAvoidingView from '../components/KbdAvoidingView';
import ModalComponent from '../components/ModalComponent';
import ApiList from '../components/ApiList';
import WebViewComp from '../components/WebViewComp';
import DefaultApps from '../components/DefaultApps';
import CountriesList from '../components/CountriesList';
import ListItemPageRoute from '../components/ListItemPageRoute';

// import OnBoardScreen from './IntroScreens/OnBoardScreen';
import IntroScreen1 from './IntroScreens/IntroScreen1';
import IntroScreen2 from './IntroScreens/IntroScreen2';
import IntroScreen3 from './IntroScreens/IntroScreen3';

/* To add a new route, make sure to add item in Listdata.js */
const Stack = createStackNavigator();

const Index = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="NavList">
				<Stack.Screen
					name="NavList"
					component={NavList}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen name="BasicUI" component={BasicUI} />
				<Stack.Screen name="DefaultApps" component={DefaultApps} />
				<Stack.Screen name="Modal" component={ModalComponent} />
				<Stack.Screen
					name="CountriesList"
					component={CountriesList}
					options={{ title: 'CountriesList' }}
				/>
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
				<Stack.Screen
					name="ListItemPageRoute"
					component={ListItemPageRoute}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Index;
