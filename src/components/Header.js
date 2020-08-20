import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Srch icons from
	https://oblador.github.io/react-native-vector-icons/
*/
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ title, navigate }) => {
    const clickMe = () => {
        navigate.navigate('AppSettings');
    };

    return (
        <View style={styles.headerBar}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon
                    name="settings"
                    size={25}
                    color="#900"
                    onPress={clickMe}
                ></Icon>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#007aba',
        height: 50,
        flexDirection: 'row',
        padding: 10,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        paddingRight: 10,
    },
    headerText: {
        color: 'yellow',
        fontSize: 20,
    },
});

export default Header;
