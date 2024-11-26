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
import * as Yup from 'yup';
import {useFormik} from 'formik';
import Validationerror from '@/components/Validationerror';
import { useAuth } from '@/hooks/useAuth';
import { saveFormData } from '@/utils/formData';

const {width,height} = Dimensions.get('window');

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {VerifyUserExists,error} = useAuth();
  const [loading,setLoading] = useState(false);

  const signUpForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phonenumber: ''
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required('Please enter your first name'),
      lastname: Yup.string().required('Please enter your  last name'),
      email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
      password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Please enter your password'),
      phonenumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Please enter your phone number').required('Please enter your phone number')
    }),
    onSubmit: async (values, actions) => {
      try {
        const {firstname,lastname,email,password,phonenumber} = values;
       const res = await VerifyUserExists({
        firstname,
        lastname,
        email,
        password,
        phonenumber
       })

       console.log(res);
      
      } catch (err) {
        console.error('Account creation failed:', err);
        // Optionally show error to the user
      } finally {
        actions.setSubmitting(false); // Reset submission state
      }
    },
    
  })
  

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
                    value={signUpForm.values.firstname}
                    onChangeText={signUpForm.handleChange('firstname')}
                    onBlur={signUpForm.handleBlur('firstname')}
                  />
                </View>
              </View>
              { signUpForm.touched.firstname && signUpForm.errors.firstname && (<Validationerror title={signUpForm.errors.firstname} />)
                
              }
              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Lastname</Text>
                <View style={styles.loginContainerText}>
                  <AntDesign name="user" size={24} color="black" />
                  <TextInput
                    placeholder=""
                    keyboardType="default"
                    style={styles.loginInput}
                    value={signUpForm.values.lastname}
                    onChangeText={signUpForm.handleChange('lastname')}
                    onBlur={signUpForm.handleBlur('lastname')}
                  />
                </View>
              </View>
              { signUpForm.touched.lastname && signUpForm.errors.lastname && (<Validationerror title={signUpForm.errors.lastname} />)}

              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Email</Text>
                <View style={styles.loginContainerText}>
                  <Fontisto name="email" size={24} color="black" />
                  <TextInput
                    placeholder=""
                    keyboardType="email-address"
                    style={styles.loginInput}
                    value={signUpForm.values.email}
                    onChangeText={signUpForm.handleChange('email')}
                    onBlur={signUpForm.handleBlur('email')}
                  />
                </View>
              </View>
              {signUpForm.touched.email && signUpForm.errors.email && (<Validationerror title={signUpForm.errors.email} />)}

              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Password</Text>
                <View style={styles.loginContainerText}>
                  <TextInput
                    placeholder="Enter Password"
                    keyboardType="default"
                    style={styles.loginInput}
                    secureTextEntry={!showPassword}
                    value={signUpForm.values.password}
                    onChangeText={signUpForm.handleChange('password')}
                    onBlur={signUpForm.handleBlur('password')}
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
              {signUpForm.touched.password && signUpForm.errors.password && (<Validationerror title={signUpForm.errors.password} />)}

              <View style={{ marginTop: 20 }}>
                <Text style={styles.loginTextHeader}>Phone number</Text>
                <View style={styles.loginContainerText}>
                  <TextInput
                    placeholder="e.g 0245679625"
                    keyboardType="phone-pad"
                    style={styles.loginInput}
                    value={signUpForm.values.phonenumber}
                    onChangeText={signUpForm.handleChange('phonenumber')}
                    onBlur={signUpForm.handleBlur('phonenumber')}
                  />
                </View>
              </View>
              {signUpForm.touched.phonenumber && signUpForm.errors.phonenumber && (<Validationerror title={signUpForm.errors.phonenumber} />)}

              {/* <View style={styles.error}>
              {
                error && <Validationerror title='User already exists'/>
              }
            </View> */}
              <View style={styles.privacy}>
                <Text>
                  By tapping "Continue" you agree to our <Text style={{ color: '#1AACD5' }}>Terms of Use</Text> and <Text style={{ color: '#1AACD5' }}>Privacy Policy</Text>
                </Text>
              </View>
                <TouchableOpacity 
                  style={styles.containerStyle}
                  onPress={() => signUpForm.handleSubmit()}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1
                    }}
                  >
                    <Text
                      style={styles.textStyle}
                    >{'Continue'}</Text>
                  </View>
                </TouchableOpacity>
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
  error: {
    marginVertical: 15
  },
  containerStyle: {
    backgroundColor: '#1AACD5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
    width: '100%',
    height: height / 13
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'medium',
    textAlign: 'center',
  }
});
