import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlignItem = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white", alignItems:"center" , justifyContent:"space-evenly" }}>
            <View style={{ width: 100, height:100,  backgroundColor: "orange" }}></View>
            <View style={{width:100,  height: 100, backgroundColor: "green" }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: "blue" }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View>

        </View>
    )
}

export default AlignItem

const styles = StyleSheet.create({})

//alignItems -> align child component , it have some property flex-start , center , flex-end , stretch , baseline . and it work opposite to flexDirection like if flexdirection will be row so it move child component as column