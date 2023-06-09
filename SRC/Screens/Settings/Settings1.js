import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { formHead, formHead2 } from '../../CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings1 = ({navigation}) => {
  const logout=()=>{
    AsyncStorage.removeItem('user').then(()=>{
       navigation.navigate('Login')

    })
   

  }
  return (
    <View style={styles.conatiner}>
         <Icon name="arrow-left" size={24} color="gray" style={styles.gohome}
      onPress={()=> navigation.navigate('My_UserProfile')}
        />
      <Text style={formHead}>Settings</Text>
      <Text style={styles.txt1}
      onPress={()=> navigation.navigate('EditProfile')}>Edit Profile</Text>
      <Text style={styles.txt1}
      onPress={()=> navigation.navigate('ChangePassword')}>Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1}
      onPress={()=>logout()}>Logout</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
    conatiner:{
        width:'100%',
        height:'100%',
        backgroundColor:'black'
    },
    txt1:{
        marginTop:20,
        color:'white',
        fontSize:20,
        borderBottomColor:'gray',
        borderWidth:1,
    }
})