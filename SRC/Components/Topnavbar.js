import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons1 } from '../CommonCss/pagecss';
const Topnavbar = ({navigation,page}) => {
  return (
    <View style={styles.container}>
      {
        page==='Mainpage'&&
        <Icon name="wechat" size={24} color="gray" style={icons1}
        onPress={()=>navigation.navigate('All_Chats')}/>  

      }
      
    </View>
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        position:'absolute',
        top:0,
        zIndex:100,
        backgroundColor:'gray',
        width:'100%',
    }
})