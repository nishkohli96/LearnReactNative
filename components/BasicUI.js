import React, { useState } from 'react';
import { Button, StyleSheet, View, Switch, ActivityIndicator, Image } from 'react-native';

const BasicUI = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => //setIsEnabled(previousState => !previousState);
    {
        console.log('prev value :',isEnabled);
        if( !isEnabled){
          alert('true');
        }
        setIsEnabled(previousState => !previousState);
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button
                onPress={_onPressButton}
                title="Press Me"
                color="#841584"
            />
            <ActivityIndicator size={50} color="orange" />
            <Switch
                style = {styles.switchEl}
                trackColor = {{ false: "#767577", true: "#81b0ff" }}
                thumbColor = {isEnabled ? "red" : "#f4f3f4"}
                ios_backgroundColor = "#3e3e3e"
                onChange = {toggleSwitch}
                value = {isEnabled}
            />
            <Image
                style={styles.stretch}
                source={ require('../assets/favicon.png') }
            />
        </View>
      </View>
    );
}

function _onPressButton() {
    alert('You tapped the button!');
}

const styles = StyleSheet.create({
  container: {
   flex: 4,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'beige'
  },
  switchEl: {
      margin:10
  },
  stretch: {
    marginTop: 20,
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});

export default BasicUI;