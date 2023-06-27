import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const ChoosePassword = ({navigation,route}) => {
  const {email}=route.params
  const [password,setpassword]=useState('')
  const [confirmpassword,setconfirmpassword]=useState('')
  const [loading,setLoading]=useState(false)
  const handlePassword=()=>{
    if(password==''||confirmpassword==''){
      alert('Please enter password')
    }
    else if(password!=confirmpassword){
      alert('Password do not match')

    }
    // navigation.navigate('AccountRecovered')
    else{
      setLoading(true)
      fetch('http://10.0.2.2:3000/resetpassword',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:email,password:password})
      })
      .then(res=>res.json()).then(
        data=>{
          if(data.message==="Password Changed Successfully"){
            setLoading(false)
            alert(data.message)
            navigation.navigate('Login')


        }
        else{
          setLoading(false)
          alert('Something went wrong')
        }
      }
      ).catch(err=>{
        setLoading(false);
        alert(err)
      })

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
      onChangeText={(text)=>setpassword(text)}/>
      <TextInput placeholder='Confirm password'style={fromInput} secureTextEntry
      onChangeText={(text)=>setconfirmpassword(text)}
      />
      {
        loading?
        <ActivityIndicator color={'white'} size={'large'}/>
        :
        <Text style={formbtn} onPress={()=> handlePassword()}>Next</Text>
      }
    </View>
  )
}

export default ChoosePassword

const styles = StyleSheet.create({})