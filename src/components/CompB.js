import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompC from './CompC'

const CompB = ({user}) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <CompC />
    </View>
  )
}

export default CompB

const styles = StyleSheet.create({})