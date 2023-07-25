import { StyleSheet, Text, View,TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import nopic from '../../../assets/nopic.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import io from 'socket.io-client'
const socket=io('http://192.168.0.3:3001')



const MessagePage = ({navigation,route}) => {
    const {fuseremail,fuserid}=route.params
    const [ouruserdata,setOuruserdata]=useState(null)
    const [fuserdata,setFuserdata]=useState(null)
    const [roomid,setRoomid]=useState(null)
    const [chat,setChat]=useState([''])
    useEffect(()=>{
        // console.log(fuseremail)
        
        loaddata()

        
    },[])
    useEffect(()=>{
        socket.on('recieve_message',(data)=>{
            // loadMessages(roomid)
            console.log('received message is - ',data)
            
            
        })

    },[socket])
    const sortroomid=(id1,id2)=>{
        if(id1>id2){
            return id1+id2
        }
        else{
            return id2+id1
        }
    }

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
              .then( async data=>{
                    
                    if(data.message=="User Found"){
                        // console.log(data)
                setOuruserdata(data.user)
                let temroomid=await sortroomid(data.user._id,fuserid)
                setRoomid(temroomid)
                socket.emit('join_room',{roomid:temroomid,user:data.user})
                // loadMessages(temroomid)
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
    const [currentmessage,setCurrentmessage]=useState(null)
    const sendMessage=async()=>{
        const messagedata={
            senderid:ouruserdata._id,
            message:currentmessage,
            roomid:roomid,
            recieverid:fuserdata._id
        }
        console.log(messagedata)
        fetch('http://10.0.2.2:3000/savemessagetodb',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify(messagedata)
        }).then(res=>res.json())
        .then(data=>{
            if(data.message=="Message Saved Successfully"){
                socket.emit('send_message',messagedata)
                // loadMessages(roomid)
                console.log("Message Sent Successfully")
                setCurrentmessage('')

                // console.log("Message Saved Successfully")
            }
            else{
                alert('Something went wrong')
                setCurrentmessage('')

            }
        })

    }
    useEffect(()=>{
        loadMessages(roomid)
       
    },[chat])
const loadMessages=(temproomid)=>{
    fetch('http://10.0.2.2:3000/getusermessage',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify({
            roomid:temproomid
        })
        
    }).then(res=>res.json())
    .then(data=>{
        setChat(data)
        // console.log("previous messages",data)
        
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
        <ScrollView style={styles.messageview}>
            {
                chat.map((item,index)=>{
                    return (
                        <View style={styles.message} key={index}>
                            {
                                item.senderid==ouruserdata?._id &&
                                <View style={styles.messageRight}>
                                    <Text style={styles.messageTextRight}>{item.message}</Text>
                                </View>
                            }
                            {
                                item.senderid==fuserid&&
                                <View style={styles.messageLeft}>
                                    <Text style={styles.messageTextLeft}>{item.message}</Text>

                                </View>
                            }
                        </View>
                    )

                })
            }
        </ScrollView>
        <View style={styles.sbottom}>
        <TextInput style={styles.sbottominput} placeholder='Type a message' placeholderTextColor={'white'}

        onChangeText={(text)=>setCurrentmessage(text)}
        value={currentmessage}
        />
      <TouchableOpacity style={styles.sbottombtn}
      onPress={()=>sendMessage()}>
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
    },
    message:{
        width:'100%',
        borderRadius:10
    },
    messageview:{
        width:'100%',
        marginBottom:50,
    },
    messageRight:{
        width:"100%",
        alignItems:'flex-end'
    },
    messageLeft:{
        width:'100%',
        alignItems:'flex-start'
    },
    messageTextRight:{
        color:'white',
        backgroundColor:'#1e90ff',
        minWidth:100,
        padding:10,
        fontSize:17,
        borderRadius:20,
        margin:10
    },
    messageTextLeft:{
        color:'white',
        backgroundColor:'#222222',
        minWidth:100,
        padding:10,
        fontSize:17,
        borderRadius:20,
        margin:10
    }
})