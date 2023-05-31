import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Mainpage = ({Navigation}) => {
  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar/>
      <Bottomnavbar/>
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