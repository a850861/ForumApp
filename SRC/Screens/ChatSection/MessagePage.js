import { StyleSheet, Text, View,TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import nopic from '../../../assets/nopic.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';



const MessagePage = ({navigation,route}) => {
    const {fuseremail}=route.params
    const [ouruserdata,setOuruserdata]=useState(null)
    const [fuserdata,setFuserdata]=useState(null)
    useEffect(()=>{
        // console.log(fuseremail)
        loaddata()
    },[])

    const loaddata=async()=>{
        AsyncStorage.getItem('user').then(async (value)=>{
            // console.log(data)
            // setUserdata(JSON.parse(data))
            fetch('http://10.0.2.2:3000/userdata',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + JSON.parse(value).token
              },
              body:JSON.stringify({email:JSON.parse(value).user.email})
              })
              .then(res=>res.json())
              .then( data=>{
                    
                    if(data.message=="User Found"){
                        // console.log(data)
                setOuruserdata(data.user)
                fetch('http://10.0.2.2:3000/otheruserdata',{
                    method:'POST',
                    headers:{
                        'Content-Type':"application/json"
                    },
                    body:JSON.stringify({email:fuseremail})
                }).then(res=>res.json())
                .then(data=>{
                    
                    if(data.message=="User Found")
                    {
                        setFuserdata(data.user)
                    }
                    else{
                        alert('User Not Found')
                        navigation.navigate('SearchUserPage')
                    }
                })
                .catch(err=>{
                    alert('Something Went Wrong')
                    navigation.navigate('SearchUserPage')
            
                })
                
                    }
                    else{
                      alert('Login Again')
                      navigation.navigate('Login')
                    }
        
              }).catch(err=>{
                navigation.navigate('Login')
            })
            })
            .catch(err=>{
              navigation.navigate('Login')
            })
    }

  return (
    <View style={styles.container}>
        <View style={styles.s1}>
        <TouchableOpacity onPress={()=> navigation.navigate("All_Chats")} style={styles.goback}>
      <Icon name="arrow-left" size={20} color="gray"/>  
      </TouchableOpacity>
      {
        fuserdata?.profilepic?
        <Image source={{uri:fuserdata?.profilepic}} style={styles.profilepic} />
        :
        <Image source={nopic} style={styles.profilepic} />

      }
      <Text style={styles.username}>{fuserdata?.username}</Text>
        </View>
        <View style={styles.sbottom}>
        <TextInput style={styles.sbottominput} placeholder='Type a message' placeholderTextColor={'white'}/>
      <TouchableOpacity style={styles.sbottombtn}>
        <Icons name="send" size={24} color='white'/>
      </TouchableOpacity>
        </View>
     
    </View>
  )
}

export default MessagePage

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black'
    },
    profilepic:{
        marginLeft:8,
        width:40,
        height:40,
        borderRadius:25
    },
    username:{
        color:'white',
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold'
    },
    s1:{
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#111111',
        padding:10
    },
    sbottom:{
        width:'100%',
        height:50,
        backgroundColor:'#111111',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        position:'absolute',
        bottom:0,
        borderRadius:10
    },
    sbottominput:{
        width:'80%',
        height:40,
        fontSize:17,
        color:'white'
    }
})