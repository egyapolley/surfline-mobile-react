import React from 'react';
import AppScreen from "../components/AppScreen";
import AppHeader from "../components/AppHeader";
import AppAddBanner from "../components/AppAddBanner";
import AppMainGrid from "../components/AppMainGrid";
import BuyTabCard from "../components/BuyTabCard";
import {FlatList, View} from "react-native";
import AppHeaderButton from "../components/AppHeaderButton";

function BuyTabScreen({navigation}) {
    return <AppScreen>
        <AppHeaderButton/>
        <AppHeader/>
        <AppAddBanner/>
        <View style={{backgroundColor: "#f5f5f5", flexGrow: 2, padding: 10,flex:1,width:'100%'}}>
            <FlatList data={[{label: "Buy Data Bundle", icon: "wifi"},
                {label: "Load Scratch Card", icon: "credit-card"},
                {label: "Recharge for Friend", icon: "slideshare"}]}
                      keyExtractor={((item, index) => index.toString())}
                      renderItem={({item}) => <BuyTabCard item={item} onPress={(itemSelected) => {
                          if (itemSelected.value === 'Buy Bundle') {
                              navigation.navigate("Quick Service TopUpMain")
                          }
                          if (itemSelected.value === 'Load Scratch') {
                              navigation.navigate("Quick Service TopUpVoucher")
                          }

                      }}/>}/>
        </View>

    </AppScreen>
}

export default BuyTabScreen;
