import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Modal,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { vw } from 'react-native-expo-viewport-units';

import { THEME, LANGUAGE } from '../constants/Settings';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';

const AppSettings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [themeIndex, setTheme] = useState(THEME.selectedIndex);
    const [langIndex, setLang] = useState(LANGUAGE.selectedIndex);

    const SettingsItem = ({ title, iconName, iconColor, value, settings }) => {
        return (
            <TouchableHighlight
                underlayColor="skyblue"
                onPress={() => {
                    openSettingsModal(title, settings);
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
                        <Text style={styles.headerText}> {title} </Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.subText}> {value} </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    const openSettingsModal = (title, settings) => {
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

    const changeSetting = (setting, index) => {
        setting.name === THEME.name ? setTheme(index) : setLang(index);
        setting.selectedIndex = index;
        console.log(setting);
    };

    const SettingsRadioBtn = ({ settings }) => {
        return (
            <RadioForm formHorizontal={false} animation={false}>
                {settings.options.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            borderWidth={1}
                            buttonInnerColor={'darkgreen'}
                            buttonOuterColor={
                                i === settings.selectedIndex
                                    ? 'darkgreen'
                                    : 'grey'
                            }
                            buttonSize={15}
                            isSelected={i === themeIndex}
                            buttonOuterSize={25}
                            buttonStyle={{}}
                            buttonWrapStyle={{ marginTop: 10 }}
                            onPress={() => {
                                changeSetting(obj, i);
                            }}
                        />
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            labelStyle={{ fontSize: 20, color: '#2ecc71' }}
                            labelWrapStyle={{ marginTop: 10 }}
                            onPress={() => {
                                changeSetting(obj, i);
                            }}
                        />
                    </RadioButton>
                ))}
            </RadioForm>
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <SettingsItem
                    title={THEME.name}
                    iconName="palette"
                    iconColor="#ebde34"
                    value="Dark"
                    settings={THEME}
                />
                <SettingsItem
                    title={LANGUAGE.name}
                    iconName="language"
                    iconColor="silver"
                    value="English"
                    settings={LANGUAGE}
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
        marginBottom: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default AppSettings;
