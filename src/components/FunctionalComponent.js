import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeComponent from './CustomeComponent'
import { SafeAreaView } from 'react-native-safe-area-context'

const FunctionalComponent = () => {
  return (
 <SafeAreaView>
       <Text> Hello  FunctionalComponents </Text>
       <Text>Shark</Text>
       <CustomeComponent title={"Click Me"}
       onPress={() => Alert.alert("Hello Function")}/>
    </SafeAreaView>
    
  )
}

export default FunctionalComponent

const styles = StyleSheet.create({})