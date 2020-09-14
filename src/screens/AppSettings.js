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
import { ThemeToggleContext } from '../context/ThemeContext';
import { ThemedView, ThemedText } from '../styled-components/Themed-Comps';
import { useTranslation } from 'react-i18next';
import { setLang, getCurrentLang } from '../i18n/i18config';

const AppSettings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalData, setModalData] = useState([]);
    const [radiogrpValue, setRadiogpValue] = useState('');
    const [lang, setLang1] = useState(LANGUAGE.value);

    const { theme, changeTheme } = React.useContext(ThemeToggleContext);
    const { i18n } = useTranslation('common');
    const SettingsItem = ({
        settings,
        currentSetting,
        iconName,
        iconColor,
    }) => {
        return (
            <TouchableHighlight
                underlayColor="skyblue"
                onPress={() => {
                    openSettingsModal(settings, currentSetting);
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
                            <Text style={styles.subText}>{settings.value}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    const openSettingsModal = (settings, currentSetting) => {
        setModalTitle(settings.name);
        setModalData(settings.options);
        setModalVisible(!modalVisible);
        setRadiogpValue(currentSetting);
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
                        <SettingsRadioBtn />
                        <Text
                            style={styles.textStyle}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            CLOSE
                        </Text>
                    </View>
                </View>
            </Modal>
        );
    };

    function SettingsRadioBtn() {
        return (
            <View>
                <RadioButton.Group
                    onValueChange={(value) => changeSetting(value)}
                    value={radiogrpValue}
                    style={{ backgroundColor: 'purple' }}
                >
                    {modalData.map((option) => (
                        <View key={option.value}>
                            <View style={styles.radiobtn}>
                                <RadioButton value={option.value} />
                            </View>
                            {/* <View style={styles.radiobtnTxt}> */}
                            <Text style={styles.radiobtnTxt}>
                                {' '}
                                {option.name}
                            </Text>
                        </View>
                    ))}
                </RadioButton.Group>
            </View>
        );
    }

    const getSettingsText = (settings, value) => {
        const res = settings.options.filter((option) => option.value === value);
        return res[0].name;
    };
    const changeSetting = (value) => {
        setRadiogpValue(value);
        if (modalTitle === THEME.name) {
            changeTheme(value);
            THEME.value = getSettingsText(THEME, value);
        } else {
            setLang1(value);
            i18n.changeLanguage(value);
            LANGUAGE.value = value;
            setLang(value);
            LANGUAGE.value = getSettingsText(LANGUAGE, value);
        }
    };

    return (
        <ScrollView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.pageHeader}>Settings</ThemedText>
                <SettingsItem
                    settings={THEME}
                    currentSetting={theme}
                    iconName="palette"
                    iconColor="#ebde34"
                />
                <SettingsItem
                    settings={LANGUAGE}
                    currentSetting={LANGUAGE.value}
                    iconName="language"
                    iconColor="silver"
                />
                <ModalElement />
            </ThemedView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    pageHeader: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 30,
    },
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
        marginBottom: 5,
    },
    radiobtnTxt: {
        marginLeft: 45,
        marginTop: -35,
        fontSize: 21,
    },
    textStyle: {
        fontSize: 17,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
});

export default AppSettings;
