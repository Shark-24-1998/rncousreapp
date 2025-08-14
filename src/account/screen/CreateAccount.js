import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const CreatAccount = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                return userCredential.user.updateProfile({
                    displayName: userName
                })
            })
            .then(() => {
                console.log('User account created & signed in!');
                navigation.navigate("Home")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "24286774510-hq9j9bh1p0ppeh06ecnsuossre8rakr8.apps.googleusercontent.com",
            offlineAccess: true,
            forceCodeForRefreshToken: true,
            scopes: ['profile', 'email']
        })
    }, [])

    const SignInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
   
      await GoogleSignin.signIn();
   
      const { accessToken } = await GoogleSignin.getTokens();

      if (!accessToken) {
        throw new Error('No access token found from Google Sign-In');
      }
      
      const googleCredential = GoogleAuthProvider.credential(null, accessToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      navigation.navigate("Home");
    } catch (error) {
      if (error.code === 'SIGN_IN_CANCELLED') {
        // User cancelled the sign-in flow
      } else if (error.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
        // Play services not available
      } 
    }
  };


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#3b5fff', '#6eaaff']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.heroContainer}
            >
                <Entypo name="home" size={70} color="#6eaaff" style={styles.icon} />
            </LinearGradient>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>CREATE Account</Text>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder='UserName'
                        placeholderTextColor="#666"
                        style={styles.input}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        value={userName}
                        onChangeText={setUserName}

                    />
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="#666"
                        style={styles.input}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}

                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="#666"
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}

                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => createUser()}
            >
                <Text style={styles.loginButtonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", margin: 15 }}>OR</Text>
            <TouchableOpacity
                style={[styles.loginButton, { marginTop: 10 }]}
                onPress={() => SignInWithGoogle()}
            >
                <Text style={styles.loginButtonText}>Google Sign-In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreatAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    heroContainer: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        backgroundColor: "white",
        padding: 30,
        borderRadius: 100
    },
    loginContainer: {
        height: 300,
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: -50,
        elevation: 5,
    },
    inputWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        gap: 10
    },
    input: {
        width: 300,
        borderBottomWidth: 1.5,
        borderBottomColor: "#ccc",
        fontSize: 16,
        paddingVertical: 8,
        color: "#333",
    },
    loginButton: {
        alignItems: "center",
        backgroundColor: "#3b5fff",
        width: 250,
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        elevation: 10,
        marginTop: -25,
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: '600'
    },
})