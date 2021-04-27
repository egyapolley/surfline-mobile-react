import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator()

function HomeStackScreen(props) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
}

export default HomeStackScreen;
