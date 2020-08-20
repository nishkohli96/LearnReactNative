import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Countries } from '../constants/Countries';
import { useNavigation } from '@react-navigation/native';

const CountriesList = () => {
    const navigation = useNavigation();
    const viewCountry = (country) => {
        navigation.navigate('ListItemPageRoute', {
            name: country.country_name,
            flagURL: country.flag_url,
        });
    };

    return (
        <View style={styles.container}>
            {Countries.map((country) => (
                <View style={styles.itemContainer} key={country.code}>
                    <Text
                        style={styles.listitem}
                        onPress={() => viewCountry(country)}
                    >
                        {country.country_name}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: 'lightpink',
    },
    itemContainer: {
        width: 300,
        height: 40,
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
    },
    listitem: {
        color: 'yellow',
        fontSize: 20,
    },
});

export default CountriesList;
