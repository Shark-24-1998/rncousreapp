import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenA = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenA</Text>
      <Button title='Go To B' onPress={()=>navigation.navigate("ScreenB",{
        user:{
            name : "Shark",
            age : 26
        }
      })}/>
    </View>
  )
}

export default ScreenA

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})