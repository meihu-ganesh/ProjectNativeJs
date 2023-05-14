import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import ExStyles from "../style";

const APIPlaying = () => {

    const [data, setData] = useState([]);

    const getAPIData = async () => {
        // console.warn("Function Calleed");
        const url = "http://10.0.2.2:3000/users";
        let results = await fetch(url);
        results = await results.json();
        // console.warn(results);
        setData(results);
    }

    useEffect(()=> {
        getAPIData();
    }, []);

    return (
        <View>
            <Text style={ExStyles.heading}>Call JSON Server API</Text>
            {
                data.length ?
                data.map((item)=>
                    <View style={{borderWidth: 1, borderColor: "#333"}}>
                        <Text style={{fontSize: 20, }}>{item.id}</Text>
                        <Text style={{fontSize: 20, }}>{item.name}</Text>
                        <Text style={{fontSize: 20, }}>{item.age}</Text>
                        <Text style={{fontSize: 20, }}>{item.email}</Text>
                    </View>
                )
                : null
            }
        </View>
    );
};

export default APIPlaying;
