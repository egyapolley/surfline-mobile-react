import React, {useState} from 'react';
import AppScreen from "../components/AppScreen";
import {
    View,
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
import AppPickerWithLabel from "../components/AppPickerWithLabel";

function QuickServiceTopUpMoMo(props) {
    const [network, setNetwork] = useState("");
    return <AppScreen>
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
            <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Logo text="Quick Service" text2="TopUp with MoMo"/>
                    </View>
                    <AppPickerWithLabel label="Select Network"
                                        placeHolder="Select Network"
                                        selectedItem={network}
                                        styleProp={{marginVertical: 10}}
                                        data={[
                                            {label: "MTN GH", value: "MTN GH"},
                                            {label: "VODAFONE GH", value: "VODAFONE GH"},
                                            {label: "AIRTEL TIGO GH", value: "AIRTEL TIGO GH"}
                                        ]}
                                        onItemSelect={value => setNetwork(value.label)}/>
                    <AppTextInput
                        fieldName="Enter MoMo Number"
                        autoCapitalize="none"
                        keyboardType={"numeric"}
                        maxLength={12}
                        autoCorrect={false}/>
                    <View style={styles.btnContainer}>
                        <AppButton width='50%' text="Submit" onPress={() =>{}} bgColor={colors.primary}/>
                    </View>

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
        marginBottom:50,

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

export default QuickServiceTopUpMoMo;
