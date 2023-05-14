import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ModalBox = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.main}>
            <Modal transparent={true} visible={showModal} animationType="slide" >
                <View style={styles.centeredView}>
                    <View style={styles.ModalWrapper}>
                        <Text style={styles.ModalText}>Hello, Chitikesh Sai Naga Raju</Text>
                        <Text style={[styles.ModalText, {marginBottom:20,}]}>Good Morning!</Text>
                        <Button title="Close" color={'#c5f'} onPress={()=>setShowModal(false)} />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                <Button title="Open Modal" onPress={()=>setShowModal(true)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    buttonView: {
        flex:1,
        justifyContent: 'flex-end',
    },
    centeredView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalWrapper: {
        alignItems: 'center',
        backgroundColor: '#0cf',
        padding: 40,
        borderRadius: 20,
        shadowColor: '#f0f',
        elevation: 40
    },
    ModalText: {
        color: "#009",
        fontSize: 18,
    },
});

export default ModalBox;
