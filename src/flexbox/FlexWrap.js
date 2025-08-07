import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexWrap = () => {
    const data = ["Sharique Memon" , "Jiya Memon" , "Azam Qadri urf Ajju" , "Abrar Dhanse" , "Arshan Junani"]
  return (
    <View style={{flex:1 , backgroundColor:"white"}}>
        <View style={{flexWrap:"wrap" , flexDirection:"row"}}>
            {
                data.map(item=><View style={{backgroundColor:"orange", padding:10 , margin:10}}><Text>{item}</Text></View>)
            }
        </View>
      
    </View>
  )
}

export default FlexWrap

const styles = StyleSheet.create({})

//flexwrap -> child align , Items will wrap onto the next line when there’s not enough space. 