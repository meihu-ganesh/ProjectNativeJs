import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ExStyles from '../style';

const LCUseEffect = () => {

    const [count, setcount] = useState(0);

    useEffect(()=>{
        console.warn('count is '+ count);
    },[]);

    return (
        <View>
            <Text style={ExStyles.heading}>Life Cycle with Use Effect {count}</Text>
            <Button title="Update Count" onPress={()=> setcount(count+1)} />
        </View>
    )
}

export default LCUseEffect;
