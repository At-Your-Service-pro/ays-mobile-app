import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  title?: string;
  onPress?: () => any;
}

const {width,height} = Dimensions.get('window');

const CustomeButtom:React.FC<Props> = ({title,onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.containerStyle}
      onPress={onPress}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text
          style={styles.textStyle}
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#1AACD5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
    width: '100%',
    height: height / 13
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'medium',
    textAlign: 'center',
  }
});

export default CustomeButtom