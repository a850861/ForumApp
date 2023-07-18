import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { conatinerFull, goback } from '../../CommonCss/pagecss'
import { formHead2, formHead3, formbtn, fromInput } from '../../CommonCss/formcss'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../../Firebase/Config'
import { launchImageLibrary} from 'react-native-image-picker';


const AddPost = ({navigation}) => {
//   const {email}=route.params
  const [postdescription,setPostDescription]=useState('')
  const [loading1,setLoading1]=useState(false)
  const [loading2,setLoading2]=useState(false)
  const [post,setPost]=useState('')
  const pickImage=async ()=>{
    setLoading1(true)
    let result=launchImageLibrary({
       selectionLimit:0,
        mediaType:'photo',
        includeBase64:false,
        
        
    })
   
    // console.log((await result).assets[0].uri)
    
   if(!(await result).didCancel){
    const source={uri:(await result).assets[0].uri}
 
    const response=await fetch((await result).assets[0].uri)
    const blob=await response.blob()
    const filename=(await result).assets[0].fileName
    const ref=firebase.storage().ref().child(filename)
    const snapshot=await ref.put(blob)
    const url= await snapshot.ref.getDownloadURL()
    setLoading1(false)
    setPost(url)
    return url
   }
   else{
    setLoading1(false)
    setPost(null)
    
   
   }

  }
  const handleUpload=()=>{
   if(post!=null&&post!=''){
    AsyncStorage.getItem('user')
    .then(data=>{
        setLoading2(true)
        fetch('http://10.0.2.2:3000/addpost',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:JSON.parse(data).user.email,
                postdescription:postdescription,
                post:post
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.message==="Post added successfully"){
                alert('Post added successfully')
                setLoading2(false)
                navigation.navigate('My_UserProfile')
            }
            else{
                alert('S ')
                setLoading2(false)
            }
        })
    })

   }
   else{
    alert('Please select an image')
   }
    
    }
    // navigation.navigate('Signup_ChoosePassword')ß
  return (
    <View style={conatinerFull}>
      <TouchableOpacity onPress={()=> navigation.navigate("My_UserProfile")} style={goback}>
      <Icon name="arrow-left" size={20} color="gray"/>  
        <Text style={{
          color:'gray',
          fontSize:16,
          marginLeft:5,
          fontWeight:'bold',
        }
        }>Go back</Text>
      </TouchableOpacity>
      {
        loading1?<ActivityIndicator size={'large'} color={'white'}/>:
        <>
        <Text style={formHead2}>Add New Post</Text>
        {
          post?
          <TouchableOpacity onPress={()=>
          pickImage()}>
            <Image source={{uri:post}} style={{
                width:200,
                height:200,
                marginVertical:10
            }}/>
          </TouchableOpacity>
          :
          <Text style={styles.addpost}
          onPress={()=>pickImage()}
          >Click here to select a new post</Text>

        }
        </>
      }
      <Text style={formHead2}>Enter Description</Text>
      <TextInput placeholder='Enter new description'style={fromInput}
      onChangeText={(text)=>setPostDescription(text)}
      multiline={true}
      numberOfLines={5}
      />
      {
        loading2?
        <ActivityIndicator size={'large'} color={'white'}/>
        :
        <Text style={formbtn} onPress={()=> handleUpload()}>Save</Text>
      }

    </View>
  )
}

export default AddPost









const styles = StyleSheet.create({
    addpost:{
        fontSize:20,
        fontWeight:'100',
        color:'white',
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:50,
        width:'80%',
        textAlign:'center',
        marginVertical:20,
    }
})



