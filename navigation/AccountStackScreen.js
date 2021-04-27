import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";


const Stack = createStackNavigator()

function AccountStackScreen(props) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Account" component={AccountScreen}/>
    </Stack.Navigator>
}

export default AccountStackScreen;
