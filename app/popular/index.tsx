import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity 
} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const saved = () => {

  const services = [
    {
      id: '1',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '2',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '3',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '4',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '5',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '6',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    }
  ]

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView
          style={styles.headerContainer}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
            <Text 
              style={styles.headerText}
            > Popular Services</Text>  
          </View>
          <View style={{marginTop: '5%'}}>
            {
              services.map((item) => (
                <TouchableOpacity  style={styles.subServices} key={item.id}>
                <Image 
                  source={item.image}
                  style={{width: 'auto', height: 140, borderRadius: 10,backgroundColor: '#E4E4E4'}}
                  resizeMode='cover'
                />
                <View>
                  <View 
                    style={{
                      flexDirection: 'row',
                      justifyContent:'space-between',
                      alignItems: 'center',
                      marginTop: 10
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'semibold' 
                      }}
                    >{item.title}</Text>
                    <AntDesign name="heart" size={20} color={'#0598AC'} />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'light'
                      }}
                    >{item.loaction}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              ))
            }
          </View> 

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 400,
    marginTop: '5%'
  },
  subServices: {
    paddingVertical: 10,
    borderRadius: 5
  } 
})