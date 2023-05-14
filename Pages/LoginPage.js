import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ExStyles from "../style";

const LoginPage = (props) => {

    const [name, setName] = useState(""); 
    const age = 18;

    return (
        <View style={styles.main}>
            <Text style={ExStyles.heading}>login Page</Text>
            <TextInput
                style={ExStyles.inputBox}
                // onChangeText={(text)=> console.warn(text)}
                onChangeText={(text)=> setName(text)}
                placeholder="Type someting"
            />
            <Button 
                title="Go to Home Page" 
                onPress={()=> 
                    props.navigation.navigate("Home",
                        {name, age})}
                />
        </View>
    );
};

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginPage;
