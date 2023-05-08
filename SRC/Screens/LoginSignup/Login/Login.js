import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { conatinerFull, hr80 } from '../../../CommonCss/pagecss'
import { formHead, formTextLinkRight, formbtn, fromInput } from '../../../CommonCss/formcss'

const Login = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <Text style={formHead}>Login</Text>
      <TextInput placeholder='Enter Your Email' style={fromInput}/>
      <TextInput placeholder='Enter Your Password' style={fromInput} secureTextEntry={true}/>
      <Text style={formTextLinkRight} onPress={()=>navigation.navigate('EnterEmail')}>Forgot Password?</Text>
      <Text style={formbtn} onPress={()=> navigation.navigate('MainPage')}>Submit</Text>
      <View style={hr80}></View>
      <Text style={formTextLinkRight}>Don't have an account<Text style={{color:'white'}} onPress={()=>navigation.navigate('Signup_EnterEmail')}>SignUp</Text>
      </Text>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})