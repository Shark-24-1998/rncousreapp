import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const LinearGradietDemo = () => {
    return (
        <LinearGradient colors={['#ef32d9', "#89fffd"]} style={{ height: "100%", justifyContent: "center" }}>
            <LinearGradient
                colors={["red", 'yellow', 'lightblue', 'lightgreen']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                // locations={[0.1,0.2,0.4,1]}
            >
                <Text style={{ fontSize: 22 }}>Sign in with Google</Text>
            </LinearGradient>
            <LinearGradient
                colors={['lightgrey', 'blue']}
                style={styles.gradient}
                useAngle={true}
                angle={45}
                angleCenter={{x:0.5 , y:0.5}}
            >
                <Text style={{ fontSize: 22 }}>Sign in with FaceBook</Text>
            </LinearGradient>
        </LinearGradient>
    )
}

export default LinearGradietDemo

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: "center"
    }
})