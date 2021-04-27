import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet, Dimensions} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {colors} from "../utils/config";

function MoreTabCard({item, onPress}) {

    const {width, height} = Dimensions.get("window")
    return  <TouchableHighlight underlayColor={colors.primary} onPress={() =>onPress(item)} style={{
        width:width/4,
        height:90,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:"skyblue",
        paddingVertical:5,
        borderRadius:15,
        elevation:12,
        shadowColor:"#ccc",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:10,
        backgroundColor:'#fff',
        overflow:'hidden'
    }}>
        <View style={styles.container}>
            <FontAwesome name={item.icon} size={25} color={colors.secondary} />
            <Text style={styles.text}>{item.label}</Text>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold',
        color:colors.charcoal,
    }
})

export default MoreTabCard;
