import React from 'react';
import {Text, TextInput, View,StyleSheet} from "react-native";
import {colors} from "../utils/config";

function AppTextInput({fieldName,...props}) {
    return <View style={styles.inputContainer}>
        <Text style={styles.text}>{fieldName}</Text>
        <TextInput style={styles.textInput} {...props}/>
    </View>
}

const styles=StyleSheet.create({
    inputContainer:{
        width:'100%',
        marginVertical:10,
    },
    textInput:{
        backgroundColor:'#f5f5f5',
        borderWidth:2,
        paddingVertical:2,
        paddingHorizontal:15,
        borderRadius:25,
        // borderColor:"#36454f",
        borderColor:"skyblue"
    },
    text:{
        fontFamily:'RobotoBold',
        paddingVertical:5,
        color:"#36454f",
        fontSize:15,
        fontWeight:'bold'
    }
})

export default AppTextInput;
