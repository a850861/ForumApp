import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const ChoosePassword = ({navigation}) => {
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
      <Text style={formHead2}>Choose a strong password</Text>
      <TextInput placeholder='Enter password'style={fromInput} secureTextEntry/>
      <TextInput placeholder='Confirm password'style={fromInput} secureTextEntry/>
      <Text style={formbtn} onPress={()=> navigation.navigate('AccountRecovered')}>Next</Text>
    </View>
  )
}

export default ChoosePassword

const styles = StyleSheet.create({})