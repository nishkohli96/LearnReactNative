import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavList from './NavList';
import BasicUI from '../components/BasicUI';
// import KbdAvoidingView from '../components/KbdAvoidingView';
import ModalComponent from '../components/ModalComponent';
import ApiList from '../components/ApiList';
import WebViewComp from '../components/WebViewComp';
import LinkinginApps from '../components/LinkinginApps';
import CountriesList from '../components/CountriesList';
import ListItemPageRoute from '../components/ListItemPageRoute';
import FlexView from '../components/FlexView';

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
				<Stack.Screen name="LinkinginApps" component={LinkinginApps} />
				<Stack.Screen name="Modal" component={ModalComponent} />
				<Stack.Screen
					name="CountriesList"
					component={CountriesList}
					options={{ title: 'CountriesList' }}
				/>
				<Stack.Screen
					name="FlexView"
					component={FlexView}
					options={{ title: 'Flex Layout' }}
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
