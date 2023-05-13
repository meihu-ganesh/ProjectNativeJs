import React, { useEffect } from "react";
import { Text, View } from "react-native";
import ExStyles from "../style";

const UnMountComp = () => {

    let timer = setInterval(()=>{
        console.warn('timer called');
    }, 2000)

    // useEffect(()=>{
    //     console.warn('Use Effect called');
    // });
    
    useEffect(()=>{
        return ()=> clearInterval(timer)
        // return()=> {console.warn('Use Effect called on unMount');};
    });

    return (
        <View>
            <Text style={{color: '#ad4c6a', fontSize: 30}}>Unmount this</Text>
        </View>
    );
};

export default UnMountComp;
