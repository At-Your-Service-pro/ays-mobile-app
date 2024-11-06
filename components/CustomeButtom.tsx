import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'

interface Props {
  title?: string;
  onPress?: () => void;
}

const {width,height} = Dimensions.get('window');

const CustomeButtom:React.FC<Props> = ({title,onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text
          onPress={onPress}
          style={styles.text}
        >{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1AACD5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
    width: width / 1.2,
    height: height / 12
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'medium',
    textAlign: 'center',
  },
});

export default CustomeButtom