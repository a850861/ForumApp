import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage'
import nopic from '../../../assets/nopic.png'
import Icon from 'react-native-vector-icons/FontAwesome';

const  My_UserProfile = ({navigation}) => {
  // const data={
  //   username:'chetan123',
  //   followers:1100,
  //   following:1500,
  //   description:'I am a software developer and i love to code',
  //   profile_image:"https://picsum.photos/500/500",
  //   posts:[
  //     {
  //       id:1,
  //       post_image:'https://picsum.photos/400/400',
  //     },
  //     {
  //       id:2,
  //       post_image:'https://picsum.photos/300/300',
  //     },
  //     {
  //       id:3,
  //       post_image:'https://picsum.photos/200/200',
  //     },
  //     {
  //       id:4,
  //       post_image:'https://picsum.photos/250/150',
  //     },
  //     {
  //       id:5,
  //       post_image:'https://picsum.photos/550/550',
  //     },
  //   ]
  // }
  const [userdata,setUserdata]=useState(null)
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
                setUserdata(data.user)
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
 useEffect(()=>{
  loaddata()
  },[])

    console.log(userdata)
  //     const data={
  //   username:'chetan123',
  //   followers:1100,
  //   following:1500,
  //   description:'I am a software developer and i love to code',
  //   profile_image:"https://picsum.photos/500/500",
  //   posts:[
  //     {
  //       id:1,
  //       post_image:'https://picsum.photos/400/400',
  //     },
  //     {
  //       id:2,
  //       post_image:'https://picsum.photos/300/300',
  //     },
  //     {
  //       id:3,
  //       post_image:'https://picsum.photos/200/200',
  //     },
  //     {
  //       id:4,
  //       post_image:'https://picsum.photos/250/150',
  //     },
  //     {
  //       id:5,
  //       post_image:'https://picsum.photos/550/550',
  //     },
  //   ]
  // }
  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar navigation={navigation} page={"My_UserProfile"}/>
      <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
      <Icon name="refresh" size={25} color="white"
      style={styles.refresh}
      onPress={()=> loaddata()}
      />  

      
      {
        userdata?
        <ScrollView>
        <View style={styles.c1}>
          {
            userdata.profilepic?
           
            <Image style={styles.profilepic} source={{uri:userdata.profilepic}}/>
           
            :
            <Image style={styles.profilepic} source={nopic}/>
          }
          <Text style={styles.txt}>@{userdata.username}</Text>
          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Followers</Text>
              <Text style={styles.txt2}>{userdata.followers.length}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{userdata.following.length}</Text>
            </View>
            <View style={styles.vr1}></View>
            <View style={styles.c111}>
            <Text style={styles.txt1}>Posts</Text>
              <Text style={styles.txt2}>{userdata.posts.length}</Text>
            </View>

          </View>
       {
        userdata.description.length>0?
        <Text style={styles.description}>{userdata.description}</Text>
        :
        <Text style={styles.description}>No description</Text>
       }
        </View>
       {
        userdata.posts.length>0?
        <View style={styles.c1}>
        <Text style={styles.txt}>Your Post</Text>
        <View style={styles.c13}>
          {
            data.posts.map(
              (item)=>{
                return(
                  <Image key={item.id} style={styles.postpic}
                  source={{uri:item.post_image}}/>
                )
              }
            )
          }
        </View>
      </View>
      :
      <View>
        <Text style={styles.c2}>You have not posted anything yet</Text>
      </View>
       }
      </ScrollView>
        :
        <ActivityIndicator size={'large'} color={'white'}/>
      }
    </View>
  )
}

export default  My_UserProfile

const styles = StyleSheet.create({
  conatiner:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    paddingVertical:50,


  },
  c1:{
    width:'100%',
    alignItems:'center',
  
  },
  profilepic:{
    width:150,
    height:150,
    borderRadius:75,
    margin:10,
  },
  txt:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    backgroundColor:'#111111',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  },
  txt1:{
    color:'white',
    fontSize:20,
  },
  txt2:{
    color:'white',
    fontSize:20,
  },
  c11:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  c111:{
    alignItems:'center',
  },
  vr1:{
    width:1,
    height:50,
    backgroundColor:'white',
  },
  description:{
    color:'white',
    fontSize:15,
    marginVertical:10,
    backgroundColor:'#111111',
    width:'100%',
    padding:10,
    paddingVertical:20,

  },
  postpic:{
    width:'32%',
    height:120,
    margin:2,
  },
  c13:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:20,
    justifyContent:'center'
  },
  c2:{
    color:'white',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:200

  },
  refresh:{
    position:'absolute',
    top:50,
    right:5,
    zIndex:1

  }
})






