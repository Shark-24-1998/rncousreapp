import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screen/Home'
import Chats from './screen/Chats'
import Settings from './screen/Settings'
import HelpSupport from './screen/HelpSupport'
import CustomDrawer from './CustomDrawer'

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          drawerActiveBackgroundColor:"#f2f2f2",
          drawerStyle:{
            backgroundColor:"orange"
          },
          drawerActiveTintColor:"red",
          drawerInactiveTintColor:"white",
        }}
        drawerContent={props => <CustomDrawer {...props}/>}
        >
            <Drawer.Screen name='Home' component={Home} options={{drawerIcon : ({size , focused , color}) =>{
              return(
                  <Image 
                  source={require("../../images/home.png")}
                    style={{
                      width:size,
                      height:size,
                      tintColor: focused ? "black" : "white"
                    }}
                  />
              )
            },
            drawerLabel : ({size , focused, color}) => {
                return(
                  <Text style={{color : color, fontSize:18}}>
                    {"Home"}
                  </Text>
                )
            }}}
           
            />
            <Drawer.Screen name='Chats' component={Chats} options={{
              drawerIcon:({size , focused})=>{
                return(
                  <Image 
                    source={require('../../images/chat.png')}
                    style={{
                      width:size,
                      height:size,
                      tintColor:focused ? "black" : "white"
                    }}
                  />
                )
              },
              drawerLabel : ({size , focused , color}) => {
                return(
                  <Text style={{color :color, fontSize:18}}>
                    {"Chats"}
                  </Text>
                )
            }
            }} />
            <Drawer.Screen name='Settings' component={Settings} options={{
              drawerIcon:({size , focused}) => {
                return(
                  <Image 
                    source={require("../../images/setting.png")}
                    style={{
                      width:size,
                      height:size,
                     tintColor:focused ? "black" : "white"
                    }}
                  />
                )
              },
              drawerLabel : ({size , focused , color}) => {
                return(
                  <Text style={{color : color ,fontSize:18}}>
                    {"Setting"}
                  </Text>
                )
            }
            }}/>
            <Drawer.Screen name='HelpSupport' component={HelpSupport} options={{
              drawerIcon:({size , focused}) => {
                return(
                  <Image 
                    source={require("../../images/support.png")}
                    style={{
                      width:size,
                      height:size,
                      tintColor:focused ? "black" : "white"
                    }}
                  />
                )
              },
              drawerLabel : ({size , focused , color}) => {
                return(
                  <Text style={{color : color , fontSize:18}}>
                    {"HelpSupport"}
                  </Text>
                )
            }
            }}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})