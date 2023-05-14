import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ExStyles from "../style"

const CheckOS = () => {

    return (
        <View>
            <Text style={ExStyles.heading}>Platform: {Platform.OS}</Text>
            {
                Platform.OS=='android' ? 
                <View style={{backgroundColor:"green",height:100, width:100}}></View>
                :
                <View style={{backgroundColor:"red",height:100, width:100}}></View>
            }
            <Text style={styles.textOS}>Operating System</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textOS: {
        fontSize: 25,
        color: Platform.OS=="android" ? "orange" : "violet",
    },
});

export default CheckOS;
