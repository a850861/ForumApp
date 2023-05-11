import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
const Signup_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter 6-Digit Code'style={fromInput}/>
      <Text style={formbtn} onPress={()=> navigation.navigate('Signup_EnterUsername')}>Next</Text>
    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})