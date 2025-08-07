import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBoxDemo = () => {
  return (
    <View style={{flex:1 , backgroundColor:"red"}}>
      <View style={{flex:0.5, backgroundColor:"orange"}}></View>
      <View style={{flex:0.3, backgroundColor:"green"}}></View>
      <View style={{flex:0.2, backgroundColor:"yellow"}}></View>
    </View>
  )
}

export default FlexBoxDemo

const styles = StyleSheet.create({})