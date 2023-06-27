import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../../CommonCss/pagecss'
import { formHead2, formbtn, fromInput } from '../../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
const EnterEmail = ({navigation}) => {
  const [email,setEmail]=useState('');
  const [loading,setloading]=useState(false);
  const handleEmail=()=>{
    if(email==''){
      alert("Please enter email")
    }
    else{
      setloading(true)
      fetch('http://10.0.2.2:3000/verifyfp',{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:email})
      })
      .then(res=>res.json()).then(data=>{
   
        if(data.error==="Invalid Credentials"){
          alert("Invalid Credentials")
          setloading(false)

        }
        
        else if(data.message==="Verification Code Sent to your Email"){
          setloading(false)
          alert(data.message)
          navigation.navigate('EnterVerificationCode',{
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
      <Icon name="arrow-left" size={20} color="gray" />
        <Text style={{
          color:'gray',
          fontSize:16,
          marginLeft:5,
          fontWeight:'bold',
        }
        }>Go back</Text>
      </TouchableOpacity>
      <Text style={formHead2}>Verify Your Email</Text>
      <TextInput placeholder='Enter Your Email'style={fromInput}
      onChangeText={(text)=>setEmail(text)}/>
      {
        loading?
        <ActivityIndicator size={"large"} color={'white'}/>
        :
      <Text style={formbtn} onPress={()=> handleEmail()}>Next</Text>

      }
    </View>
  )
}

export default EnterEmail

const styles = StyleSheet.create({})