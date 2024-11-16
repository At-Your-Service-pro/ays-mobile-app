import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomeButtom from '@/components/CustomeButtom';

const { height } = Dimensions.get('window');

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: ''
  });

  const handleChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust for platform
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: '300%' }}>
            <View style={styles.header}>
              <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />
              <View>
                <Text style={styles.headerText}>Create Account</Text>
              </View>
            </View>
            <View style={{ width: '90%', marginHorizontal: 'auto' }}>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Firstname</Text>
                <View style={styles.loginContainerText}>
                  <AntDesign name="user" size={24} color="black" />
                  <TextInput
                    placeholder=""
                    keyboardType="default"
                    style={styles.loginInput}
                    onChangeText={(text) => handleChange('firstname', text)}
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Lastname</Text>
                <View style={styles.loginContainerText}>
                  <AntDesign name="user" size={24} color="black" />
                  <TextInput
                    placeholder=""
                    keyboardType="default"
                    style={styles.loginInput}
                    onChangeText={(text) => handleChange('lastname', text)}
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Email</Text>
                <View style={styles.loginContainerText}>
                  <Fontisto name="email" size={24} color="black" />
                  <TextInput
                    placeholder=""
                    keyboardType="email-address"
                    style={styles.loginInput}
                    onChangeText={(text) => handleChange('email', text)}
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Password</Text>
                <View style={styles.loginContainerText}>
                  <TextInput
                    placeholder="Enter Password"
                    keyboardType="default"
                    style={styles.loginInput}
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => handleChange('password', text)}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Entypo 
                      name={showPassword ? 'eye' : 'eye-with-line'} 
                      size={20} 
                      color="black" 
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Phone number</Text>
                <View style={styles.loginContainerText}>
                  <TextInput
                    placeholder="e.g 0245679625"
                    keyboardType="phone-pad"
                    style={styles.loginInput}
                    onChangeText={(text) => handleChange('phonenumber', text)}
                  />
                </View>
              </View>
              <View style={styles.privacy}>
                <Text>
                  By tapping "Continue" you agree to our <Text style={{ color: '#1AACD5' }}>Terms of Use</Text> and <Text style={{ color: '#1AACD5' }}>Privacy Policy</Text>
                </Text>
              </View>
              <CustomeButtom 
                title="Continue"
                onPress={() => router.push('/otp')}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 'auto',
    marginTop: '10%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '75%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginContainerText: {
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 10,
  },
  loginTextHeader: {
    fontSize: 20,
    fontWeight: '400',
  },
  loginInput: {
    padding: 7,
    marginBottom: 10,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 18,
    width: '85%',
  },
  privacy: {
    alignItems: 'center',
    marginTop: 20,
    width: '85%',
    marginHorizontal: 'auto',
    marginBottom: 10,
  },
});
