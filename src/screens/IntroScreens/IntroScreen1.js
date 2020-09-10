import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class IntroScreen1 extends Component {
    render() {
        return (
            <View style={styles.viewStyles}>
                <Text> Hiii </Text>
                <Image
                    style={styles.stretch}
                    source={require('../../assets/favicon.png')}
                />
                <Text style={styles.textStyle}>
                    Learn react-native with plenty of examples that most apps
                    use
                </Text>
                <View style={styles.skipbtn}>
                    <Button title="Skip" color="crimson" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'orange',
        color: 'yellow',
        flex: 1,
        padding: 15,
    },
    textStyle: {
        fontSize: 30,
        color: 'red',
    },
    stretch: {
        marginTop: 20,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    skipbtn: {
        justifyContent: 'flex-start',
    },
});
