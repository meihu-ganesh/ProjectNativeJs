import React from "react";
import { Text, View } from "react-native";
import ExStyles from "../style";

const GridData = () => {

    const users = [
        {
            id: 1,
            name: 'Ganu',
        },
        {
            id: 2,
            name: 'Ganesh',
        },
        {
            id: 3,
            name: 'Chitikesh',
        },
        {
            id: 4,
            name: 'Sai Naga Raju',
        },
        {
            id: 5,
            name: 'NagRaj',
        },
        {
            id: 6,
            name: 'Nagin',
        },
        {
            id: 7,
            name: 'Kat Raj',
        },
        {
            id: 8,
            name: 'Sai',
        },
        {
            id: 9,
            name: 'SN Raju',
        },
        {
            id: 10,
            name: 'Chitikesh Sai Naga Raju',
        },
        {
            id: 11,
            name: 'Sai Naga',
        },
    ];

    return (
        <View>
            <Text style={{fontSize:30}}>Grid with Dynamic Data</Text>
            <View style={ExStyles.gridContainer}>
                {
                    users.map((item)=><Text style={ExStyles.gridItem}>{item.name}</Text>)
                }
            </View>
        </View>
    )
};

export default GridData;
