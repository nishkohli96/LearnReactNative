import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IntroScreen1 from './IntroScreens/IntroScreen1';
import IntroScreen2 from './IntroScreens/IntroScreen2';
import IntroScreen3 from './IntroScreens/IntroScreen3';

const Tab = createMaterialBottomTabNavigator();
/* Refer https://reactnavigation.org/docs/material-bottom-tab-navigator  */

const MatTabBottom = () => {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="orange"
            style={{ backgroundColor: 'tomato' }}
            barStyle={{ backgroundColor: '#694fad' }}
            shifting={true}
            backBehavior="order"
        >
            <Tab.Screen
                name="Feed"
                component={IntroScreen1}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="home" color="white" size={26} />
                    ),
                    tabBarColor: 'crimson',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={IntroScreen2}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: () => (
                        <Icon name="bell" color="white" size={26} />
                    ),
                    tabBarColor: 'royalblue',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={IntroScreen3}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Icon name="account" color="white" size={26} />
                    ),
                    tabBarColor: 'brown',
                }}
            />
        </Tab.Navigator>
        // </NavigationContainer>
    );
};

export default MatTabBottom;
