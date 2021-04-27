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

function SignUpScreen({navigation}) {
    return <AppScreen>
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
         <ScrollView style={{flex:1}}>
             <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                 <View style={styles.container}>
                     <View style={styles.logoContainer}>
                         <Logo text="Welcome, Sign Up"/>
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
                         <AppButton width='50%' text="Sign Up" onPress={() =>{}} bgColor={colors.primary}/>
                     </View>

                     <TouchableWithoutFeedback onPress={() =>navigation.navigate("Sign In")}>
                         <View style={styles.footer}>
                             <Text style={{color:colors.charcoal,fontWeight:'bold'}
                             }>Already a User?</Text>
                             <Text style={styles.footerText}>Sign In</Text>
                         </View>
                     </TouchableWithoutFeedback>

                 </View>
             </TouchableWithoutFeedback>
         </ScrollView>

        </KeyboardAvoidingView>
    </AppScreen>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    footer:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    logoContainer:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,

    },
    btnContainer:{
        marginTop: 30,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },


    footerText:{
        marginLeft:5,
        color:colors.primary,
        borderBottomWidth:1,
        borderBottomColor:colors.primary,
        fontWeight:'bold',
        fontSize:16
    },
    keyboardView:{
        flex:1

    }
})

export default SignUpScreen;
