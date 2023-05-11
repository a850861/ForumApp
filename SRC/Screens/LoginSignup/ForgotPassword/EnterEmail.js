import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formbtn, fromInput } from '../../../CommonCss/formcss'
const EnterEmail = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>Verify Your Email</Text>
      <TextInput placeholder='Enter Your Email'style={fromInput}/>
      <Text style={formbtn} onPress={()=> navigation.navigate('EnterVerificationCode')}>Next</Text>
    </View>
  )
}

export default EnterEmail

const styles = StyleSheet.create({})