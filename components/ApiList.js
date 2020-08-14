//import PoreCompoent for preventing unnecesary updates. 
import React, {  useState } from 'react';
import { View,Image,Button,StyleSheet, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';


const PokeList = () => {
    const [pokeList,setPokeList]= useState([]);
    const [loading,listLoading]= useState(true);

    async function getPokeList() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            await fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then( res => {
                console.log("poke " ,res);
                setPokeList(res);
                listLoading(false);
            })
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.name} />
    );

    return(
        <View style= {styles.container}>
            <Button  title="Get Pokemon List"
            color="#841584" width="100" onPress={() => getPokeList()} />
        <FlatList
            data={pokeList}
            renderItem={renderItem}
            keyExtractor={item => item.name}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
export default PokeList;