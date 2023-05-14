import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CustomModal = () => {

    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>
            {
                show ? 
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Text>Blah blah</Text>
                            <Button title="Close" onPress={()=> setShow(false)} />
                        </View>
                    </View>
                : null
            }
            <Button title="Open Dialog" onPress={()=> setShow(true)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 300,
        width: 300,
    },
});

export default CustomModal;
