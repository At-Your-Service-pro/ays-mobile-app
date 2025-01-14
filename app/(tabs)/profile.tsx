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
import Feather from '@expo/vector-icons/Feather';


const profile = () => {
  
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
            > Account Settings </Text>  
          </View>
          <View style={{marginTop: '2%'}}>
            <Text style={{color: '#868686'}}>Update your profile data </Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <AntDesign name="user" size={20} color={'#000000'} />
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '90%',
                  marginLeft: '3%',
                  padding: 5
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20
                    }}
                  > Profile Information </Text>
                  <Text 
                    style={{
                      color: '#868686',
                      marginTop: '3%'
                    }}
                  > Change your account information </Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View 
              style={{
                width: '100%',
                borderWidth: 0.5,
                opacity: 0.2,
                marginTop: '2%'
              }}
            />
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '5%'
              }}
            >
              <Feather name="lock" size={20} color="black" />
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '90%',
                  marginLeft: '3%',
                  padding: 5
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20
                    }}
                  > Change password </Text>
                  <Text 
                    style={{
                      color: '#868686',
                      marginTop: '3%'
                    }}
                  > Change your account password </Text>
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View 
              style={{
                width: '100%',
                borderWidth: 0.5,
                opacity: 0.2,
                marginTop: '2%'
              }}
            />


          </View> 

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default profile

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
    fontWeight: 500,
    marginTop: '5%'
  },
  subServices: {
    paddingVertical: 10,
    borderRadius: 5
  }
})