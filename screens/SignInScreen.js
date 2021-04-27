import React, {useContext} from 'react';
import AppScreen from "../components/AppScreen";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard, ScrollView
} from "react-native";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {colors} from "../utils/config"
import {Platform} from "react-native";
import AuthContext from "../context/AuthContext";

function SignInScreen({navigation}) {

    const {user,setUser} = useContext(AuthContext);

    return <AppScreen>
        <ScrollView style={{flex:1}}>
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
                <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Logo text="Welcome, Sign In"/>
                        </View>
                        <AppTextInput
                            fieldName="Primary Contact Number"
                            autoCapitalize="none"
                            keyboardType={"numeric"}
                            maxLength={12}
                            autoCorrect={false}/>
                        <AppTextInput
                            fieldName="Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            maxLength={12}
                            autoCorrect={false}/>
                        <View style={styles.forgetContainer}>
                            <TouchableWithoutFeedback onPress={() =>navigation.navigate("Forgot Password")}>
                                <Text style={styles.forgotPasswd}>Forgot Password?</Text>
                            </TouchableWithoutFeedback>

                            <View style={styles.textContainer} >
                                <TouchableWithoutFeedback onPress={() =>navigation.navigate("Sign In OTP")}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:colors.charcoal,fontSize:16,marginRight:5}}>Sign in with</Text>
                                        <Text style={{color:colors.secondary,fontSize:16,fontWeight:'bold'}}>OTP</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() =>{navigation.navigate("Forgot Password2")}}>
                                    <Text style={{color:colors.secondary,fontWeight:'bold',fontSize:16}}>Reset</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={styles.btnContainer}>
                            <AppButton width='50%' text="Sign In" onPress={() =>{setUser({name:'Janelle Dominic'})}} bgColor={colors.primary}/>
                        </View>
                        <TouchableWithoutFeedback onPress={() =>navigation.navigate("Quick Service TopUpOptions")}>
                            <View style={{marginTop:50, alignSelf:'flex-start'}}>
                                <Text style={{color:colors.secondary,fontWeight:'bold'}}>Access Quick Service</Text>
                                <Text style={{paddingVertical:2}}>Top up or check balance</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>

    </AppScreen>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50,

    },
    btnContainer:{
        marginTop: 30,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    keyboardView:{
        flex:1
    },
    forgetContainer:{
        marginVertical: 30,
        width:'100%'
    },
    forgotPasswd:{
        width:'100%',
        fontWeight:'bold',
        fontSize:16,
        color:colors.secondary,
        fontStyle:'italic'
    },
    textContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
})

export default SignInScreen;
