import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const UseCallBackHook = () => {
    const [count , setCount] = useState(0)

    const fetchData =useCallback(() =>{
        console.log("Fetching Data")
    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Count : {count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>Icrement</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UseCallBackHook

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap :10
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#007bff',
        width: 250,
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,   
    },
    buttonText:{
        fontSize:16,
        fontWeight:"bold",
        color:"white"
    }
})