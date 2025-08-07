import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomeComponent = ({onPress , title}) => {
  return (
   <TouchableOpacity style={{
    width:200,
    height:50,
    backgroundColor:"black",
    justifyContent:"center" , alignItems:'center'}} onPress={onPress}>
        <Text style={{color:"white"}}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomeComponent

const styles = StyleSheet.create({})