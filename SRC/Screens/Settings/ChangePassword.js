import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../CommonCss/pagecss'
import { formHead2, formHead3, formTextLinkRight, formbtn, fromInput } from '../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangePassword = ({navigation}) => {

  const [oldpassword,setOldpassword]=useState('')
  const [newpassword,setNewpassword]=useState('')
  const [confirmnewpassword,setconfirmnewpassword]=useState('')
  const [loading,setLoading]=useState(false)
  const handlePasswordChange=()=>{
    if(oldpassword===''||newpassword===''||confirmnewpassword===''){
      alert('Please fill all the fileds')
    }
    else if(newpassword!=confirmnewpassword){
      alert("New password and confirm password must be same")
    }
    else{
      setLoading(true)
      AsyncStorage.getItem('user').then(data=>{
        fetch('http://10.0.2.2:3000/changepassword',{
          method:'POST',
          headers:{
            'Content-Type':"application/json",
            'Authorization':'Bearer '+JSON.parse(data).token
          },
          body:JSON.stringify({
            oldpassword:oldpassword,
            newpassword:newpassword,
            email:JSON.parse(data).user.email
          })
        })
        .then(res=>res.json())
      .then(data=>{
        if(data.message==='Password Changed Successfully'){
          alert('Password Changed Successfully')
          setLoading(false)
          AsyncStorage.removeItem('user')
          navigation.navigate('Login')
        }
        else{
          alert('Wrong Password')
          setLoading(false)
        }
      })

      })
      
    }

  }
  
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("Settings1")} style={goback}>
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
      <TextInput placeholder='Enter Old password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setOldpassword(text)}/>
      <TextInput placeholder='Enter New password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setNewpassword(text)}/>
      <TextInput placeholder='Confirm New password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setconfirmnewpassword(text)}
      />
            <Text style={formTextLinkRight} onPress={()=>navigation.navigate('EnterEmail')}>Forgot Password?</Text>

      {
        loading?
        <ActivityIndicator color={'white'} size={'large'}/>
        :
        <Text style={formbtn} onPress={()=> handlePasswordChange()}>Next</Text>
      }
    </View>
    
  )
}

export default ChangePassword



 

const styles = StyleSheet.create({})