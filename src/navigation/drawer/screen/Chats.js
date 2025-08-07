import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chats</Text>
    </View>
  )
}

export default Chats

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