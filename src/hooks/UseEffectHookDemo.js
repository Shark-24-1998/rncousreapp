import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const UseEffectHookDemo = () => {
    const [counter1 , setCounter1] = useState(0)
    const [counter2 , setCounter2] = useState(0)

    useEffect(() =>{
        //every Time
        console.log("every Time")
    })

    useEffect(() => {
        //One Time
        console.log("One Time")
    }, [])

    useEffect(() =>{
        //Conditinal : means we can mount or rerender according to state
        console.log("conditonal")
    }, [counter1])

  return (
   <View style={styles.container}>
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Counter 1 : {counter1}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCounter1(counter1 + 1)}>
                <Text style={styles.buttonText}>Icrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCounter1(counter1 - 1)}>
                <Text style={styles.buttonText}>Drcement</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Counter 2 : {counter2}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCounter2(counter2 + 1)}>
                <Text style={styles.buttonText}>Icrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCounter2(counter2 - 1)}>
                <Text style={styles.buttonText}>Drcement</Text>
            </TouchableOpacity>
        </View>
   </View>
  )
}

export default UseEffectHookDemo

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        gap : 50    
    },
    counterContainer:{
      gap : 10,
      justifyContent:"center",
      alignItems:"center"
    },
    counterText:{
        fontSize:24,
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"#007BFF",
        padding:15,
        borderRadius:5,
    },
    buttonText:{
        fontSize:16,
        color:"white",
        fontWeight:"bold"
    }
})