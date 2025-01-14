import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,SplashScreen } from 'expo-router'
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@/redux/app/store';
import { Provider } from 'react-redux';

// // Prevent Splash screen from auto hiding
// SplashScreen.preventAutoHideAsync();

const _layout = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Stack>
            <Stack.Screen 
              name="(tabs)"
              options={{headerShown: false,gestureEnabled: false}}
            />
            <Stack.Screen 
                name="index"
                options={{headerShown: false}}
            />
            <Stack.Screen 
              name='welcome'
              options={{headerShown: false,gestureEnabled: false }}
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
            <Stack.Screen 
              name='serviceDetails'
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name='categories'
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name='popular'
              options={{headerShown: false}}
            />
        </Stack>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default _layout

const styles = StyleSheet.create({})