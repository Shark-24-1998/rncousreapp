import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './StackNavigator'

const StackDemo = () => {
  return (
    <View style={{flex: 1 , backgroundColor:"white" }}>
      <StackNavigator />
    </View>
  )
}

export default StackDemo

const styles = StyleSheet.create({})