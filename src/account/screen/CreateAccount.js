import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform,  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import CustomModal from './CustomModal';



const CreatAccount = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [pendingAction, setPendingAction] = useState(null)

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
               
            } else if (error.code === 'PLAY_SERVICES_NOT_AVAILABLE') {
               
            }
        }
    };

    const handleCreateAccount = () => {
        setPendingAction('create')
        setShowModal(true)
    }

    const handleGoogleSignIn = () => {
        setPendingAction('google')
        setShowModal(true)
    }

    const handleAccept = () => {
        setShowModal(false)
        if (pendingAction === 'create') {
            createUser()
        } else if (pendingAction === 'google') {
            SignInWithGoogle()
        }
        setPendingAction(null)
    }

    const handleDecline = () => {
        setShowModal(false)
        setPendingAction(null)
    }

    return (
        <KeyboardAvoidingView 
            style={{flex:1 ,  backgroundColor:"white"}}
            behavior={Platform.OS === "ios" ? "padding" : 'height'}
        >
            <TouchableWithoutFeedback style={{backgroundColor:"white"}} onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                {
                    showModal && (
                        <CustomModal
                            onAccept={handleAccept}
                            onDecline={handleDecline}
                        />
                    )
                }
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
                    onPress={handleCreateAccount}
                >
                    <Text style={styles.loginButtonText}>Create Account</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", margin: 15 }}>OR</Text>
                <TouchableOpacity
                    style={[styles.loginButton, { marginTop: 10 }]}
                    onPress={handleGoogleSignIn}
                >
                    <Text style={styles.loginButtonText}>Google Sign-In</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default CreatAccount

const styles = StyleSheet.create({
    container: {
        flex:1,
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