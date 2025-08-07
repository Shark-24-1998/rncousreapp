import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddPost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddPost</Text>
    </View>
  )
}

export default AddPost

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