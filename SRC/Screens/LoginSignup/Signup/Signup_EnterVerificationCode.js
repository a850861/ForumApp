import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const Signup_EnterVerificationCode = ({navigation,route}) => {
  const {useremail,userVerificationCode}=route.params
  console.log(useremail,userVerificationCode)
  const [VerificationCode,setVerificationCode]=useState('')
  const handleVerificationCode=()=>{
    if(VerificationCode!=userVerificationCode){
      alert('Invalid Verification Code')
    }
    else if(VerificationCode==userVerificationCode){
      alert('Verification Code Matched')
    navigation.navigate('Signup_EnterUsername',{
      email:useremail
    })

    }
    else{
      alert('Please Try Again')
    }

  }
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
      <Icon name="arrow-left" size={20} color="gray"/>  
        <Text style={{
          color:'gray',
          fontSize:16,
          marginLeft:5,
          fontWeight:'bold',
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter 6-Digit Code'style={fromInput}
      onChangeText={(text)=>setVerificationCode(text)}
      />
      <Text style={formbtn} onPress={()=> handleVerificationCode()}>Next</Text>
    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})