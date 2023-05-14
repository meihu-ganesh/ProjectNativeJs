import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import ExStyles from "../style";

const APIPlaying = () => {

    const [data,setData] = useState([]);

    const getAPIData = async () => {
        // api call
        // // console.warn("Hello");
        const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        // // console.warn(result);
        setData(result);
    };

    useEffect(()=> {
        getAPIData();
    }, []);

    return (
        <ScrollView>
            <Text style={ExStyles.heading}>List with API Call</Text>
            {
                data.length ? 
                <FlatList 
                    data={data}
                    renderItem={({item})=> 
                        <View style={{borderBottomColor: "#333", borderBottomWidth: 1,padding:12}}>
                            <Text style={{fontSize: 20}}>Id: {item.id}</Text>
                            <Text style={{fontSize: 20}}>Title: {item.title}</Text>
                            <Text style={{fontSize: 20}}>Body: {item.body}</Text>
                        </View>
                    }
                />
                    : null
            }
        </ScrollView>
    );
};

export default APIPlaying;
