import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabsLayout = () => {
  return (
   <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1AACD5',
        tabBarLabelStyle: {
            fontSize: 13, // Increase the font size here
            fontWeight: 'semibold', // Optional: bold text
        },
    }}
    >
        <Tabs.Screen
           name="dashboard"
           options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" size={20} color={color} />
                )
            }}
        />
        <Tabs.Screen
           name="search"
           options={{
            tabBarLabel: "Search",
            tabBarIcon: ({color}) => (
                <AntDesign name="search1" size={20} color={color} />
            ),
            }}
        />
        <Tabs.Screen
           name="saved"
           options={{
            tabBarLabel: "Saved",
            tabBarIcon: ({color}) => (
                <AntDesign name="hearto" size={20} color={color} />
            ),
  
            }}
        />
        <Tabs.Screen
           name="profile"
           options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({color}) => (
                <AntDesign name="user" size={20} color={color} />
            ),
  
            }}
        />
   </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})