import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import AppIntro from 'react-native-app-intro';

import IntroScreen1 from './IntroScreen1';
import IntroScreen2 from './IntroScreen2';
import IntroScreen3 from './IntroScreen3';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
 
class IntroScreen extends Component {
    onSkipBtnHandle = (index) => {
        Alert.alert('Skip');
        console.log(index);
    }
    
    doneBtnHandle = () => {
        Alert.alert('Done');
    }
    nextBtnHandle = (index) => {
        Alert.alert('Next');
        console.log(index);
    }

    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }

  render() {
    return (
    //   <AppIntro  onNextBtnClick={this.nextBtnHandle}  onDoneBtnClick={this.doneBtnHandle}
    //     onSkipBtnClick={this.onSkipBtnHandle} onSlideChange={this.onSlideChangeHandle}>
    //     <View style={styles.slide}>
    //         <IntroScreen1 />
    //     </View>

    //     <View style={styles.slide}>
    //         <IntroScreen2 />
    //     </View>

    //     <View style= {styles.slide}>
    //         <IntroScreen3 />
    //     </View>

    //     <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
    //       <View level={5}><Text style={styles.text}>Page 4</Text></View>
    //       <View level={10}><Text style={styles.text}>Page 4</Text></View>
    //       <View level={15}><Text style={styles.text}>Page 4</Text></View>
    //     </View>
    //   </AppIntro>
    <View level={10}><Text style={styles.text}>Page 4</Text></View>
    );
  }
}
AppRegistry.registerComponent('IntroScreen', () => IntroScreen);
export default IntroScreen;