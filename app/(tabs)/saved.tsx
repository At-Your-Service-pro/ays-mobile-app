import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image 
} from 'react-native';
import React from 'react';

const saved = () => {
  
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

export default saved

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    width: '95%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  } 
})