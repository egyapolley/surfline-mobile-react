import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

function AppButton({text, width, onPress, bgColor}) {
   return <TouchableOpacity onPress={onPress} style={{...styles.container,backgroundColor:bgColor,width:width}} activeOpacity={0.7}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>;

}

const styles = StyleSheet.create({
    container:{
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        elevation:8,
        shadowColor:"#ccc",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:10,
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
        textTransform:"capitalize"
    }

})

export default AppButton;
