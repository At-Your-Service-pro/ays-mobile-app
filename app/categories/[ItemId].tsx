import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Image 
  } from 'react-native';
  import React,{useEffect,useState} from 'react';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { router } from 'expo-router';
  
  
  const search = () => {
    const [search, setSearch] = useState("");
    
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
             <View style={styles.header}>
                <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
                <View>
                  <Text style={styles.headerText}> Plumbing </Text>
                </View>
              </View>
              
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  
  export default search
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    headerContainer: {
      width: '95%',
      marginHorizontal: 'auto',
      marginTop: '5%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      // paddingHorizontal: 16,
      width: '60%'
    },
    headerText: {
      fontSize: 24,
      fontWeight: '400',
      textAlign: 'center',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#333",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 40,
      marginTop: '5%'
    },
    icon: {
      marginRight: 10,
    }, 
  })