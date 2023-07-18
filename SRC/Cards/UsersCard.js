import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import nopic from '../../assets/nopic.png'
const UsersCard = ({user,navigation}) => {
  return (
   <TouchableOpacity onPress={()=>
   navigation.navigate('Other_UserProfile',{user:user})}>
     <View style={styles.container}>
     {
      user.profilepic?
      <Image source={{uri:user.profilepic}}style={styles.image} />
      :
      <Image source={nopic}style={styles.image} />
     }
      <View style={styles.c1}>
        <Text style={styles.username}>{user.username}</Text>
       
      </View>
    </View>
   </TouchableOpacity>
  )
}

export default UsersCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'#111111',
        marginTop:10,
        borderRadius:20,
        padding:10,
        flexDirection:'row',
        alignItems:'center'
    
    },
    image:{
        width:40,
        height:40,
        borderRadius:50

    },
    username:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        // marginLeft:10,
      
    },
    c1:{
        marginLeft:10,
    },
    lastmessage:{
        color:'gray',
        fontSize:18,
    }
})