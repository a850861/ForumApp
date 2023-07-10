import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { formHead, formHead2 } from '../../CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}) => {
   
  return (
    <View style={styles.conatiner}>
         <Icon name="arrow-left" size={24} color="gray" style={styles.gohome}
      onPress={()=> navigation.navigate('Settings1')}
        />
      <Text style={formHead}>Edit Profile</Text>
      <Text style={styles.txt1}>Change Profile</Text>
      <Text style={styles.txt1}
      onPress={()=> navigation.navigate('ChangeUsername')}>Change Username</Text>
      <Text style={styles.txt1}
      onPress={()=> navigation.navigate('ChangeDescription')}>Change Description</Text>
     
    </View>
  )
}

export default EditProfile

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



