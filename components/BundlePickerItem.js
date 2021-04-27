import React from 'react';
import {TouchableHighlight, View,Text,StyleSheet} from "react-native";
import {colors} from "../utils/config";

function BundlePickerItem({item,onPress}) {
    return (
        <TouchableHighlight underlayColor="#ccc" onPress={() =>onPress(item)} >
            <View style={styles.container}>
                <Text style={styles.textName}>{item.name}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'40%'}}>
                    <Text style={styles.textPrice}>{item.price}GHC</Text>
                    <Text style={styles.textVal}>{item.validity}</Text>
                </View>

            </View>
        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textName:{
        width:'60%',
        fontWeight:'bold',
        color:colors.primary,
        fontFamily:'RobotoBold',
    },
    textPrice:{
        fontWeight:'bold',
        color:colors.primary,
        fontFamily:'RobotoBold',
    },
    textVal:{
        fontWeight:'bold',
        color:colors.primary,
        fontFamily:'RobotoBold',
    },
})
export default BundlePickerItem;
