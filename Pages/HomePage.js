import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExStyles from "../style";

const HomePage = (props) => {

    // console.warn(props.route.params);
    const {name,age} = props.route.params;

    return (
        <View style={styles.main}>
            <Text style={ExStyles.heading}>Home Page</Text>
            <Text style={ExStyles.heading}>Name: {name}</Text>
            <Text style={ExStyles.heading}>Age: {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomePage;
