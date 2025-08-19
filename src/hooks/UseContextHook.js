import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CompA from '../components/CompA'

export const UserContext = createContext()

const UseContextHook = () => {
  return (
    <UserContext.Provider
    value={{
      name :"Arshan",
      gmail : 'arshan@gmail.com'
    }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <CompA
          user={{
            name: "Shark",
            gmail: "SharkTest@gmail.com"
          }}
        />
      </SafeAreaView>
    </UserContext.Provider>

  )
}

export default UseContextHook

const styles = StyleSheet.create({})