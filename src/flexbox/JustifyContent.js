import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JustifyContent = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" , justifyContent:"space-evenly"}}>
            <View style={{ width: 100, height: 100, backgroundColor: "orange" }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: "green" }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: "blue" }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View>

        </View>
    )
}

export default JustifyContent

const styles = StyleSheet.create({})
//justifyContent -> align child component,it align child componet as which direction we adjust column(top to bottom) , justifyContent have some property flex-start center and flex-end space-between , space-around , space-evenly