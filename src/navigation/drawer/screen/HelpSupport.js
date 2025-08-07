import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelpSupport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HelpSupport</Text>
    </View>
  )
}

export default HelpSupport

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