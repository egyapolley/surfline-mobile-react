import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import AppScreen from "../components/AppScreen";
import Logo from "../components/Logo";
import AppTextInput from "../components/AppTextInput";
import {colors} from "../utils/config";
import AppButton from "../components/AppButton";
import AppPickerWithLabel from "../components/AppPickerWithLabel";
import BundlePickerItem from "../components/BundlePickerItem";

const data = [
        {
            category:"All Weather",
            label: "1GB - 25GHC - 30days",
            name:'1GB',
            value: "1GB",
            price: '10',
            validity: '7days',
            subscriptionType:'one'
        },
        {
            category:"All Weather",
            label: "3GB - 25GHC - 30days",
            name:'3GB',
            value: "3GB",
            price: '10',
            validity: '15days',
            subscriptionType:'one'
        },
        {
            category:"All Weather",
            label: "5GB - 25GHC - 30days",
            name:'5GB',
            value: "5GB",
            price: '45',
            validity: '7days',
            subscriptionType:'one'
        },
        {
            category:"All Weather",
            label: "8GB - 25GHC - 30days",
            name:'8GB',
            value: "8GB",
            price: '10',
            validity: '20days',
            subscriptionType:'both'
        },
        {
            category:"Unlimited",
            label: "Unlimited - 25GHC - 30days",
            name:'Unlimited',
            value: "Unlimited",
            price: '25',
            validity: '30days',
            subscriptionType:'both'
        },
        {
            category:"Unlimited",
            label: "Unlimited Night- 25GHC - 30days",
            name:'Unlimited Night',
            value: "Unlimited Night",
            price: '25',
            validity: '30days',
            subscriptionType:'both'
        },
        {
            category:"Always ON",
            label: "Always ON Standard - 25GHC - 30days",
            name:'Always ON Standard',
            value: "AlwaysON Standard",
            price: '25',
            validity: '30days'
        },
        {
            category:"Always ON",
            label: "Always ON Super - 25GHC - 30days",
            name:'Always ON Super',
            value: "AlwaysON Super",
            price: '25',
            validity: '30days'
        },
    ]


function QuickServiceTopUpScreen({navigation}) {

    const [bundleCat, setBundleCat] = useState(Array.from(new Set(data.map(item =>item.category))))

    const [selectedBundleType, setSelectedBundleType] = useState(bundleCat[0])
    const [selectedBundle, setSelectedBundle] = useState("")
    const [selectedPaymentOption, setSelectedPaymentOption] = useState("")
    const [subscriptionType, setSubscriptionType] = useState("")
    const [hasRecurrent, setRecurrent] = useState(true)



    const loadBundle = () =>{
        if (selectedBundleType){
            return data.filter(item =>item.category === selectedBundleType)
        }
        return  []
    }






    const handleBtnClick = () =>{
        switch (selectedPaymentOption){
            case "Cash Wallet":
                break
            case "Mobile Money":
                 return navigation.navigate("Quick Service TopUpMoMo")
            case "Card Payment":
                return navigation.navigate("Quick Service TopUpCard")
        }

    }

    return <AppScreen>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
            <ScrollView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Logo text="Quick Service" text2="TopUp"/>
                        </View>
                        <AppTextInput
                            fieldName="Surfline Number"
                            autoCapitalize="none"
                            keyboardType={"numeric"}
                            maxLength={12}
                            autoCorrect={false}/>

                        <AppPickerWithLabel label="Select Package"
                                            placeHolder="Select Package"
                                            selectedItem={selectedBundleType}
                                            styleProp={{marginVertical: 10}}
                                            data={bundleCat}
                                            onItemSelect={value =>{
                                                setSelectedBundleType(value);
                                                setSelectedBundle("");
                                                setRecurrent(false)
                                            }}/>
                        <AppPickerWithLabel label="Select Bundle"
                                            selectedItem={selectedBundle}
                                            placeHolder="Select Bundle"
                                            styleProp={{marginVertical: 10}}
                                            PickerItemComponent={BundlePickerItem}
                                            data={loadBundle()}
                                            onItemSelect={value => {
                                                setSelectedBundle(value.label)
                                                if (value.subscriptionType==='both') setRecurrent(true)
                                                else setRecurrent(false)
                                            }}/>
                        {hasRecurrent && <AppPickerWithLabel label="Select Subscription Type"
                                                             selectedItem={subscriptionType}
                                                             placeHolder="Select Subscription Type"
                                                             styleProp={{marginVertical: 10}}
                                                             data={[
                                                                 {label: "OneTime", value: "OneTime"},
                                                                 {label: "AutoRenewal", value: "AutoRenewal"},
                                                             ]}
                                                             onItemSelect={value => setSubscriptionType(value.label)}/>}

                        <AppPickerWithLabel label="Select Payment Option"
                                            selectedItem={selectedPaymentOption}
                                            placeHolder="Select TopUp Option"
                                            styleProp={{marginVertical: 10}}
                                            data={[
                                                {label: "Cash Wallet", value: "Cash Wallet"},
                                                {label: "Mobile Money", value: "Mobile Money"},
                                                {label: "Card Payment", value: "Card"},
                                            ]}
                                            onItemSelect={value => setSelectedPaymentOption(value.label)}/>
                        <View style={styles.btnContainer}>
                            <AppButton width='50%' text="Next" onPress={handleBtnClick} bgColor={colors.primary}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    </AppScreen>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,

    },
    btnContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    keyboardView: {
        flex: 1
    },
})

export default QuickServiceTopUpScreen;
