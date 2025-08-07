import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from './DrawerNavigator'

const DrawerDemo = () => {
  return (
    <View style={{flex: 1 , backgroundColor:"white" }}>
      <DrawerNavigator />
    </View>
  )
}

export default DrawerDemo

const styles = StyleSheet.create({})