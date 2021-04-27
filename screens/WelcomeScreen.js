import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import AppScreen from "../components/AppScreen";
import WelcomeScreenButton from "../components/WelcomeScreenButton";

function WelcomeScreen({navigation}) {
    return (<AppScreen>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/surfline_logo.jpg")} />
            </View>
            <View style={styles.btnContainer}>
                <WelcomeScreenButton  text="SIGN UP" onPress={() =>{navigation.navigate("Sign Up")}} bgColor="#0245A3"/>
                <WelcomeScreenButton  text="SIGN IN" onPress={() =>{navigation.navigate("Sign In")}} bgColor="#578CD5FF"/>
            </View>
        </View>

    </AppScreen>);
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    logoContainer:{
        paddingTop:70,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo:{
        width:200,
        height:200,
    },
    btnContainer:{
        marginTop:60,
        width: '100%',
        paddingBottom:40,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default WelcomeScreen;
