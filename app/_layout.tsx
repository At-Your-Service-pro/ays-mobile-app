import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Slot } from "expo-router";
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Stack>
          <Stack.Screen 
              name="index"
              options={{headerShown: false}}
          />
          <Stack.Screen 
            name='welcome'
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='forgotpassword'
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='signup'
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='otp'
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='createnewpassword'
            options={{headerShown: false}}
          />
      </Stack>
    </GestureHandlerRootView>
  )
}

export default _layout

const styles = StyleSheet.create({})