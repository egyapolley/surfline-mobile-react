import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import {colors} from "../utils/config";

function BuyTabCard({item,onPress}) {
    return <TouchableHighlight underlayColor={colors.primary} onPress={() =>onPress(item)}
                               style={{overflow:'hidden',
                                   borderRadius:20,
                                   //  elevation:8,
                                   // shadowColor:"#ccc",
                                   // shadowOffset:{width:0,height:2},
                                   // shadowOpacity:0.26,
                                   // shadowRadius:10,
                                   borderWidth:2,
                                   borderColor:"skyblue",
                               marginVertical:10}}>
        <View style={styles.container}>
            <View>
                <FontAwesome5 name={item.icon} size={20} color="skyblue"/>
            </View>
            <Text style={styles.text}>{item.label}</Text>
            <View >
                <FontAwesome5 name="chevron-right" size={20} color="skyblue"/>
            </View>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({


    container:{
        width:'100%',
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',

    },
    text:{
        flexGrow:2,
        paddingHorizontal:30,
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'RobotoBold',
        color:colors.primary,
    },

})

export default BuyTabCard;
