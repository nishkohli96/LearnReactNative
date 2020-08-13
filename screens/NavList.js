import React,{ useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Listdata } from '../constants/Listdata';
import Collapsible from 'react-native-collapsible';


const NavList = ({ navigation }) => {

const expand_icon = require('../assets/icons/expand-icon.png');
const collapse_icon = require('../assets/icons/collapse-icon.png');

const [dataArr,setData] = useState(Listdata);

/* Implement an expansion panel; onclick of the icon expands/contracts; clicking elsewhere
    takes to the item route page */
const Item = ({ itemObject, onPress }) => (
    <TouchableOpacity onPress={onPress} >
        <View style= {styles.rowAlign}> 
      <Text style= {styles.listItem} >{itemObject.screenName} </Text>      
          <View style= {styles.btnAlign}>
              <Image style={styles.buttonImage} 
                source = {itemObject.collapsed ? expand_icon : collapse_icon } >
               </Image>
          </View>
      </View>
        <Collapsible collapsed={itemObject.collapsed} align="center">
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
        item.collapsed = !item.collapsed;        
        /* Update the dataArr state */
        setData(
            dataArr.map(rec => 
                rec.index === item.index 
                ? {...rec, collapsed: !(rec.collapsed)} 
                : rec 
        ));
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
        fontSize: 20,
        padding: 10
    },
    buttonImage: {
        width: 17,
        height: 17,
    },
    btnAlign:{
        justifyContent: 'center',
        marginRight: 20
    },
    rowAlign:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#4e4e4e',
        justifyContent: 'space-between',
        margin: 5
    }
});

export default NavList;

