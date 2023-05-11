import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
const Signup_EnterUsername = ({navigation}) => {
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={goback}>
        <Text style={{
          color:'gray',
          fontSize:16,
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput placeholder='Enter a username'style={fromInput}/>
      <Text style={formbtn} onPress={()=> navigation.navigate('Signup_ChoosePassword')}>Next</Text>
    </View>
  )
}

export default Signup_EnterUsername

const styles = StyleSheet.create({})