import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import IntroScreen1 from './IntroScreens/IntroScreen1';
import IntroScreen2 from './IntroScreens/IntroScreen2';
import IntroScreen3 from './IntroScreens/IntroScreen3';

const Tab = createMaterialTopTabNavigator();

/* Refer https://reactnavigation.org/docs/material-top-tab-navigator */

const MatTabTop = () => {
    const navigation = useNavigation();

    const HomeScreen = () => {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    onPress={() => navigation.navigate('Tab2')}
                    title="Go to Tab2"
                />
            </View>
        );
    };

    return (
        // <NavigationContainer>
        <Tab.Navigator
            backBehavior="order"
            style={{ marginTop: 20 }}
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                tabStyle: { width: 90 },
                style: { backgroundColor: 'powderblue' },
                activeTintColor: 'darkgreen',
                inactiveTintColor: 'yellow',
                showIcon: true, // default is false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Icon name="home" color="white" size={26} />
                    ),
                    tabBarColor: 'crimson',
                }}
            />
            <Tab.Screen name="Tab1" component={IntroScreen1} />
            <Tab.Screen name="Tab2" component={IntroScreen2} />
            <Tab.Screen name="Tab3" component={IntroScreen3} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
};

/* To prevent the linting err */
MatTabTop.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    title: PropTypes.string,
};

export default MatTabTop;
