import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bottomnavbar = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Bottomnavbar</Text>
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    conatiner:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        paddingVertical:10,
    }
})