import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import ExStyles from "../style";

const ResponsiveFlexUI = () => {

    return (
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}></View>
                <View style={styles.innerBox2}></View>
                <View style={styles.innerBox3}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    );
};

const styles = StyleSheet.create ({
    main: {flex:1,},
    box1: {flex:2, backgroundColor:'red', flexDirection: 'row'},
    box2: {flex:1, backgroundColor:'green'},
    box3: {flex:1, backgroundColor:'blue'},
    innerBox1: {flex:1, backgroundColor:"violet"},
    innerBox2: {flex:1, backgroundColor:"pink"},
    innerBox3: {flex:1, backgroundColor:"red"},
});

export default ResponsiveFlexUI;
