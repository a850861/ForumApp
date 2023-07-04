import { StatusBar, StyleSheet, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Mainpage = ({navigation}) => {
  const [userdata,setUserdata]=useState(null)
 useEffect(()=>{
  AsyncStorage.getItem('user').then(data=>{
    // console.log(data)
    setUserdata(JSON.parse(data))
  }).catch(err=>alert(err))
 },[])
    console.log(userdata)

  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar navigation={navigation} page={"Mainpage"}/>
      <Bottomnavbar navigation={navigation} page={"Mainpage"}/>
      <FollowersRandomPost/>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
  conatiner:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    paddingVertical:50,


  }
})