import React, { useEffect } from "react";
import { Text, View } from "react-native";
import ExStyles from "../style";

const UserComp = (props) => {

    console.warn(props);
    // const
    useEffect(()=> {
        console.warn("Run this code when data is updated");
    },[props.info.data]);
    
    useEffect(()=> {
        console.warn("delete this code when count is updated");
    },[props.info.count]);

    return (
        <View>
            <Text style={{color:"#0f9b9f", fontSize: 30}}>User Component</Text>
            <Text style={{color:"#0ddb2f", fontSize: 30}}>Data: {props.info.data}</Text>
            <Text style={{color:"#d00b9f", fontSize: 30}}>Count: {props.info.count}</Text>
        </View>
    );
};

export default UserComp;
