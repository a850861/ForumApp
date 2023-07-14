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
import SearchUserPage from './SRC/Screens/Mainpage/SearchUserPage';
import Notification from './SRC/Screens/Mainpage/Notification';
import My_UserProfile from './SRC/Screens/Profile/My_UserProfile';
import All_Chats from './SRC/Screens/ChatSection/All_Chats';
import Settings1 from './SRC/Screens/Settings/Settings1';
import ChangePassword from './SRC/Screens/Settings/ChangePassword';
import EditProfile from './SRC/Screens/Settings/EditProfile';
import ChangeUsername from './SRC/Screens/Settings/ChangeUsername';
import ChangeDescription from './SRC/Screens/Settings/ChangeDescription';
import UploadProfilePic from './SRC/Screens/Settings/UploadProfilePic';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {headerShown: false,
          animation:'slide_from_right'
      }}>
        <Stack.Screen name="Mainpage" component={Mainpage} />
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
         <Stack.Screen name="All_Chats" component={All_Chats} 
         options={{
          animation:'slide_from_bottom'
         }}/>
         
         <Stack.Screen name="SearchUserPage" component={SearchUserPage} 
         options={{
          animation:'slide_from_bottom'
         }}/>
         <Stack.Screen name="NotificationPage" component={Notification}/>
         <Stack.Screen name="My_UserProfile" component={My_UserProfile}/>
         <Stack.Screen name='Settings1' component={Settings1}/>
         <Stack.Screen name='ChangePassword' component={ChangePassword}/>
         <Stack.Screen name='EditProfile' component={EditProfile}/>
         <Stack.Screen name='ChangeUsername' component={ChangeUsername}/>
         <Stack.Screen name='ChangeDescription' component={ChangeDescription}/>
         <Stack.Screen name='UploadProfilePic' component={UploadProfilePic}/>




   
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})