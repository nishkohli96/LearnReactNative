//import PoreCompoent for preventing unnecesary updates.
import React, { useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

const renderItem = ({ item }) => <Item title={item.name} />;

const Item = ({ title }) => (
    <View style={styles.listitem}>
        <Text style={styles.itemText}>{title}</Text>
    </View>
);

const ApiList = ({ navigation }) => {
    const [pokeList, setPokeList] = useState([]);

    async function getPokeList() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method.
            await fetch('https://pokeapi.co/api/v2/pokemon/')
                .then((res) => res.json())
                .then((res) => {
                    setPokeList(res.results);
                });
        } catch (err) {
            console.log('Error fetching data-----------', err);
        }
    }

    function openWebView() {
        navigation.navigate('WebViewComp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {' '}
                    Get List of First 20 Pokemons from
                </Text>
                <TouchableOpacity onPress={() => openWebView()}>
                    <Text style={styles.linkText}>this Api</Text>
                </TouchableOpacity>
            </View>
            <Button
                title="Get Pokemon List "
                color="#841584"
                width="100"
                onPress={() => getPokeList()}
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={pokeList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 200,
        alignItems: 'center',
    },
    listitem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemText: {
        color: 'red',
        fontSize: 20,
    },
    header: {
        color: 'maroon',
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        width: 300,
    },
    listContainer: {
        marginTop: 20,
        marginBottom: 20,
        height: 300,
    },
    linkText: {
        color: 'blue',
        fontStyle: 'italic',
        marginBottom: 20,
    },
});

/* To prevent the linting err */
ApiList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    title: PropTypes.string,
};

export default ApiList;
