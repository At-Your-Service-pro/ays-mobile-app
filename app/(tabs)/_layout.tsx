import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
   <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1AACD5',
        tabBarLabelStyle: {
            fontSize: 13, // Increase the font size here
            fontWeight: 'semibold', // Optional: bold text
            paddingBottom: 20
        },
        tabBarStyle:{
            paddingBottom: 20
        }
    }}
    >
        <Tabs.Screen
           name="dashboard"
           options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={18} color={color} />
                )
            }}
        />
        <Tabs.Screen
           name="search"
           options={{
            tabBarLabel: "Search",
            tabBarIcon: ({color}) => (
                <AntDesign name="search1" size={18} color={color} />
            ),
            }}
        />
         <Tabs.Screen
           name="orders"
           options={{
            tabBarLabel: "Requests",
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="clipboard-text-outline" size={18} color={color} />
            ),
            }}
        />
        <Tabs.Screen
           name="saved"
           options={{
            tabBarLabel: "Saved",
            tabBarIcon: ({color}) => (
                <AntDesign name="hearto" size={18} color={color} />
            ),
  
            }}
        />
        <Tabs.Screen
           name="profile"
           options={{
            tabBarLabel: "Account",
            tabBarIcon: ({color}) => (
                <FontAwesome name="user-o" size={18} color={color} />
            ),
  
            }}
        />
   </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})