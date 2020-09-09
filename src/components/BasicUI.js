import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    View,
    Switch,
    ActivityIndicator,
    Image,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemedView, ThemedText } from '../styled-components/Themed-Comps';

const BasicUI = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [counter, incCounter] = useState(0);

    const toggleSwitch = () => {
        setIsEnabled((isEnabled) => !isEnabled);
    };

    function _onPressButton() {
        incCounter(counter + 1);
    }

    function resetCounter() {
        incCounter(0);
    }

    return (
        <ThemedView style={styles.container}>
            {/* <StatusBar backgroundColor="blue" hidden  />   */}
            <StatusBar backgroundColor="crimson" />
            <ThemedText>Themed Text Inside a Themed View</ThemedText>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={_onPressButton}
                    title="Press Me"
                    color="#841584"
                />
                <ActivityIndicator size={50} color="orange" />
                <Switch
                    style={styles.switchEl}
                    trackColor={{
                        false: '#767577',
                        true: '#81b0ff',
                    }}
                    thumbColor={isEnabled ? 'red' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text> Btn clicked {counter} Times </Text>
                <Text> ToggledOn? {isEnabled ? 'true' : 'false'} </Text>
                <Image
                    style={styles.stretch}
                    source={require('../assets/favicon.png')}
                />

                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={resetCounter}
                >
                    Login with Facebook
                </Icon.Button>
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
        backgroundColor: 'beige',
    },
    switchEl: {
        margin: 10,
    },
    stretch: {
        marginTop: 20,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
});

export default BasicUI;
