import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from "react-native";

function WelcomeScreenButton({text, bgColor,onPress}) {
    return <TouchableOpacity onPress={onPress} style={{...styles.container,backgroundColor:bgColor}} activeOpacity={0.8}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:20,
        marginVertical:15,
        elevation:8,
        shadowColor:"#ccc",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:10,
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontFamily:'RobotoBold'
    }

})

export default WelcomeScreenButton;
