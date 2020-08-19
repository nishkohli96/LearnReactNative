import React, { useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalComponent = () => {
    const image = { uri: 'https://reactjs.org/logo-og.png' };
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.centeredView}>
                    <Text style={styles.text}>
                        {' '}
                        Added Icon from react-native-vector-icons
                    </Text>
                    <Icon name="rocket" size={50} color="#900" />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        // onRequestClose={(data) => {
                        //     Alert('Modal has been closed.' + data);
                        // }}
                    >
                        {/* Transparent false sets bg color to white, until modal closed */}
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>
                                    Hello World!
                                </Text>

                                <TouchableHighlight
                                    style={{
                                        ...styles.openButton,
                                        backgroundColor: '#2196F3',
                                    }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        // data = {
                                        //     name: 'nish',
                                        // };
                                    }}
                                >
                                    <Text style={styles.textStyle}>
                                        Hide Modal
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default ModalComponent;
