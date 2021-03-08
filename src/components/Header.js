import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText, ThemedHeader } from '../styled-components/Themed-Comps';
/* Srch icons from
	https://oblador.github.io/react-native-vector-icons/
*/
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ title, navigate }) => {
    const clickMe = () => {
        navigate.navigate('AppSettings');
    };

    return (
        <ThemedHeader style={styles.headerBar}>
            <View style={styles.textContainer}>
                <ThemedText style={styles.headerText}>{title}</ThemedText>
            </View>
            <View style={styles.iconContainer}>
                <Icon
                    name="settings"
                    size={25}
                    color="#900"
                    onPress={clickMe}
                ></Icon>
            </View>
        </ThemedHeader>
    );
};

const styles = StyleSheet.create({
    headerBar: {
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
        fontSize: 20,
    },
});

export default Header;
