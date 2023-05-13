import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import ExStyles from '../style';
import UnMountComp from './UnMountComp';

const UEUnMount = () => {

    const [show,setShow] = useState(true);
    // console.warn(show);
    return (
        <View>
            <Text style={ExStyles.heading}>useEffect for Unmount Component</Text>
            <Button title="Toggle" onPress={()=>setShow(!show)} />
            {
                show ? <UnMountComp /> : null
            }
            {/* <UnMountComp /> */}
        </View>
    );
};

export default UEUnMount;
