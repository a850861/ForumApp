import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback, row } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
const Signup_AccountCreated = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <View style={row}>
        <Text style={formHead2}>Account created sucessfully</Text>
      </View>
      <Text style={formbtn} onPress={()=> navigation.navigate('Login')}>Let's Roll</Text>
   
    </View>
  )
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})