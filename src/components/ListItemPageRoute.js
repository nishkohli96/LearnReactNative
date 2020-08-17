import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

/* Displaying the passed values in Route, of a country from Listdata.js */

const ListItemPageRoute = (props) => {
    const imageURL = { uri: props.route.params.flagURL };

    /*
     *  FYI, Image URL of this form might not be rendered
     *  https://images.app.goo.gl/cfQT8AmU3CGLCxuC9
     */

    return (
        <View style={styles.container}>
            <Text style={styles.countryText}> {props.route.params.name} </Text>
            <Image style={styles.image} source={imageURL} />
            <Text style={styles.countryText}> Image src using Require </Text>
            <Image
                style={styles.stretch}
                source={require('../assets/splash.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        padding: 30,
        paddingTop: 10,
    },
    image: {
        width: 300,
        height: 300,
    },
    countryText: {
        color: 'darkblue',
        fontSize: 20,
        margin: 10,
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
});

export default ListItemPageRoute;
