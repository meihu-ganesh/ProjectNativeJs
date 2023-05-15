import React, { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ExStyles from "../style";

const APIPlaying = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    
    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const saveData = async () => {
        // console.warn(name, age, email);

        // if (!name) {
        //     setNameError(true);
        // } else {setNameError(false);}
        {!name ? setNameError(true) : setNameError(false)}
        // if (!age) {
        //     setAgeError(true);
        // } else {setAgeError(false);}
        {!age ? setAgeError(true): setAgeError(false)}
        // if (!email) {
        //     setEmailError(true);
        // } else {setEmailError(false)}
        {!email ? setEmailError(true): setEmailError(false)}
        if (!name || !age || !email) {
            return false;
        }
        const url = 'http://192.168.1.2:3000/users';
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, age, email}),
        });
        result = await result.json();
        console.warn("Data Updated");
    }

    return (
        <View>
            <Text style={ExStyles.heading}>Pst API Call</Text>
            <TextInput 
                style={ExStyles.inputBox}
                placeholder="Enter Name"
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            {
                nameError ? <Text style={ExStyles.error}>Please Enter Name Properly</Text> : null
            }
            <TextInput 
                style={ExStyles.inputBox}
                placeholder="Enter age"
                value={age}
                onChangeText={(text)=>
                    setAge(parseInt(text, 10))}
                    keyboardType="numeric"
            />
            {
                ageError ? <Text style={ExStyles.error}>Please Enter Age Properly</Text> : null
            }
            <TextInput 
                style={ExStyles.inputBox}
                placeholder="Enter email"
                value={email}
                onChangeText={(text)=>setEmail(text)}
            />
            {
                emailError ? <Text style={ExStyles.error}>Please Enter Email Properly</Text> : null
            }
            <Button title="Submit" onPress={saveData} color={"#2f2"}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default APIPlaying;
