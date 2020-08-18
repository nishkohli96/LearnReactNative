import React from 'react';
import { View } from 'react-native';
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
/* Srch icons from
	https://oblador.github.io/react-native-vector-icons/
*/
import Icon from 'react-native-vector-icons/Feather';

/* To add a new route, make sure to add item in Listdata.js */
const Stack = createStackNavigator();

const Index = () => {
	const clickMe = () => {
		console.log('Open settings');
	};

	const headerRightBtn = () => {
		return (
			<View style={{ marginRight: 20 }}>
				<Icon
					name="settings"
					size={25}
					color="#900"
					onPress={clickMe}
				></Icon>
			</View>
		);
	};

	return (
		<NavigationContainer>
			{/* Setting Default Props of header across all screens  */}
			<Stack.Navigator
				initialRouteName="NavList"
				screenOptions={{
					headerStyle: {
						backgroundColor: '#f4511e',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					headerRight: { headerRightBtn },
				}}
			>
				<Stack.Screen
					name="NavList"
					component={NavList}
					options={{
						title: 'Navlist',
						headerTintColor: 'yellow',
						headerStyle: {
							backgroundColor: '#007aba',
						},
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen name="BasicUI" component={BasicUI} />
				<Stack.Screen name="LinkinginApps" component={LinkinginApps} />
				<Stack.Screen name="Modal" component={ModalComponent} />
				<Stack.Screen
					name="CountriesList"
					component={CountriesList}
					// options={{ headerShown: false }}
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
