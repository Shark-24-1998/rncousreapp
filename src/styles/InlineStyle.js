import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const InlineStyle = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold"
      }}>Inline Style Demo </Text>
    </SafeAreaView>

  )
}

export default InlineStyle

const styles = StyleSheet.create({})