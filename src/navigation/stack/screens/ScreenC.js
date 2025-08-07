import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenC</Text>
      <Button title='Go To Home' onPress={() =>navigation.pop(2)}/>
    </View>
  )
}

export default ScreenC

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