import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {FontAwesome,Ionicons} from "@expo/vector-icons";
import {colors} from "../utils/config";

function AppHeaderButton(props) {
    return <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={{paddingRight:5,color:colors.charcoal,fontWeight:'bold'}}>0255000102</Text>
            <FontAwesome name="plus-square" size={24} color="#8FBAF3" />
        </View>
        <View>
            <Ionicons name="notifications" size={24} color="#8FBAF3" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomWidth:2,
        borderBottomColor:"#ccc"
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default AppHeaderButton;
