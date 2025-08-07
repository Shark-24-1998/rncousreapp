import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlignSelf = () => {
    return (
        <View style={{ flex: 1,  backgroundColor: "white", }}>
            <View style={{ width: 100, height: 100, backgroundColor: "orange" , alignSelf:"center" }}></View>
        </View>
    )
}

export default AlignSelf

const styles = StyleSheet.create({})

//alignSelf -> align self , it selfly align single component and it is also work opposite to flexDirection