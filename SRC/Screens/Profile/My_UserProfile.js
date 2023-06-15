import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const  My_UserProfile = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar navigation={navigation}/>
      <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
      <Text style={formHead}>Your Profile</Text>
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


  }
})






