import { StyleSheet, Text, View,Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React from 'react'
import "../global.css"

const { width, height } = Dimensions.get('window');

const index = () => {

  const onboarding = [
    {
      id: 1,
      title: 'Get variety of professional sevrices',
      description: 'Get differet professional services anywhere you are',
      image: require('../assets/images/1.png'),
    },
    {
      id: 2,
      title: 'Connect with professionals',
      description: 'Connect with highly skilled and professional service providers',
      image: require('../assets/images/2.png'),
    },
    {
      id: 3,
      title: 'At affordable prices',
      description: 'Get professionals for cheap cost',
      image: require('../assets/images/3.png'),
    }

  ];

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})