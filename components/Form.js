import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ExStyles from '../style';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const [show, setShow] = useState(true);

    const resetFormData = () => {
        setName("");
        setEmail("");
        setPassword("");
        setDisplay(false);
    }

    return (
        <View >
            <Text style={ { fontSize:30 } }>Simple Form in React Native</Text>
            <TextInput 
            style={ExStyles.inputBox}
            value={name}
            placeholder='Enter Name'
            onChangeText={(text)=>setName(text)}
            />
            <TextInput 
            style={ExStyles.inputBox}
            value={email}
            placeholder='Enter Email'
            onChangeText={(text)=>setEmail(text)}
            />
            <TextInput 
            style={ExStyles.inputBox}
            value={password}
            secureTextEntry = {show}
            placeholder='Enter Password'
            onChangeText={(text)=>setPassword(text)}
            />
            <Button color="#333333"
                title='Show Password'
                onPress={()=>setShow(false)}
            />
            <View style={{marginBottom:10, marginTop: 10}}>
                <Button 
                    color="green" 
                    title="Print Details" 
                    onPress={()=>setDisplay(true)} 
                />
            </View>
            <Button title="clear Input" onPress={resetFormData} />
            <View>
                {
                    display ?
                    <View>
                        <Text style={{fontSize:20}}>User name is {name} </Text>
                        <Text style={{fontSize:20}}>User email is {email} </Text>
                        <Text style={{fontSize:20}}>User Password is {password} </Text>
                    </View> : null
                }
            </View>
        </View>
    );
};

export default Form;
