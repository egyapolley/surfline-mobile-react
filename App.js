import React, {useState,useContext} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import {SafeAreaProvider} from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import AuthContext from "./context/AuthContext";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {

    const [user, setUser] =useState(null)
    const [isReady, setIsReady] = useState(false)

    const loadFont =  () => {
        return Font.loadAsync({
            Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
            RobotoBold: require('./assets/fonts/Roboto-Bold.ttf')
        })

    }

    if (!isReady) {
        return <AppLoading
            startAsync={loadFont}
            onFinish={() => setIsReady(true)}
            onError={error => console.log("Error loading " + error)}
        />
    }



    return <AuthContext.Provider value={{user,setUser}}>
        <NavigationContainer>
            {user?<AppNavigation/>:<AuthNavigator/>}
        </NavigationContainer>
    </AuthContext.Provider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
