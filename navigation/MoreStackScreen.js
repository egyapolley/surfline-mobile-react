import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";

const Stack = createStackNavigator()

function MoreStackScreen(props) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="More" component={MoreScreen}/>
    </Stack.Navigator>
}

export default MoreStackScreen;
