import React from 'react';
import {Platform, StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native";
import Constants from 'expo-constants';


function AppScreen({propStyles = {}, children}) {

    return (<SafeAreaView style={styles.screen}>
            <View style={{...styles.view, ...propStyles}}>
                {children}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,

    },
    view: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:Constants.statusBarHeight



    }
})

export default AppScreen;
