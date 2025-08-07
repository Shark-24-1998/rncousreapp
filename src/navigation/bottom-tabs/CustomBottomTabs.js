import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBottomTabs = ({ state, descriptor, navigation }) => {
  return (
    <View style={styles.container}>
      {
        state.routes.map((tab, index) => {
          const color = state.index == index ? "blue" : "black"
          return (
            <TouchableOpacity style={[styles.iconsContainer, { borderTopWidth: state.index == index ? 2 : 0 , backgroundColor : state.index == index ? "#f2f2f2" : "white" }]}
              onPress={() => navigation.navigate(tab.name)}
            >
              <Image
                source={
                  tab.name == "Home" ? require("../../images/home.png")
                    : tab.name == "Search" ? require("../../images/search.png")
                      : tab.name == "AddPost" ? require("../../images/add-post.png")
                        : tab.name == "Favourite" ? require("../../images/favourite.png")
                          : require("../../images/tabuser.png")
                }
                style={{ width: 20, height: 20, tintColor: color }}
              />
              <Text style={{ color: color }}>{tab.name}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default CustomBottomTabs

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white"
  },
  iconsContainer: {
    alignItems: "center",
    gap: 10,
    borderTopColor:"blue",
   height:"100%",
   width:"20%",
   justifyContent:"center"
  }
})