import React from "react";
import { Text, View } from "react-native";
import ExStyles from "../style";

const UserDataLoop = (props) => {
    const data = props.data;
    const item = props.item;
    // console.warn(item);
    return (
        <View style={ExStyles.loopBox}>
            <Text style={ExStyles.loopItem}>{data.id}</Text>
            <Text style={ExStyles.loopItem}>{item.name}</Text>
            <Text style={ExStyles.loopItem}>{item.email}</Text>
        </View>
    );
};

export default UserDataLoop;
