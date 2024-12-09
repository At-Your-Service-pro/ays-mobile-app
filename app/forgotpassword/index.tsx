import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import React,{useState} from 'react'
import CustomeButtom from '@/components/CustomeButtom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router,useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Validationerror from '@/components/Validationerror';

const index = () => {
 const formdata = useFormik({
  initialValues: {
    email: ''
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Please enter your email')
  }),
  onSubmit: (values) => {
    // navigation.navigate('ResetPasswordScreen', { email: values.email });
    // console.log(values);
    router.push({
      pathname: '/otp',
      params: {
        email: values.email,
        previous_screen: 'reset_pass'
      }
    })
  }
 });

  const {message} = useLocalSearchParams();
  console.log(`message: ${message}`);
 
  return (
    <SafeAreaView 
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
        style={{
          flex: 1
        }}
      >
        <ScrollView
          style={styles.headerContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.header}
            onPress={() => router.back()}
          >
            <AntDesign name="left" size={24} color="black"/>
          </TouchableOpacity>
          <View>
            <Text
              style={styles.headerText}
            > Reset password </Text>
            <Text
              style={styles.headerSubText} 
            > Enter email associated with your account. We{'\'ll'} send an otp code to verify that the account is yours </Text>
          </View>
          <View
            style={styles.loginContainer} 
          >
            <View>
              <Text
                style={styles.loginTextHeader}
              > Email </Text>
              <View 
                style={styles.loginContainerText}
              >
                <Fontisto name="email" size={24} color="black" />
                <TextInput
                    id='email'
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    style={styles.loginInput}
                    onChangeText={formdata.handleChange('email')}
                    onBlur={formdata.handleBlur('email')}
                  />
              </View>
              {
                formdata.touched.email && formdata.errors.email && (<Validationerror title={formdata.errors.email}/>)
              }
            </View>
          </View>
          <CustomeButtom 
            title="Continue" 
            onPress={formdata.handleSubmit}
          />
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
    marginTop: '15%'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20
  },
  headerSubText: {
    marginTop: 10,
    fontSize: 15,
    color:  '#5E5E5E'
  },
  loginContainer: {
    marginTop: 40,
    marginBottom: 20
  },
  loginContainerText: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 10
  },
  loginTextHeader: {
    fontSize: 20,
    fontWeight: 'medium'
  },
  loginInput: {
    padding: 7,
    marginBottom: 10,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 18,
    width: '85%'
  },
  header: {
  paddingBottom: 15
  },

})