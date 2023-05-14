import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import ExStyles from "../style";
const Loader = () => {

    // const [animate, setAnimate] = useState(true);
    // toogle animation
    // setInterval(()=> {
        //     setAnimate(!animate);
        // }, 4000);
    const [show, setShow] = useState(false); 

    const displayAnimation = () => {
        setShow(true);

        //api call for 4 sec
        setTimeout(()=> {
            setShow(false)
        }, 4000);
    }
        
    return (
        <View style={styles.main}>
            <ActivityIndicator size={'large'} color={'#258cfa'}  animating={show}/>
            {
                show ? <ActivityIndicator size={150} color={'#258cfa'}  animating={show}/> : null
            }
            <Button title="show Loader" onPress={displayAnimation} />
            <Text style={ExStyles.heading}> Activity Indicator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Loader;
