import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableLP = () => {

    return (
        <View style={styles.main}>
            <Pressable
                onPress={()=> console.warn('Normal on Pres')}
                onLongPress={()=> console.warn('Long Press')} delayLongPress={2000}
                onPressIn={()=> console.warn('press in')}
                onPressOut={()=> console.warn('press out')}
            >
                <Text style={styles.pressableBtn}>Press me</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    pressableBtn: {
        backgroundColor: "#368123",
        color: "#eee",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        shadowColor: "#0000ff",
        elevation: 30,
    },
});

export default PressableLP;
