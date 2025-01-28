import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { useSelector } from 'react-redux'

const _layout = () => {
    const selectedServices = useSelector((state: any) => state.request.selectedServices)
  return (
    <View style={{
        flex: 1
    }}>
      <Stack>
          <Stack.Screen 
              name="index"
              options={{headerShown: false}}
          />
      </Stack>
      <View>
        {selectedServices.length > 0 && (
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'red'
                                }}
                            >
                                <TouchableOpacity
                                style={styles.floatingButton}
                                onPress={() => {
                                    router.push('/serviceDetails');
                                }}
                                >
                                <Text style={styles.floatingButtonText}>
                                    View request
                                    {selectedServices.length > 1 && 's'}
                                </Text>
                                </TouchableOpacity>
                                </View>)
                    }
      </View>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        backgroundColor: '#1AACD5',
        width: '95%',
        height: 50,
        borderRadius: 10,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      floatingButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }
})