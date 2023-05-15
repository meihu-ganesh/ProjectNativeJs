import React, { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import ExStyles from "../style";

const APIPlaying = () => {

    const saveAPIData = async () => {
        const data = {
            name: "Sai Naga Raju",
            age: 17,
            email: 'chsainagaraju@gmail.com',
        };
        const url = "http://192.168.1.2:3000/users";
        let  result = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.warn("Data Updated");
    };

    return (
        <View>
            <Text style={ExStyles.heading}>Pst API Call</Text>
            <Button title="Save Data" onPress={saveAPIData} />
            
        </View>
    );
};

export default APIPlaying;
