import React,{ useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Listdata } from '../constants/Listdata';
import Collapsible from 'react-native-collapsible';


const NavList = ({ navigation }) => {

const [collapsed,changeCollapse] = useState(true);

const togglecollapsed = () =>{
    changeCollapse( prevState => !prevState );
}

const Item = ({ itemObject, onPress }) => (
    <TouchableOpacity onPress={onPress} >
      <Text style= {styles.listItem} >{itemObject.screenName}</Text>
        <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                { itemObject.description }
              </Text>
            </View>
        </Collapsible>
    </TouchableOpacity>
);

    const renderItem = ({ item }) => (
        <Item itemObject={item}  onPress={() => setSelectedId(item)} />
    );

    function setSelectedId(item) {
        console.log("befre pressed",item.collapsed);
        // item.collapsed = !item.collapsed;
        togglecollapsed();
        console.log("pressed",item.collapsed);
        // navigation.navigate(item.screenName);
    }

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

