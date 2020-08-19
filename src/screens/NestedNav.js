import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatTabBottom from './MatTabBottom';
import MatTabTop from './MatTabTop';

const Drawer = createDrawerNavigator();

export default function NestedNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Root">
                <Drawer.Screen name="Root" component={MatTabTop} />
                <Drawer.Screen name="Tabs" component={MatTabBottom} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

/* Note: StackNav, DrawerNav & TabNav are 3 different types of navigations independent
    of each other with their own routing. If you want to embed one inside the other, make sure that the 
    <NavigationContainer> is only inside one of them, which you want to make your main 
    container else would get error.

    Refer ->  https://reactnavigation.org/docs/nesting-navigators/
*/
