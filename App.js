import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import NavList from './screens/NavList';
import BasicUI from './components/BasicUI';
import KbdAvoidingView from './components/KbdAvoidingView';
import ModalComponent from './components/ModalComponent';
import OnBoardScreen from './screens/IntroScreens/OnBoardScreen';

export default function App() {

  return (
    <View style={styles.container} >
      <NavList />
      {/* <OnBoardScreen /> */}
      {/* <BasicUI />
      <KbdAvoidingView />
      <ModalComponent /> */}
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={BasicUI}
    //       options={{ title: 'Welcome' }}
    //     />
    //     {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007aba',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
