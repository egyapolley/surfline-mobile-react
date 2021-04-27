import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import SignOTPScreen from "../screens/SignOTPScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ForgetPassword2Screen from "../screens/ForgetPassword2Screen";
import QuickServiceTopUpScreen from "../screens/QuickServiceTopUpScreen";
import QuickServiceTopUpCard from "../screens/QuickServiceTopUpCard";
import QuickServiceTopUpMoMo from "../screens/QuickServiceTopUpMoMo";
import QuickServiceTopUpVoucher from "../screens/QuickServiceTopUpVoucher";
import QuickServiceTopUpOptions from "../screens/QuickServiceTopUpOptions";


const Stack = createStackNavigator()

function AuthNavigator(props) {
    return <Stack.Navigator mode={"modal"} screenOptions={{
    title:""}
    }>
        <Stack.Screen name='Welcome' component={WelcomeScreen}
                      options={{headerShown:false}}/>
        <Stack.Screen name='Sign Up' component={SignUpScreen}/>
        <Stack.Screen name='Sign In' component={SignInScreen}  />
        <Stack.Screen name='Sign In OTP' component={SignOTPScreen}/>
        <Stack.Screen name='Forgot Password' component={ForgotPasswordScreen}  />
        <Stack.Screen name='Forgot Password2' component={ForgetPassword2Screen}  />
        <Stack.Screen name='Quick Service TopUpOptions' component={QuickServiceTopUpOptions}  />
        <Stack.Screen name='Quick Service TopUpMain' component={QuickServiceTopUpScreen}  />
        <Stack.Screen name='Quick Service TopUpCard' component={QuickServiceTopUpCard}  />
        <Stack.Screen name='Quick Service TopUpMoMo' component={QuickServiceTopUpMoMo}  />
        <Stack.Screen name='Quick Service TopUpVoucher' component={QuickServiceTopUpVoucher}  />
    </Stack.Navigator>
}

export default AuthNavigator;
