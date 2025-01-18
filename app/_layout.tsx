import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,SplashScreen } from 'expo-router'
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store, { persistor } from '../redux/app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// // Prevent Splash screen from auto hiding
// SplashScreen.preventAutoHideAsync();

const _layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              <Stack.Screen 
                name='profileInfo'
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name='profilePassword'
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name='privacy'
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name='location'
                options={{headerShown: false}}
              />
          </Stack>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default _layout

const styles = StyleSheet.create({})