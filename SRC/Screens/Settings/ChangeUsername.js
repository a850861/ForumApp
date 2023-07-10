import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangeUsername = ({navigation}) => {
//   const {email}=route.params
  const [username,setUsername]=useState('')
  const [loading,setLoading]=useState(false)
  const handleUsername=()=>{
    if(username=='')
    {
      alert('Please enter username')
    }
    else{
      setLoading(true)
      AsyncStorage.getItem('user')
      .then(
        data=>{
            fetch('http://10.0.2.2:3000/setusername',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email:JSON.parse(data).user.email,
                    username:username})
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.message==="Username Updated Successfully"){
                    setLoading(false)
                    alert('Username has been set successfully')
                    navigation.navigate('Settings1')
                }
                else if(data.message==="Invalid Credentials"){
                    alert('Invalid Credentials')
                    setLoading(false)
                    AsyncStorage.removeItem('user')
                    navigation.navigate('Login')
                    
                }
                else{
                    setLoading(false)
                    alert('Username not available')
    
                }

            }) .catch(err=>{
                alert('Server Error')
                setLoading(false)
              })
            
        }
      )
     
     
    }
    // navigation.navigate('Signup_ChoosePassword')
  }
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("EditProfile")} style={goback}>
      <Icon name="arrow-left" size={20} color="gray"/>  
        <Text style={{
          color:'gray',
          fontSize:16,
          marginLeft:5,
          fontWeight:'bold',
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput placeholder='Enter a username'style={fromInput}
      onChangeText={(text)=>setUsername(text)}
      />
      {
        loading?
        <ActivityIndicator/>
        :
        <Text style={formbtn} onPress={()=> handleUsername()}>Next</Text>
      }

    </View>
  )
}

export default ChangeUsername





const styles = StyleSheet.create({})