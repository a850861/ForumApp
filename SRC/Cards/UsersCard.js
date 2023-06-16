import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const UsersCard = ({user}) => {
  return (
    <View style={styles.container}>
       <Image source={{uri:user.profile_Image}}style={styles.image} />
      <View style={styles.c1}>
        <Text style={styles.username}>{user.username}</Text>
       
      </View>
    </View>
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