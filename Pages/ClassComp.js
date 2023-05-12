import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ExStyles from '../style';
import SecondaryClass from './SecondaryClass';

class ClassComp extends Component {

    constructor() {
        super();
        this.state= {
            name: 'Ganu',
            age: 18,
        }
    }

    updateName(val) {
        this.setState({name: val});
    }

    render() {
        return(
            <View>
                <Text style={{fontSize:30, color: "#00afff"}}>{this.state.name} & {this.state.age}</Text>
                <TextInput placeholder='Enter your name' 
                    onChangeText={(text)=> this.updateName(text)} 
                />
                <Button title="Press me" />
                <SecondaryClass name={this.state.name}/>
            </View>
        )
    }
}

export default ClassComp;
