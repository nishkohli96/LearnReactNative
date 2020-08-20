import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

import IntroScreen1 from './IntroScreens/IntroScreen1';
import IntroScreen2 from './IntroScreens/IntroScreen2';
import IntroScreen3 from './IntroScreens/IntroScreen3';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    const navigation = useNavigation();

    function HomeScreen() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    onPress={() => navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }

    function NotificationsScreen() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    onPress={() => navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }

    return (
        // <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen name="IntroScreen1" component={IntroScreen1} />
            <Drawer.Screen name="IntroScreen2" component={IntroScreen2} />
            <Drawer.Screen name="IntroScreen3" component={IntroScreen3} />
        </Drawer.Navigator>
        // </NavigationContainer>
    );
};

/* To prevent the linting err */
NavDrawer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    title: PropTypes.string,
};

export default NavDrawer;
