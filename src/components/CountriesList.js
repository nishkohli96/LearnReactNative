import React from 'react';
import { View, Text, Stylesheet, TouchableHighlight } from 'react-native';
import { Countries } from '../constants/Countries';

const CountriesList = () => {

    const List = Countries.map( (country) => {
        return <Text style= {styles.listitem}> {{ country }}</Text>
    })
    return(
        <View style= {styles.container}>
            {{ List }}
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'lightpink'
    },
    itemContainer: {
        width: 300,
        height: 40,
        backgroundColor: 'orange'
    },
    listitem: {
      color: 'yellow',
      fontSize: 20  
    }
});

export default CountriesList;