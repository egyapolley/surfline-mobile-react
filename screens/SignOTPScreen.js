import React from 'react';
import AppScreen from "../components/AppScreen";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {colors} from "../utils/config"
import {Platform} from "react-native";

function SignOTPScreen({navigation}) {
    return <AppScreen>
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
            <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Logo text="Sign in with OTP"/>
                    </View>
                    <AppTextInput
                        fieldName="Primary Contact Number"
                        autoCapitalize="none"
                        keyboardType={"numeric"}
                        maxLength={12}
                        autoCorrect={false}/>
                    <AppTextInput
                        fieldName="Enter the OTP"
                        autoCapitalize="none"
                        maxLength={12}
                        autoCorrect={false}/>
                    <View style={styles.btnContainer}>
                        <AppButton width='50%' text="Submit" onPress={() =>{}} bgColor={colors.primary}/>
                    </View>
                    <TouchableWithoutFeedback onPress={() =>{navigation.navigate("Quick Service TopUpOptions")}}>
                        <View style={{marginTop:50, alignSelf:'flex-start'}}>
                            <Text style={{color:colors.secondary,fontWeight:'bold'}}>Access Quick Service</Text>
                            <Text style={{paddingVertical:2}}>Topup or check balance</Text>
                        </View>
                    </TouchableWithoutFeedback>



                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </AppScreen>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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

})

export default SignOTPScreen;
