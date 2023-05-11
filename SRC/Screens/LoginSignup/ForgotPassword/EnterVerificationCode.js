import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formbtn, fromInput } from '../../../CommonCss/formcss'
const EnterVerificationCode = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter 6-Digit Code'style={fromInput}/>
      <Text style={formbtn} onPress={()=> navigation.navigate('ChoosePassword')}>Next</Text>
    </View>
  )
}

export default EnterVerificationCode

const styles = StyleSheet.create({})