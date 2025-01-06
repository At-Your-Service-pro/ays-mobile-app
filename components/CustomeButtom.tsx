import { View, Text,StyleSheet,Dimensions,TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'

interface Props {
  title?: string;
  onPress?: () => any;
  isLoading?: boolean
}

const {width,height} = Dimensions.get('window');

const CustomeButtom:React.FC<Props> = ({title,onPress,isLoading}) => {
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
        {
          isLoading ? <ActivityIndicator size={130} color={'#ffffff'}/> :   <Text
          style={styles.textStyle}
        >{title}</Text>
        }
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