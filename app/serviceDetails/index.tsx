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
    Dimensions 
  } from 'react-native';
  import React,{useState}from 'react';

  const { width, height } = Dimensions.get('window');
  
  const serviceDetails = () => {

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
  
  export default serviceDetails 
  
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
    },
    carouselImage: {
        width: width * 0.8,
        height: height * 0.5,
        borderRadius: 10,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
      },
      closeText: {
        color: '#fff',
        fontSize: 16,
      },
  })