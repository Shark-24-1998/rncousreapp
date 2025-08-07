import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabsNavigator from '../../bottom-tabs/BottomTabsNavigator'

const Home = () => {
  return (
    <BottomTabsNavigator />
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold"
  }
})