import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Notification = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar navigation={navigation}/>
      <Bottomnavbar navigation={navigation}page={"Notification"}/>
      <View style={styles.c1}>
      <View style={styles.notification}>
        <Text> Some Notification</Text>
      </View>
      <View style={styles.notification}>
        <Text> Some Notification</Text>
      </View>
      <View style={styles.notification}>
        <Text> Some Notification</Text>
      </View>
      <View style={styles.notification}>
        <Text> Some Notification</Text>
      </View>
      </View>
    </View>
  )
}

export default  Notification

const styles = StyleSheet.create({
  conatiner:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    paddingVertical:50,


  },
  notification:{

  },
  c1:{
    width:'100%',
    height:'100%',
    alignItems:'center'


  },
  notification:{
    width:'100%',
    height:50,
    backgroundColor:'#111111',
    marginTop:10,
  }
})






