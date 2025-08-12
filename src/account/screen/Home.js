import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAuth } from '@react-native-firebase/auth'
import Clipboard from '@react-native-clipboard/clipboard'
import Octicons from 'react-native-vector-icons/Octicons';

const Home = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const copyEmail = () => {
    Clipboard.setString(user.email || "")
    Alert.alert("copied", "Email Copied on Clipboard")
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiL5TYwUUkdkAOCzMiAPMdLvAhPY__rtDX2SogHlMvdoLUQxoT2xmyD0Uja2HoZB5CXFA&usqp=CAU" }}
              style={styles.avator}
            />
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Text style={styles.name}>{user.displayName || "No Name"}</Text>
            <View style={{flexDirection:"row" ,  gap:5}}>
              <Text style={styles.email}>{user.email}</Text>
              <TouchableOpacity onPress={copyEmail}>
                <Octicons name='copy' size={20} color="white" />
              </TouchableOpacity>
              
            </View>

          </View>

        </View>
      </View>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  card: {
    width: 400,
    height: 300,
    backgroundColor: '#4B2EFF',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 20,
    elevation: 5,
    gap: 15
  },
  avator: {
    width: 100,
    height: 100,
    borderRadius: 50,

  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  email: {
    color: "white",
    fontSize: 15,
  }
})