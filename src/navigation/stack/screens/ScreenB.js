import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenB = ({navigation , route}) => {
    const {user} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenB : {user.name}</Text>
      <Button title='Go Back' onPress={() => navigation.goBack() }/>
        <Button  title='Go To C' onPress={() => navigation.navigate("ScreenC") }/>
    </View>
  )
}

export default ScreenB

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap: 10
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})