import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons1 } from '../CommonCss/pagecss';

const Bottomnavbar = ({navigation,page}) => {
  return (
    <View style={styles.conatiner}>
      {
        page==='Mainpage'?
        <Icon name="home" size={24} color="gray" style={styles.activeicons1}
      onPress={()=> navigation.navigate("Mainpage")}/>  
      :
      <Icon name="home" size={24} color="gray" style={icons1}
      onPress={()=> navigation.navigate("Mainpage")}/>  
      }
      {
        page==='SearchUserPage'?
        <Icon name="search" size={24} color="gray" style={styles.activeicons1}
        onPress={()=> navigation.navigate('SearchUserPage')}/> 
        :
        <Icon name="search" size={24} color="gray" style={icons1}
        onPress={()=> navigation.navigate('SearchUserPage')}/> 
      }
      {
        page==='Notification'?
        <Icon name="heart-o" size={24} color="gray" style={styles.activeicons1} 
      onPress={()=>navigation.navigate('NotificationPage')}/> 
      :
      <Icon name="heart-o" size={24} color="gray" style={icons1} 
      onPress={()=>navigation.navigate('NotificationPage')}/> 
      }
      {
        page==='My_UserProfile'?
        <Icon name="user" size={24} color="gray" style={styles.activeicons1}
      onPress={()=>navigation.navigate('My_UserProfile')}/> 
      :
      <Icon name="user" size={24} color="gray" style={icons1}
      onPress={()=>navigation.navigate('My_UserProfile')}/> 
      }
      
        
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    conatiner:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'grey',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        paddingVertical:10,
        alignItems:'center'
    },
    activeicons1:{
      backgroundColor:'white',
      borderRadius:50,
      fontSize:30,
      padding:10,
    }
})