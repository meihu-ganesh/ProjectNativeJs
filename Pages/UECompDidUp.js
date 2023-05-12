import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ExStyles from '../style';
import UserComp from './UserComp';


const UECompDidUp = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(1000);

    // useEffect(()=>{
    //     console.warn('You had been fooled, Data had Changed!');
    // },[data]);

    // useEffect(()=>{
    //     console.warn('You had been fooled, Count had Changed!');
    // },[count]);
    
    return (
        <View>
            <Text style={ExStyles.heading}>{data} useEffect as {count} ComponentDidUpdate</Text>
            {/* Funny within comments 😏 */}
            {/* <Button title="Update Count" onPress={()=>setData(data + 1)} /> */}
            <Button title="Update Count" onPress={()=>setCount(count + 1)} />
            {/* <Button title="Update Data" onPress={()=>setCount(count + 1)} /> */}
            <Button title="Update Data" onPress={()=>setData(data + 1)} />
            <UserComp info={{data, count}} />
        </View>
    );
};

export default UECompDidUp;
