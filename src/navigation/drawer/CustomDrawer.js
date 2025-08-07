import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const CustomDrawer = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../images/user.png")}
                style={styles.userImage}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>View Profile</Text>
            <TouchableOpacity style={styles.drawer} onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../images/home.png")}
                    style={styles.drawerImage}
                />
                <Text style={styles.drawerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer} onPress={() => navigation.navigate("Chats")} >
                <Image source={require("../../images/chat.png")}
                    style={styles.drawerImage}
                />
                <Text style={styles.drawerText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer} onPress={() => navigation.navigate("Settings")}>
                <Image source={require("../../images/setting.png")}
                    style={styles.drawerImage}
                />
                <Text style={styles.drawerText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer} onPress={() => navigation.navigate("HelpSupport")}>
                <Image source={require("../../images/support.png")}
                    style={styles.drawerImage}
                />
                <Text style={styles.drawerText}>Support</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        gap: 10
    },
    userImage: {
        width: 100,
        height: 100
    },
    drawer: {
        flexDirection: "row",
        width: "90%",
        height: 40
    },
    drawerImage: {
        width: 25,
        height: 25
    },
    drawerText: {
        fontSize: 16,
        marginLeft: 10
    }
})