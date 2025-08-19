import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompB from './CompB'

const CompA = ({user}) => {
  return (
    <View>
      <Text>CompA</Text>
      <CompB user={user}/>
    </View>
  )
}

export default CompA

const styles = StyleSheet.create({})