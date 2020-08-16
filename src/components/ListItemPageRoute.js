import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

/* Displaying the passed values in Route, of a country from Listdata.js */

const ListItemPageRoute = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.countryText}></Text>
            <Image style={styles.image} source={} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        paddingTop: 20,
    },
    image: {
        width: 400,
        height: 300,
    },
    countryText: {
        color: 'darkblue',
        fontSize: 20,
    },
});

export default ListItemPageRoute;
