import React, { Component } from "react";
import { Text, View } from "react-native";

class SecondaryClass extends Component {

    render() {
        // console.warn(this.props);
        return(
            <View>
                <Text style={{color:"#00af00", fontSize: 30}}>Student Name: {this.props.name}</Text>
            </View>
        )
    }
}

export default SecondaryClass
