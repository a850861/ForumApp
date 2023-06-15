import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const SearchUserPage = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <StatusBar/>
      <Topnavbar navigation={navigation}/>
      <Bottomnavbar navigation={navigation}page={"SearchUserPage"}/>
      <Text style={formHead}>Search User</Text>
      <TextInput placeholder='Search By Username..' style={styles.searchbar}></TextInput>
    </View>
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
  conatiner:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    paddingVertical:50,


  },
  searchbar:{
    
  }
})



