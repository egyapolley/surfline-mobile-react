import React from 'react';
import {View,Text,StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {colors} from "../utils/config";

function AppHeader(props) {
    return <View style={styles.container}>
        <View style={styles.leftContainer}>
            <View style={{padding:10,backgroundColor:colors.secondary,width:50,height:50,borderRadius:25}}>
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold'}}>JD</Text>
            </View>
            <View style={{
                padding:10,
                justifyContent:'center',
                alignItems:'center'
            }} >
                <Text style={{fontWeight:'bold', fontSize:18,color:colors.charcoal,textAlign:'center'}}>Hello, Janelle</Text>
                <Text style={{color:colors.charcoal,textAlign:'center',fontSize:12}}>Active: 11/01/2021</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            <View>
                <FontAwesome name="gift" size={35} color="#F6C90E" />
            </View>
            <Text style={{textAlign:'center',color:colors.charcoal,fontWeight:'bold', fontSize:12,textTransform:'capitalize'}}>JOIN PRIME</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        padding:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    leftContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    rightContainer:{
        justifyContent:'center',
        alignItems:'center',
    }


})

export default AppHeader;
