import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ScrollView
} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={styles.header}
        >
          <AntDesign name="left" size={24} color="black" onPress={() => router.back()}/>
          <View>
            <Text style={styles.headerText}> Create Account </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '75%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'semibold',
    textAlign: 'center'
  }
})