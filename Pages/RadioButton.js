import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = () => {

    const skills = [
        {
            id: 1,
            name: 'Java',
        },
        {
            id: 2,
            name: 'Python',
        },
        {
            id: 3,
            name: 'JavaScript',
        },
        {
            id: 4,
            name: 'PHP',
        },
        {
            id: 5,
            name: 'SQL',
        },
    ]

    const [selectedRadio1, setSelectedRadio1] = useState(false);
    const [selectedRadio2, setSelectedRadio2] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(false);

    return (
        <View style={styles.main}>
            {/* <View>
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
            </View> */}
            <View>
                <Text style={styles.question}>Single Select</Text>
                {
                    // skills.map((item)=> 
                    skills.map((item, index)=> 
                    <TouchableOpacity
                        key={index}
                        // key={item.id}
                        onPress={()=> setSelectedRadio(item.id)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                selectedRadio == item.id ? <View style={styles.radioBg}></View> : null
                            }
                        </View>
                        <Text style={styles.radioText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                )}
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
