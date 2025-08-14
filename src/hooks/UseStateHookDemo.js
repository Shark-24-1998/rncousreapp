import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UseStateHookDemo = () => {
    const [bgColor , setBgColor] = useState("cyan")
    const [user , setUser] = useState({
        name : "Shark",
        email : "shark@gmail.com",
        age : 26
    })
    const [data ,  setData] = useState([])
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.box , {backgroundColor:bgColor}]}>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.age}</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
        <Button 
            title='Change Box Color'
            onPress={()=>setBgColor("green")}
        />
        <Button title='update age' onPress={()=>setUser({
            ...user , age : user.age + 1
        })}/>   
        <Button title="Update Time" onPress={() => setData([...data , {updatedTime : new Date()}])}/>
    </SafeAreaView>
  )
}

export default UseStateHookDemo

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        gap:20
    },
    box:{
        width:150,
        height:150,
        justifyContent:"center",
        alignItems:"center",
    }
})