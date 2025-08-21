import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const calculateValue = x => {
    Alert.alert("Calculating Expensive Value")
    return x * 30
  }

  const calculatedValue = useMemo(()=>calculateValue(counter2), [counter2])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>With Use Memo</Text>
      <Text style={{ fontSize: 24 }}>Counter 1 : {counter}</Text>
      <Text style={{ fontSize: 24 }}>Counter 2 : {counter2}</Text>
      <Text style={{ fontSize: 24 }}>Calculated Value : {calculatedValue}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text style={{ fontSize: 24, color: "#007BFF" }}>Increment Counter1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter2(counter2 + 1)}>
        <Text style={{ fontSize: 24, color: "#007BFF" }}>Increment Counter1</Text>
      </TouchableOpacity>

    </View>
  )
}

export default UseMemoHook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10
  }
})