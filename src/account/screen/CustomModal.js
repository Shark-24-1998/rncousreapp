import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const CustomModal = ({ onAccept, onDecline }) => {
  return (
    <View style={styles.container}>
        <View style={styles.modalContainer}>
            <View style={{flexDirection:"row" , padding:20, gap:10}}>
                <FontAwesome5 name="exclamation-triangle" size={28} />
                <Text style={{fontSize:25, fontWeight:"bold"}}>Disclosure</Text>
            </View>
            <View style={{gap:10, paddingHorizontal:10}}>
               <Text style={{fontSize:16}}>To continue, please sign in with your Google account or create a new account.</Text>
               <Text>By continuing, you agree to our <Text style={{color:"blue"}} onPress={()=>Linking.openURL("https://www.google.com/")}>Privacy Policy</Text> and understand that:</Text>
            </View>
            <View style={{marginVertical:10, marginHorizontal:20}}>
                <Text>{'\u2022'} The app may collect and share information about installed packages </Text>
                <Text>{'\u2022'} Some sections of the app may include playable ads.</Text>
            </View>
            <View style={{marginHorizontal:10}}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>
                    Please review the <Text style={{color:"blue"}} onPress={()=>Linking.openURL("https://www.google.com/")}>Privacy Policy</Text>  before proceeding.
                    </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={onDecline}>
                    <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAccept}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:"rgba(0,0,0,0.7)",
        justifyContent:"center",
        alignItems:"center",
        zIndex: 1000
    },
    modalContainer:{
        height:370,
        width:350,
        backgroundColor:"white",
        borderRadius:30,
        margin: 20
    },
    button:{
        flexDirection:"row",
        justifyContent:"flex-end",
        marginVertical:20,
        marginHorizontal:30,
        gap:20,
    },
    buttonText:{
        fontSize:16,
        color:'red'
    }
})