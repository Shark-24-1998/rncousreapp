import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexDirection = () => {
  return (
    <View style={{flex:1  , flexDirection:"row", backgroundColor:"white" }}>
        <View style={{width:100 , height:100 , backgroundColor:"orange"}}></View>
        <View style={{width:100 , height:100 , backgroundColor:"green"}}></View>
        <View style={{width:100 , height:100 , backgroundColor:"red"}}></View>
      
    </View>
  )
}

export default FlexDirection

const styles = StyleSheet.create({})

// flexDirection -> in which direction child component u want from top to bottom and right to left, flexDirection have four property (column , column-reverse , row , row-reverse)



