import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";

const EditStatusBar = () => {

    const [hide, setHide] =useState(false);
    const [barState, setBarState] = useState('dark-content');

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'orange'}
                barStyle={barState}
                hidden={hide}
            />
            <Button title="Toggle statusBar" onPress={()=>setHide(!hide)} />
            <Button title="Update Style" onPress={()=> setBarState('light-content')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default EditStatusBar;
