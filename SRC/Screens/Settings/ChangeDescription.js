import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangeDescription = ({navigation}) => {
//   const {email}=route.params
  const [description,setDescription]=useState('')
  const [loading,setLoading]=useState(false)
  const handleDescription=()=>{
    if(description=='')
    {
      alert('Please enter description')
    }
    else{
      setLoading(true)
      AsyncStorage.getItem('user')
      .then(data=>{
      fetch('http://10.0.2.2:3000/setdescription',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email:JSON.parse(data).user.email,
            description:description})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.message==="Description Updated Successfully"){
            setLoading(false)
            alert('Description has been set successfully')
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
            alert('Please Try Again')

        }


    }).catch(err=>{
        alert('Something went wrong')
        setLoading(false)
    }
        )
})
.catch(err=>{
    alert('Something went wrong')
    setLoading(false)
})
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
      <Text style={formHead2}>Enter Description</Text>
      <TextInput placeholder='Enter new description'style={fromInput}
      onChangeText={(text)=>setDescription(text)}
      multiline={true}
      numberOfLines={5}
      />
      {
        loading?
        <ActivityIndicator/>
        :
        <Text style={formbtn} onPress={()=> handleDescription()}>Set Description</Text>
      }

    </View>
  )
}

export default ChangeDescription









const styles = StyleSheet.create({})