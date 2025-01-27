import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    Dimensions,
    TouchableOpacity 
} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomeButtom from './CustomeButtom';
import { ActivityIndicator } from 'react-native';

const { width,height } = Dimensions.get('window');

const BottomSheetItem = ({item,index,isopen,setIsOpen}:any) => {
    const [isloading,setIsLoading] = React.useState(false);

    const toggleSheet = () => {
        setIsOpen(!isopen);
      } 

  return (
    <View
        style={{
            backgroundColor: 'white',
            padding: 20
         }}
        >
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '500'
                            }}
                          >
                            {item.title}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                                setIsOpen(false);
                            }}
                            style={{
                                marginBottom: '2%'
                            }}
                          >
                            <AntDesign name="closecircleo" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                        <Text
                          style={{
                            marginTop: '2%',
                            fontSize: 16,
                            color: '#5E5E5E'
                          }}
                        >
                         {item.description}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                marginTop: '2%'
                            }}
                        > ${item.price}</Text>
                        <TouchableOpacity
                          style={{
                            marginTop: '10%',
                            backgroundColor: '#1AACD5',
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 20
                          }}
                          onPress={() => toggleSheet()}
                        >
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 18,
                              textAlign: 'center'
                            }}
                          > Add service </Text>
                        </TouchableOpacity>
                      </View>
  )
}

export default BottomSheetItem

const styles = StyleSheet.create({})