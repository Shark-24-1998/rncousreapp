import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleSheetStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StyleSheetStyles</Text>
      <Text style={styles.text}>Demo</Text>
    </View>
  )
}

export default StyleSheetStyles

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 30
    }
})