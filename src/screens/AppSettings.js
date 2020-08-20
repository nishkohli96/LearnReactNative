import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppSettings = () => {
    return (
        <View style={styles.container}>
            <SettingsItem
                title="Theme"
                iconName="palette"
                iconColor="#ebde34"
                value="Dark"
            />
            <SettingsItem
                title="Language"
                iconName="language"
                iconColor="silver"
                value="English"
            />
        </View>
    );
};

const SettingsItem = ({ title, iconName, iconColor, value }) => {
    return (
        <View style={styles.itemRow}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={40} color={iconColor}></Icon>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}> {title} </Text>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}> {value} </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    itemRow: {
        height: 50,
        margin: 5,
        borderBottomColor: 'silver',
        flexDirection: 'row',
    },
    iconContainer: {
        width: 70,
    },
    textContainer: {
        width: 200,
    },
    headerText: {
        color: 'purple',
        fontSize: 20,
    },
    subText: {
        fontSize: 15,
        color: 'grey',
    },
});

export default AppSettings;
