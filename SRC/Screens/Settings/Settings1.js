import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { formHead, formHead2 } from '../../CommonCss/formcss';

const Settings1 = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
         <Icon name="arrow-left" size={24} color="gray" style={styles.gohome}
      onPress={()=> navigation.navigate('My_UserProfile')}
        />
      <Text style={formHead}>Settings</Text>
      <Text style={styles.txt1}>Edit Profile</Text>
      <Text style={styles.txt1}>Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1}
      onPress={()=>navigation.navigate('Login')}>Logout</Text>
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