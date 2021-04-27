import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BuyTabScreen from "../screens/BuyTabScreen";

const Stack = createStackNavigator()

function BuyStackScreen(props) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Buy" component={BuyTabScreen}/>
    </Stack.Navigator>
}

export default BuyStackScreen;
