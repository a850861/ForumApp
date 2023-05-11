import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formbtn, fromInput } from '../../../CommonCss/formcss'
const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter Your Email'style={fromInput}/>
      <Text style={formbtn} onPress={()=> navigation.navigate('Signup_EnterVerificationCode')}>Next</Text>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})