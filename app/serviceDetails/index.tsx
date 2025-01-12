import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar 
  } from 'react-native';
  import React,{useEffect,useState} from 'react';
  import { useLocalSearchParams,router,Link } from 'expo-router';
  import { useAuth } from '@/hooks/useAuth';
  import { userData } from '@/enums/enums';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import MaterialIcons from '@expo/vector-icons/MaterialIcons';
  
  const index = () => {
   
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
        
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  
  export default index
  
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
      fontSize: 20
    },
    headerImage: {
      width: '100%', 
      marginHorizontal: 'auto',
      height: 100, 
      borderRadius: 10
    },
    imageContainer: {
      marginTop: '3%'
    },
    imageText: {
      position: 'absolute',
      top: '20%',
      left: '5%',
      color: 'white',
      fontSize: 16,
      width: '60%',
      fontStyle: 'italic'
    },
    categories: {
      marginTop: '7%',
        display: 'flex',
        flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center'
    },
    categoryContainer: {
      marginTop: '4%'
    },
    subcategory: {
      backgroundColor: '#E4E4E4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginRight: '2.5%',
    },
    popularContainer: {
      marginTop: '10%'
    },
    popularSub: {
      paddingVertical: 10,
      borderRadius: 5,
      marginRight: '3%'
    },
    subServices: {
      paddingVertical: 10,
      borderRadius: 5
    }
  
  })