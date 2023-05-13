import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = () => {

    const [selectedRadio1, setSelectedRadio1] = useState(false);
    const [selectedRadio2, setSelectedRadio2] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(false);

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.question}>Multiple Select</Text>
                <TouchableOpacity onPress={()=> setSelectedRadio1(!selectedRadio1)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio1 ? <View style={styles.radioBg}></View> : null
                            }
                        </View>
                        <Text style={styles.radioText}> 1st Option</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setSelectedRadio2(!selectedRadio2)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio2 ? <View style={styles.radioBg}></View> : null
                            }
                        </View>
                        <Text style={styles.radioText}>2nd option</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.question}>Single Select</Text>
                <TouchableOpacity onPress={()=> setSelectedRadio(!selectedRadio)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio ? <View style={styles.radioBg}></View> : null
                            }
                        </View>
                        <Text style={styles.radioText}> 1st Option</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setSelectedRadio(!selectedRadio)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio ? null : <View style={styles.radioBg}></View>
                            }
                        </View>
                        <Text style={styles.radioText}>2nd option</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#93f864"
    },
    question: {
        fontSize: 25,
        color: "#315236",
        textAlign: "center",
    },
    radioText: {
        fontSize: 20,
        color: "#93f864",
        backgroundColor: "#315236",
        padding: 10,
        borderRadius: 12,
    },
    radio: {
        height: 40,
        width: 40,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#315236"
        // borderColor: "#",
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: "center",
    },
    radioBg: {
        backgroundColor: "#315236",
        height: 28,
        width: 28,
        borderRadius: 14,
        margin: 4,
    },
})

export default RadioButton;
