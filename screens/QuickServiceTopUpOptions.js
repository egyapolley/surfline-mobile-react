import React from 'react';
import {FlatList, Platform, ScrollView, StyleSheet, View} from "react-native";
import AppScreen from "../components/AppScreen";
import Logo from "../components/Logo";
import QuickServiceCard from "../components/QuickServiceCard";
import Constants from "expo-constants/src/Constants";

function QuickServiceTopUpOptions({navigation}) {



    return <AppScreen>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo text="Quick Service" text2="TopUp"/>
                </View>
                    <FlatList numColumns={2}
                              columnWrapperStyle={{
                                  flex:1,
                                  padding:20,
                                  justifyContent:'center',
                                  alignItems:'center'
                              }}
                              data={[
                                  {label: "Buy Data Bundle", value: "Buy Bundle", icon: "cart-arrow-down"},
                                  {label: "Load Scratch Card", value: "Load Scratch", icon: "ticket-percent"}
                              ]}
                              keyExtractor={((item) => item.value.toString())}
                              renderItem={({item}) => <QuickServiceCard item={item} onPress={(itemSelected) => {
                                  if (itemSelected.value === 'Buy Bundle'){
                                      navigation.navigate("Quick Service TopUpMain")
                                  }
                                  if (itemSelected.value === 'Load Scratch'){
                                      navigation.navigate("Quick Service TopUpVoucher")
                                  }

                              }}/>}/>
            </View>
    </AppScreen>
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,

    },
    btnContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
})

export default QuickServiceTopUpOptions;
