import React, { useState } from 'react';
import { BackHandler, Alert, Platform } from 'react-native';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import { Listdata } from '../constants/Listdata';
import Collapsible from 'react-native-collapsible';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import { ThemedView } from '../styled-components/Themed-Comps';
import Header from '../components/Header';
import { StyledView, StyledText } from '../styled-components/Styled-Comps';
import { useTranslation } from 'react-i18next';

const NavList = () => {
    const navigation = useNavigation(); /* Navigation Hook */

    /*  Back Button Implementation For Android, to Close the app in this case */
    const backAction = () => {
        if (Platform.OS === 'android') {
            Alert.alert('Hold on!', 'Close the App?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'YES',
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
        }
        return true;
    };

    /* useFocusEffect is similar to useEffect Hook, however it mainly deals with the
       current route on the Navigator stack */

    useFocusEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    const expand_icon = require('../assets/icons/expand-icon.png');
    const collapse_icon = require('../assets/icons/collapse-icon.png');

    const [dataArr, setData] = useState(Listdata);

    /* Implement an expansion panel; onclick of the icon expands/contracts; clicking elsewhere
    takes to the item route page */
    const Item = ({ itemObject, onItemPress, panelCollapse }) => (
        <View>
            <View style={styles.rowAlign}>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={onItemPress}>
                        <Text style={styles.listItem}>
                            {itemObject.screenName}{' '}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnAlign}>
                    <TouchableOpacity onPress={panelCollapse}>
                        <Image
                            style={styles.buttonImage}
                            source={
                                itemObject.collapsed
                                    ? expand_icon
                                    : collapse_icon
                            }
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <Collapsible collapsed={itemObject.collapsed} align="center">
                <StyledView>
                    <StyledText style={{ textAlign: 'center' }}>
                        {itemObject.description}
                    </StyledText>
                </StyledView>
            </Collapsible>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item
            itemObject={item}
            onItemPress={() => navigateToScreen(item)}
            panelCollapse={() => expandPanel(item)}
        />
    );

    function expandPanel(item) {
        item.collapsed = !item.collapsed;
        /* Update the dataArr state */
        setData(
            dataArr.map((rec) =>
                rec.index === item.index
                    ? { ...rec, collapsed: !rec.collapsed }
                    : rec
            )
        );
    }

    const { t } = useTranslation('common');

    function navigateToScreen(item) {
        navigation.navigate(item.screenName);
    }

    return (
        <ThemedView style={styles.listContainer}>
            <StatusBar backgroundColor="#007bff" />
            <Header title="NavList" navigate={navigation} />
            <StyledView>
                <React.Suspense fallback="Translations loading">
                    <StyledText style={styles.welcomeText}>
                        {t('welcome', { appName: 'LearnReactNative' })}
                    </StyledText>
                </React.Suspense>
                <StyledText style={styles.headerText}>
                    Please Click on the List Item for Demo, or expand the
                    item,for brief description. Code in same file as the item
                    name
                </StyledText>
            </StyledView>
            <FlatList
                data={Listdata}
                renderItem={renderItem}
                keyExtractor={(item) => item.index}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    headerText: {
        fontSize: 15,
        padding: 10,
    },
    welcomeText: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    listItem: {
        color: 'orange',
        fontSize: 20,
        padding: 10,
    },
    textContainer: {
        width: 300,
        height: 50,
    },
    buttonImage: {
        width: 20,
        height: 20,
    },
    btnAlign: {
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        width: 50,
        alignItems: 'flex-end',
        backgroundColor: 'beige',
    },
    rowAlign: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#4e4e4e',
        justifyContent: 'space-between',
        margin: 5,
    },
});

/* To prevent the linting err */
NavList.propTypes = {
    itemObject: PropTypes.object,
    onItemPress: PropTypes.func,
    panelCollapse: PropTypes.bool,
};

export default NavList;
