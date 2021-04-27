import React from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import AppHeader from "../components/AppHeader";
import AppAddBanner from "../components/AppAddBanner";
import AppMainGrid from "../components/AppMainGrid";
import BalanceCard from "../components/BalanceCard";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {colors} from "../utils/config";
import AppHeaderButton from "../components/AppHeaderButton";

function GiftScreen(props) {
    return <AppScreen>
        <AppHeaderButton/>
        <AppHeader/>
        <ScrollView style={{flexGrow: 2,paddingHorizontal:10}}>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 25, color: colors.white}}>Gift Data</Text>
                <Text style={{fontSize: 14, color: colors.white, fontWeight: 'bold'}}>To Friend or Family</Text>
            </View>
            <AppTextInput
                fieldName="Enter Recipient Number"
                autoCapitalize="none"
                maxLength={12}
                keyboardType={"numeric"}
                autoCorrect={false}/>
            <AppTextInput
                fieldName="Enter Gift Amount"
                autoCapitalize="none"
                keyboardType={"numeric"}
                maxLength={12}
                autoCorrect={false}/>
            <View style={styles.btnContainer}>
                <AppButton width='50%' text="Submit" onPress={() => {
                }} bgColor={colors.primary}/>
            </View>
        </ScrollView>


    </AppScreen>

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius:15,
        marginBottom: 20,
        elevation:10,
        backgroundColor: colors.secondary

    },
    btnContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },


})

export default GiftScreen;
