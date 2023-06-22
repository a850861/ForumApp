import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const Signup_EnterEmail = ({navigation}) => {
  const [email,setEmail]=useState('')
  const [loading,setLoading]=useState(false)
  const handleEmail=()=>{
    setLoading(true)
    // navigation.navigate('Signup_EnterVerificationCode')
    if(email==''){
      alert('Please enter email')
      setLoading(false)
    }
    else{
      setLoading(true)
      fetch('http://10.0.2.2:3000/verify',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email
        })
      })
      .then(res=>res.json()).then(
        data=>{
          if(data.error==="Invalid Credentials"){
            alert("Invalid Credentials")
            setLoading(false)
          }
          else if(data.message==="Verification Code Sent to your Email"){
            setLoading(false)
            alert(data.message)
            navigation.navigate('Signup_EnterVerificationCode',{
              useremail:data.email,
              userVerificationCode:data.VerificationCode
            })


          }

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
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter Your Email'style={fromInput}
      onChangeText={(text)=>{

      
      setEmail(text)
      }
    }
      />
      {
        loading?
        <ActivityIndicator size={'large'} color={'white'}/>

        :
        <Text style={formbtn} onPress={()=>handleEmail() }>Next</Text>
      }
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})