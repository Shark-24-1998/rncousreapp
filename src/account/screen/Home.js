import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Clipboard from '@react-native-clipboard/clipboard';
import Octicons from 'react-native-vector-icons/Octicons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Home = ({ navigation }) => {
  const user = auth().currentUser;

  const copyEmail = () => {
    Clipboard.setString(user?.email || "");
    Alert.alert("Copied", "Email copied to clipboard");
  };

  const signOut = async () => {
    try {
      
      await GoogleSignin.signOut();
      
      await auth().signOut();
      navigation.navigate("CreateAccount");
      Alert.alert("Success", "Signed out successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to sign out");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.card}>
       
          <Image
            source={{
              uri: user?.photoURL
                ? user.photoURL
                : "https://www.gravatar.com/avatar/?d=mp",
            }}
            style={styles.avatar}
          />

    
          <Text style={styles.name}>{user?.displayName || "No Name"}</Text>

        
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.email}>{user?.email || "No Email"}</Text>
            <TouchableOpacity onPress={copyEmail}>
              <Octicons name="copy" size={20} color="white" />
            </TouchableOpacity>
          </View>

          
          <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
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
    gap: 15,
    padding: 20,
  },
  avatar: {
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
  },
  signOutButton: {
    backgroundColor: '#FF4757',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  signOutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
