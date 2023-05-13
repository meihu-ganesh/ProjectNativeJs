import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ExStyles from "../style";

const Buttons = () => {

    return (
        <View style={styles.main}> 
            {/* <Text style={ExStyles.heading}>Touchable Highlight</Text> */}
            <TouchableHighlight>
                <Text style={[styles.button,styles.success]}> Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.primary]}> Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.warning]}> Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.danger]}> Danger</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.neutral]}> Neutral</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.button}> Button</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    button: {
        backgroundColor: "#bbb",
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        padding: 20,
        margin: 20,
        borderRadius: 20,
        shadowColor: "#a00",
        elevation: 20,
        shadowOpacity: 1,
    },
    success: {
        backgroundColor: "#0f0"
    },
    primary:{backgroundColor: "#00f"},
    warning:{backgroundColor: "#fe0"},
    danger:{backgroundColor: "#f00"},
    neutral:{backgroundColor: "#f0f"},
});


export default Buttons;
