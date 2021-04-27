import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import HomeStackScreen from "./HomeStackScreen";
import GiftStackScreen from "./GiftStackScreen";
import BuyStackScreen from "./BuyStackScreen";
import MoreStackScreen from "./MoreStackScreen";
import AccountStackScreen from "./AccountStackScreen";


const Tab = createBottomTabNavigator();

function AppNavigation(props) {

    return <Tab.Navigator tabBarOptions={{

        style: {
            height: 60
        },


        labelStyle: {
            fontSize: 12,
            paddingBottom: 3
        }
    }}>
        <Tab.Screen name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name="ios-home" size={size} color={color}/>
                    }}/>
        <Tab.Screen name="Gift"
                    component={GiftStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <FontAwesome name="gift" size={size} color={color}/>
                    }}/>
        <Tab.Screen name="Buy"
                    component={BuyStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name="cart" size={size} color={color}/>
                    }}
        />
        <Tab.Screen name="More"
                    component={MoreStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="dots-horizontal" size={size}
                                                                               color={color}/>
                    }}
        />
        <Tab.Screen name="Account"
                    component={AccountStackScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" size={size}
                                                                               color={color}/>
                    }}
        />
    </Tab.Navigator>
}

export default AppNavigation;
