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


const index = () => {
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
              <View>
                <Text style={styles.headerText}> Find service providers </Text>
              </View>
            </View>
            <View>
              <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color={'black'} style={styles.icon}/>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  value={search}
                  onChangeText={setSearch}
                  placeholderTextColor="#888"
                />
              </View>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  headerContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    // paddingHorizontal: 16,
    width: '80%'
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