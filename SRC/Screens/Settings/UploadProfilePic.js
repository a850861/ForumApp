import {firebase} from '../../Firebase/Config'
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'

const UploadProfilePic= ({navigation}) => {
//   const {email}=route.params
  const [image,setImage]=useState(null)
  const [loading,setLoading]=useState(false)
  const pickImage=async ()=>{
    let result=launchImageLibrary({
       selectionLimit:0,
        mediaType:'photo',
        includeBase64:false,
        
        
    })
   
    // console.log((await result).assets[0].uri)
    
   if(!(await result).didCancel){
    const source={uri:(await result).assets[0].uri}
    setImage(source)
    const response=await fetch((await result).assets[0].uri)
    const blob=await response.blob()
    const filename=(await result).assets[0].fileName
    const ref=firebase.storage().ref().child(filename)
    const snapshot=await ref.put(blob)
    const url= await snapshot.ref.getDownloadURL()
    console.log(url)
    return url
   }
   else{
    return null
   
   }

  }
  const handleUpload=()=>{
    // pickImage()
    AsyncStorage.getItem('user').then((data)=>{
        setLoading(true)
        pickImage().then(url=>{
            if(url){
                fetch('http://10.0.2.2:3000/setprofilepic',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({email:JSON.parse(data).user.email,
                    profilepic:url
                })
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.message==="Profile pic updated successfully"){
                        setLoading(false)
                        alert('Profile picture updated successfully')
                        navigation.navigate('Settings1')

                    }
                    else if(data.message==="Invalid Credentials")
                    {
                        alert("Invalid Credentials")
                        setLoading(false)
                        navigation.navigate('Login')
                    }
                    else{
                        alert('Please select an image')
                        setLoading(false)
                    }
                  
                })

            }
            else{
                alert('Please select an image')
                setLoading(false)
            }
        })
    })
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
      <Text style={formHead2}>Choose a profile</Text>
     
      {
        loading?
        <ActivityIndicator size={'large'} color={'white'}/>
        :
        <Text style={formbtn} onPress={()=> handleUpload()}>Upload</Text>
      }

    </View>
  )
}

export default UploadProfilePic









const styles = StyleSheet.create({})


