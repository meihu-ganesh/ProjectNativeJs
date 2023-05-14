import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ExStyles from "../style";

const HeaderSearch = () => {

    return (
        <TextInput placeholder="Search" />
        // <View style={styles.main}>
        //     <Text style={ExStyles.heading}>Home Page</Text>
        // </View>
    );
};

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HeaderSearch;
