import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Modal,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { vw } from 'react-native-expo-viewport-units';
import { RadioButton, Text } from 'react-native-paper';
import { THEME, LANGUAGE } from '../constants/Settings';

const AppSettings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalTitle, setModalTitle] = useState(THEME.options);
    const [theme, setTheme] = useState(THEME.options[0]);
    const [lang, setLang] = useState(LANGUAGE.options[1]);

    const SettingsItem = ({ settings, iconName, iconColor, value }) => {
        return (
            <TouchableHighlight
                underlayColor="skyblue"
                onPress={() => {
                    openSettingsModal(settings.name, settings);
                }}
            >
                <View style={styles.itemRow}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name={iconName}
                            size={40}
                            color={iconColor}
                        ></Icon>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}> {settings.name} </Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.subText}> {value} </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    const openSettingsModal = (title, settings) => {
        console.log('p', settings);
        setModalTitle(title);
        setModalData(settings);
        setModalVisible(!modalVisible);
    };

    const ModalElement = () => {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
            >
                {/* Transparent false sets bg color to white, until modal closed */}
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeader}>
                            Choose {modalTitle}
                        </Text>
                        <SettingsRadioBtn settings={modalData} />

                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: '#2196F3',
                            }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    };

    function SettingsRadioBtn() {
        console.log(' modaldata is ', modalData.options);
        let value = modalData.name === THEME.name ? theme : lang;
        return (
            <View>
                <RadioButton.Group
                    onValueChange={(value) => setTheme(value)}
                    value={value}
                >
                    {modalData.options.map((option) => (
                        <View key={option}>
                            <View style={styles.radiobtn}>
                                <RadioButton value={option} />
                            </View>
                            {/* <View style={styles.radiobtnTxt}> */}
                            <Text style={styles.radiobtnTxt}> {option}</Text>
                            {/* </View> */}
                        </View>
                    ))}
                </RadioButton.Group>
            </View>
        );
    }

    const changeSetting = (setting, option) => {
        // THEME.selectedIndex = index;
        // setTheme(index);
        console.log(setting);
        console.log(option);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <SettingsItem
                    settings={THEME}
                    iconName="palette"
                    iconColor="#ebde34"
                    value="Dark"
                />
                <SettingsItem
                    settings={LANGUAGE}
                    iconName="language"
                    iconColor="silver"
                    value="English"
                />
                <ModalElement />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    itemRow: {
        height: 80,
        padding: 20,
        borderBottomColor: 'silver',
        flexDirection: 'row',
        width: vw(100),
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: vw(80),
    },
    modalHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 7,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    radiobtn: {
        marginTop: 5,
    },
    radiobtnTxt: {
        marginLeft: 45,
        marginTop: -33,
        fontSize: 21,
    },
});

export default AppSettings;
