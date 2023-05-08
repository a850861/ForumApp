import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './SRC/Screens/LoginSignup/Login/Login';
import Signup_AccountCreated from './SRC/Screens/LoginSignup/Signup/Signup_AccountCreated';
import Signup_ChoosePassword from './SRC/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_EnterUsername from './SRC/Screens/LoginSignup/Signup/Signup_EnterUsername';
import Signup_EnterVerificationCode from './SRC/Screens/LoginSignup/Signup/Signup_EnterVerificationCode';
import Signup_EnterEmail from './SRC/Screens/LoginSignup/Signup/Signup_EnterEmail';
import AccountRecovered from './SRC/Screens/LoginSignup/ForgotPassword/AccountRecovered';
import ChoosePassword from './SRC/Screens/LoginSignup/ForgotPassword/ChoosePassword';
import EnterEmail from './SRC/Screens/LoginSignup/ForgotPassword/EnterEmail';
import EnterVerificationCode from './SRC/Screens/LoginSignup/ForgotPassword/EnterVerificationCode';
import Mainpage from './SRC/Screens/Mainpage/Mainpage';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {headerShown: false,
          animation:'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
        <Stack.Screen name="Signup_EnterUsername" component={Signup_EnterUsername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />
        <Stack.Screen name="AccountRecovered" component={AccountRecovered} /> 
         <Stack.Screen name="ChoosePassword" component={ChoosePassword} />
         <Stack.Screen name="EnterEmail" component={EnterEmail} />
         <Stack.Screen name="EnterVerificationCode" component={EnterVerificationCode} />
         <Stack.Screen name="MainPage" component={Mainpage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})