import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const Signup_ChoosePassword = ({navigation,route}) => {
  const {email,username}=route.params
  const [password,setPassword]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  const [loading,setLoading]=useState(false)
  const handlePassword=()=>{
    // navigation.navigate('Signup_AccountCreated')
    if(password==''|| confirmpassword==''){
      alert("Please enter password")

    }
    else if(password!=confirmpassword){
      alert("Password dores not match")

    }
    else{
      setLoading(true)
      fetch('http://10.0.2.2:3000/signup',{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          username:username,
          password:password
        })
      })
      .then(res=>res.json()).then(
        data=>{
          if(data.message==="User Registered Succesfully")
          {
            setLoading(false)
            alert(data.message);
            navigation.navigate('Login')
            
          }
          else{
            setLoading(false)
            alert("Please try again")
          }
        }
      )
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
      <Text style={formHead2}>Choose a strong password</Text>
      <TextInput placeholder='Enter password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setPassword(text)}
      
      />
      <TextInput placeholder='Confirm password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setConfirmpassword(text)}
      />
      
        <Text style={formbtn} onPress={()=>handlePassword() }>Next</Text>
      
    </View>
  )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})