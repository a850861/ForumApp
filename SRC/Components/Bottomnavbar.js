import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons1 } from '../CommonCss/pagecss';

const Bottomnavbar = () => {
  return (
    <View style={styles.conatiner}>
      <Icon name="home" size={24} color="gray" style={icons1}/>  
      <Icon name="search" size={24} color="gray" style={icons1}/>  
      <Icon name="heart-o" size={24} color="gray" style={icons1}/> 
      <Icon name="user" size={24} color="gray" style={icons1}/>   
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
    }
})