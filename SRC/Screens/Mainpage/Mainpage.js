import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { conatinerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formcss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'

const Mainpage = ({Navigation}) => {
  return (
    <View style={conatinerFull}>
      <StatusBar/>
      <Topnavbar/>
      <Bottomnavbar/>
      <Text style={formHead}>Mainpage</Text>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({})