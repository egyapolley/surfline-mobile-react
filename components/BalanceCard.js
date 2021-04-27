import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from "react-native";
import {colors} from "../utils/config";

function BalanceCard({onPress, item}) {
    const {width,height} =Dimensions.get("window")
    return <View
        style={{width:width/3,
            height: 90,
            marginVertical: 5,
            marginHorizontal: 30,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderWidth:1,
            borderColor:"skyblue",
            borderRadius: 20,
            elevation: 10,
            shadowColor:"#fff",
            shadowOffset:{width:0,height:2},
            shadowOpacity:0.26,
            shadowRadius:10,
            justifyContent:'center',
            backgroundColor: '#fff',
            overflow: 'hidden'}}>
            <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
            <View style={styles.textContainer1}>
                <Text style={styles.textValue}>{item.value}</Text>
                <Text style={styles.textUnit}>{item.unit}</Text>
            </View>
            {item.expiry &&  <Text style={styles.textExpiry}>EXP:{item.expiry}</Text>}

        </View>
}

const styles = StyleSheet.create({
    textContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName:{
        fontSize:15,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontFamily:'RobotoBold',
        color :colors.charcoal

    },
    textValue:{
        fontSize:22,
        fontWeight:'bold',
        fontFamily:'RobotoBold',
        color:colors.primary,
    },
    textUnit:{
        alignSelf:'flex-start',
        fontSize:11,
        fontFamily:'RobotoBold',
        fontWeight:'bold'
    },
    textExpiry:{
        fontSize: 10,
        fontFamily:'RobotoBold',
        fontWeight:'bold',
        color :colors.charcoal
    }


})

export default BalanceCard;
