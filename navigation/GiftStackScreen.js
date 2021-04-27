import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import GiftScreen from "../screens/GiftScreen";

const Stack = createStackNavigator()

function GiftStackScreen(props) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Gift" component={GiftScreen}/>
    </Stack.Navigator>
}

export default GiftStackScreen;
