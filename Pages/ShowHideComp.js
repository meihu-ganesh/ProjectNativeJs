import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import ExStyles from '../style';
import ControlShowHide from '../ControlShowHide';

const ShowHideComp = () => {

    const [show, setShow] = useState(true);

    return (
        <View>
            <Text style={ExStyles.heading}>Show/Hide Component</Text>
            <Button title="toggle Component" onPress={()=>setShow(!show)} />
            {/* <Button title="Show Component" onPress={()=>setShow(true)} /> */}
            {/* <Button title="Hide Component" onPress={()=>setShow(false)} /> */}
            {
                show ? <ControlShowHide /> : null
            }
        </View>
    );
};

export default ShowHideComp;
