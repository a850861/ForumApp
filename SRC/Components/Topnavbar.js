import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Topnavbar = () => {
  return (
    <View style={styles.container}>
      <Text>Topnavbar</Text>
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
        backgroundColor:'white',
        width:'100%',
    }
})