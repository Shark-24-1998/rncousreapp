import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CoreComponents = () => {
  return (
    <ScrollView style={{flex:1}}>
      <View style={{width : 100 , height : 100,   backgroundColor:"orange"}}></View>
      <Text style={{fontSize:40 , color:'red' ,  textAlign : 'center' , width : 200 }}
      numberOfLines={2}
      ellipsizeMode='tail'>
        Hello newufuihcbdagfg8hva buciqwqhfcuibc
      </Text>
      <Image 
        source={{uri:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}}
        style={{width:500 , height:500 , backgroundColor:"black"}}
        resizeMode='center' 
      />
      <TextInput
        style = {{width : 300 , height:50 , borderWidth:1}} 
        multiline ={true}
        placeholder='Enter name'
      />
      <TouchableOpacity style={{width:200 , height:50 , backgroundColor:"orange", justifyContent:"center" , alignItems:"center"}} onPress={() => Alert.alert("Succefully")}>
        <Text>Login</Text>
      </TouchableOpacity>
      
             <FlatList 
       data={[1,1,1,1,1]}
       ListFooterComponent={()=>{
        return(
            <View style={{width:300, height:50 , backgroundColor:"red" , justifyContent:"center" , alignItems:"center" }}>
                <Text style={{fontSize:20 , color:"white"}}>Footer</Text>
            </View>
        )
       }}
       ListHeaderComponent={() =>{
        return(
            <View style={{width:300, height:50 , backgroundColor:"purple" , justifyContent:"center" , alignItems:"center" }}>
                <Text style={{fontSize:25 , color:"white"
                }}>Header</Text>
            </View>
        )
       }}
       renderItem={({item, index}) =>{
        return(
            <View style={{
                width:200,
                height:50,
                justifyContent:'center',
                alignItems:"center",
                backgroundColor:"cyan",
                marginTop:10
            }}>
                <Text style={{fontSize:20 , color : "white"}}>{'item' + (index+1)}</Text>
            </View>
        )
       }}
       />

    </ScrollView>
  )
}

export default CoreComponents

const styles = StyleSheet.create({})