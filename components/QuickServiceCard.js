import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../utils/config";

function QuickServiceCard({item, onPress}) {

    const {width, height} = Dimensions.get('window')
    return (
        <TouchableHighlight underlayColor={colors.primary} onPress={() =>onPress(item)} style={{
            width:width/3,
            height:120,
            marginVertical:5,
            marginHorizontal:30,
            paddingVertical:5,
            paddingHorizontal:20,
            borderRadius:20,
            borderWidth:2,
            borderColor:"skyblue",
            elevation:10,
            shadowColor:"#ccc",
            shadowOffset:{width:0,height:2},
            shadowOpacity:0.26,
            shadowRadius:10,
            backgroundColor:'#f5f5f5',
            overflow:'hidden'
        }}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={item.icon} size={50} color={colors.secondary} />
                <Text style={styles.text}>{item.label}</Text>
            </View>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        marginTop:10,
        textAlign:'center',
        fontWeight:'bold',
        color:colors.secondary,
        fontSize:12,
    }
})

export default QuickServiceCard;
