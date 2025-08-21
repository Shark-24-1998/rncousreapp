import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PERMISSIONS, request } from 'react-native-permissions'

const PermissionsDemo = () => {
    const askForPermission = permission =>{
        request(permission).then(result =>{
            console.log(result)
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => askForPermission(PERMISSIONS.ANDROID.CAMERA)}>
                <Text style={styles.buttonText}>Camera Permission</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => askForPermission(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)}>
                <Text style={styles.buttonText}>Image Gallery Permission</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button } onPress={() => askForPermission(PERMISSIONS.ANDROID.READ_CONTACTS)}>
                <Text style={styles.buttonText} >Contact Permission</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PermissionsDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap:20
    },
    button: {
        borderWidth: 2,
        height: 70,
        width: 350,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
