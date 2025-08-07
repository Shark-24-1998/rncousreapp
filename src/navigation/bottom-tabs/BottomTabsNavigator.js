import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './tabs/Home'
import AddPost from './tabs/AddPost'
import Favourites from './tabs/Favourites'
import Search from './tabs/Search'
import Profile from './tabs/Profile'
import CustomBottomTabs from './CustomBottomTabs'

const BottomTabsNavigator = () => {
    const Bottom = createBottomTabNavigator()
  return (
   <Bottom.Navigator screenOptions={{
    headerShown:false,
    height:100,
    tabBarActiveTintColor:"cyan"
   }}
   tabBar={props => <CustomBottomTabs {...props} />}   
   >
        <Bottom.Screen name='Home' component={Home} options={{
            tabBarIcon:({size, color}) => {
                return(
                    <Image source={require("../../images/home.png")}
                        style={{width:size, height:size, color:color}}
                    />
                )
            }
        }} />
        <Bottom.Screen name='Search' component={Search} options={{
            tabBarIcon:({size, color}) => {
                return(
                    <Image source={require("../../images/search.png")}
                        style={{width:size, height:size, color:color}}
                    />
                )
            }
        }} />
        <Bottom.Screen name='AddPost' component={AddPost} options={{
            tabBarIcon:({size, color}) => {
                return(
                    <Image source={require("../../images/add-post.png")}
                        style={{width:size, height:size, color:color}}
                    />
                )
            }
        }} />
        <Bottom.Screen name='Favourite' component={Favourites} options={{
            tabBarIcon:({size, color}) => {
                return(
                    <Image source={require("../../images/favourite.png")}
                        style={{width:size, height:size, color:color}}
                    />
                )
            }
        }} />
        <Bottom.Screen name='Profile' component={Profile} options={{
            tabBarIcon:({size, color}) => {
                return(
                    <Image source={require("../../images/tabuser.png")}
                        style={{width:size, height:size, color:color}}
                    />
                )
            }
        }} />
   </Bottom.Navigator>
  )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({})