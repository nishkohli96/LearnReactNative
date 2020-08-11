import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Listdata } from '../constants/Listdata';

const Item = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} >
      <Text style= {styles.listItem} >{title}</Text>
    </TouchableOpacity>
);

function setSelectedId(item) {
    console.log("pressed",item);
}

const NavList = () => {
    const renderItem = ({ item }) => (
        <Item title={item.screenName}  onPress={() => setSelectedId(item.screenName)} />
    );

    return(
        <View style= {styles.listContainer} >
            <FlatList 
                data={Listdata}
                renderItem={renderItem}
                keyExtractor={(item) => item.index}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 50
    },
    listItem: {
        color: 'orange',
        fontSize: 25,
        padding: 10,
        margin: 5,
        backgroundColor: '#4e4e4e'
    }
});

export default NavList;

