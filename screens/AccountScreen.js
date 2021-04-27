import React, {useContext} from 'react';
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import AppAddBanner from "../components/AppAddBanner";
import {Text, TouchableOpacity, View} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import {colors} from "../utils/config";
import AuthContext from "../context/AuthContext";
import AppHeaderButton from "../components/AppHeaderButton";

function AccountScreen(props) {

    const {user,setUser} =useContext(AuthContext)
    return <AppScreen>
        <AppHeaderButton/>
        <AppHeader/>
        <AppAddBanner/>
        <View style={{flexGrow:2,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.6} onPress={() =>setUser(null)} style={{elevation:8}}>
                <View style={{padding:20,backgroundColor:"#EE7070",justifyContent:'center',alignItems:'center',borderRadius:15}} >
                    <FontAwesome name="power-off" size={24} color="#fff" />
                    <Text style={{color:colors.white,fontSize:15,fontWeight:'bold'}}>Log Out</Text>
                </View>
            </TouchableOpacity>

        </View>
    </AppScreen>
}

export default AccountScreen;
