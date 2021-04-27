import React from 'react';
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

function ForgetPassword2Screen(props) {
    return <AppScreen>
        <ScrollView style={{flex:1,width:'100%'}}>
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
                <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Logo text="Forgot Password"/>
                        </View>
                        <AppTextInput
                            fieldName="Primary Contact Number"
                            autoCapitalize="none"
                            keyboardType={"numeric"}
                            maxLength={12}
                            autoCorrect={false}/>
                        <AppTextInput
                            fieldName="New Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            maxLength={12}
                            autoCorrect={false}/>
                        <AppTextInput
                            fieldName="Confirm Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            maxLength={12}
                            autoCorrect={false}/>
                        <View style={styles.btnContainer}>
                            <AppButton width='50%' text="Submit" onPress={() =>{}} bgColor={colors.primary}/>
                        </View>


                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </ScrollView>

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
    }
})

export default ForgetPassword2Screen;
