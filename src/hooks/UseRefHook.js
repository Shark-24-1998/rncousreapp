import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [count , setCount] = useState(0)
    const previousRef = useRef(0)
    const inputRef = useRef(null)
    const [timer , setTimer] = useState(0)
    const intervalRef = useRef(null)
    useEffect(() =>{
        previousRef.current = count
    },[count])

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev +1)
        },1000);
        return ()=>clearInterval(intervalRef.current)
    }, [])

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Count : {count}</Text>
      <Text style={{fontSize:30}}>Previous : {previousRef.current}</Text>
      <Text style={{fontSize:20 ,  color:"skyblue"}} onPress={()=>setCount(count + 1)}>Increase Count</Text>
      <TextInput 
        ref={inputRef}
        style={{width:"90%" , height:50, borderWidth:1 }}
      />
      <Button title="Focus Input" onPress={() => inputRef.current.focus()}/>
        <Text style={{fontSize:30}}>Timer : {timer}</Text>
        <Button title='Stop Timer' onPress={() =>clearInterval(intervalRef.current)}/>
    </View>
  )
}

export default UseRefHook

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        gap:10
    }
})