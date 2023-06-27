import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, hr80 } from '../../../CommonCss/pagecss'
import { formHead, formTextLinkRight, formbtn, fromInput } from '../../../CommonCss/formcss'

const Login = ({navigation}) => {
  const [password,setpassword]=useState('')
  const [email,setEmail]=useState('')
  const [loading,setLoading]=useState(false)
  const handleLogin=()=>{
    // navigation.navigate('Mainpage')
    if(email==''||password=='')
    {
      alert('Please enter all the details')
    }
    else{
      setLoading(true)
      fetch('http://10.0.2.2:3000/signin',{
        method:'POSt',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:email,password:password})
      }).then(res=>res.json()).then(data=>{
        if(data.message=="Successfully Signed In"){
          setLoading(false)
          alert(data.message)
          navigation.navigate('Mainpage',{
            data
          })
          


        }
        else{
          alert(data.error)
          setLoading(false)
        }
      }

      ).catch(err=>{
        setLoading(false)
        alert(err)
      })
    }

  }
  return (
    <View style={conatinerFull}>
      <Text style={formHead}>Login</Text>
      <TextInput placeholder='Enter Your Email' style={fromInput}
      onChangeText={(text)=>setEmail(text)}/>
      <TextInput placeholder='Enter Your Password' style={fromInput} secureTextEntry={true}
      onChangeText={(text)=>setpassword(text)}/>
      <Text style={formTextLinkRight} onPress={()=>navigation.navigate('EnterEmail')}>Forgot Password?</Text>
      {
        loading?
        <ActivityIndicator color={'white'} size={'large'}/>
        :
        <Text style={formbtn} onPress={()=> handleLogin()}>Submit</Text>
      }
      <View style={hr80}></View>
      <Text style={formTextLinkRight}>Don't have an account<Text style={{color:'white'}} onPress={()=>navigation.navigate('Signup_EnterEmail')}>SignUp</Text>
      </Text>
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})