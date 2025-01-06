import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import React,{useEffect,useState} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { userData } from '@/enums/enums';

const index = () => {
  const {email} = useLocalSearchParams();
  const {GetUser} = useAuth();
  const [user,setuser] = useState<userData>({});

  useEffect(() => {
    const fetchUser = async() => {
      const user = await GetUser(email);
      setuser(user);
    }

    fetchUser();
  },[])
  
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
            <Text> Hi {user.firstname} </Text>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  },
})