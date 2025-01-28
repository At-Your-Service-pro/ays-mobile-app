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
    Modal,
    Dimensions, 
    ActivityIndicator
  } from 'react-native';
import React,{useState,useCallback,useRef}from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


  const { width, height } = Dimensions.get('window');
  
  const requestsDetails = () => {
  
    const services = {
        id: '1',
        title: 'Elisah Plumbing Installation',
        category: 'Plumbing',
        loaction: 'Spintex',
        image: [
          {
            id: 1,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 2,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 3,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 4,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 5,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 6,
            uri: require('../../assets/images/3.png'),
          }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        phonenumber: '0245861319',
        sub_services: [
          {
            id: 1,
            title: 'leak repair',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '100'
          },
          {
            id: 2,
            title: 'Sewages',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '200'
          }
        ]
      }

    
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
            <View
              style={{
                width: '95%',
                margin: 'auto'
              }}
            >
             <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                  <AntDesign name="left" size={24} color="black"  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}> {services.title}</Text>
                </View>
             </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                width: '100%'
              }}
            >
              <View>
              {
                services.sub_services.map((sub) => (
                  <View key={sub.id}>
                    <View 
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: '5%',
                        paddingVertical: '5%'
                      }}
                    >
                      <View>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>{sub.title}</Text>
                        <Text 
                          style={{ 
                            fontSize: 14, 
                            color: '#808080',
                            width:  '70%',
                            marginVertical: '5%' 
                          }}>{sub.description}</Text>
                        <Text 
                          style={{ 
                            fontSize: 18, 
                            fontWeight: '500',
                          }}>${sub.price}</Text>
                      </View>
                      <TouchableOpacity>
                        <MaterialCommunityIcons name="delete-outline" size={24} color="#C62121" />
                      </TouchableOpacity>
                    </View>
                     <View 
                        style={{
                          width: '90%',
                          borderWidth: 0.5,
                          opacity: 0.2,
                          margin: 'auto'
                        }}
                      />
                  </View>
                ))
              }
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '5%'
                  }}
                >
                  <AntDesign name="pluscircle" size={24} color="#1AACD5" />
                  <Text
                    style={{
                      fontSize: 18, 
                      fontWeight:  '500', 
                      marginLeft: '5%',
                      color: '#1AACD5'
                    }}
                  >
                    Add more </Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                width: '100%',
                marginTop: '5%'
              }}
            >
              <TouchableOpacity
                style={{
                  width: '95%',
                  margin: 'auto'
                }}
                onPress={() => router.push('/location')}
              >
                <View
                  style={{
                    marginTop: '5%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <Ionicons name="location-outline" size={24} color="black" /> 
                    <Text
                      style={{
                        fontSize: 18
                      }}
                    > Add Location </Text>
                  </View>
                  <AntDesign name="right" size={24} color="#c5c5c5"  />
                </View>
              </TouchableOpacity>
            </View>
           </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  
  export default requestsDetails 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEBEB'
    },
    headerContainer: {
      width: '100%',
      marginHorizontal: 'auto',
      marginTop: '2%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      width: '82%'
    },
    headerText: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
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
    image: {
      width: '40%'
    },
    floatingButton: {
      position: 'absolute',
      backgroundColor: '#1AACD5',
      width: '95%',
      height: 50,
      borderRadius: 10,
      bottom: 10,
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