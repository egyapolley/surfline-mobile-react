import React from 'react';
import {ImageBackground, View,StyleSheet} from "react-native";
import {Dimensions} from "react-native";
import {colors} from "../utils/config";

function AppAddBanner({children}) {
    const {height} = Dimensions.get('window')

    return <View style={{...styles.container,height:height/5}}>

            {children}

    </View>

}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:colors.secondary
    }
})

export default AppAddBanner;
