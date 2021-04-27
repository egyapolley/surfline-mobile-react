import React from 'react';
import {View, Image, Text,StyleSheet} from "react-native";
import {colors} from "../utils/config";

function Logo({text,text2}) {
    return <View style={styles.container}>
        <Image source={require("../assets/surfline_logo.jpg")} style={styles.logo}/>
        {text && <Text style={styles.text}>{text}</Text>}
        {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
    ;
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width: 100,
        height:100
    },
    text:{
        color:colors.primary,
        marginTop:10,
        fontSize:20,
        fontWeight:'bold'
    },
    text2:{
        color:colors.secondary,
        marginTop:5,

    }

})

export default Logo;
