import React from "react";
import { FlatList, Text, View } from "react-native";
import ExStyles from "../style";
import UserDataLoop from "./UserDataLoop";

const CompLoopFlatList = () => {

    const users = [
        {
            id: 1,
            name: "Ganesh Here",
            email: "meihuganesh369@gmail.com",
        },
        {
            id: 2,
            name: "Sai Naga Raju Chitikesh",
            email: "chsainagaraju@gmail.com",
        },
        {
            id: 3,
            name: "Chitikesh Sai Naga Raju",
            email: "snrganesh99@kgpian.iitkgp.ac.in",
        },
    ];

    return (
        <View>
            <Text style={ExStyles.heading}>Component in Loop with FlatList</Text>
                <FlatList 
                    data={users}
                    renderItem={({item})=> <UserDataLoop item={item} data={item} /> }
                />
        </View>
    )
}

export default CompLoopFlatList;
