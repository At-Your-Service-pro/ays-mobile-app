import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'

const { width,height } = Dimensions.get('window');

const CarouselItem = ({item,index}:any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View 
        style={{
          marginHorizontal: 17
        }}
      >
        <Image 
          source={item.uri}
          style={{
            width: width/1.1,
            height: height/1.2
          }}
        />
      </View>
    </View>
  )
}

export default CarouselItem

const styles = StyleSheet.create({})