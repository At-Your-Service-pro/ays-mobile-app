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
import Entypo from '@expo/vector-icons/Entypo';
import React,{useState} from 'react';
import CustomeButtom from '@/components/CustomeButtom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router,useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Validationerror from '@/components/Validationerror';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '@/hooks/useAuth';
import Toast from 'react-native-toast-message';

const index = () => {
  const {email,previous_screen} = useLocalSearchParams();
  const [showPassword,setShowPassword] = useState(false);
  const {UpdatePassword} = useAuth();
  
  const formData = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async(values) => {  
      const response = await UpdatePassword({
        email,
        password: values.password
      })
      if(response.statusCode == 200){
        Toast.show({
          text1: 'Password updated successfully',
          type:'success',
        });

        setTimeout(() => {
          router.push('/welcome');
        },1000)
      
      }
    },
  });
  


  return (
    <SafeAreaView 
      style={styles.container}
    >
       <Toast 
        position="top" 
        topOffset={50} 
        visibilityTime={3000} 
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
        style={{
          flex:1
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
            > Create new password </Text>
            <Text
              style={styles.headerSubText} 
            > Your new password must be different from previous used password </Text>
          </View>
          <View
                style={{
                  marginTop: 20
                }}
          >
              <Text
                style={styles.loginTextHeader}
              > Password </Text>
              <View 
                style={styles.loginContainerText}
              >
                <TextInput
                    id='password'
                    placeholder="Enter Password"
                    keyboardType="default"
                    style={styles.loginInput}
                    secureTextEntry={!showPassword}
                    onChangeText={formData.handleChange('password')}
                    onBlur={formData.handleBlur('password')}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Entypo 
                      name={showPassword ? 'eye' : 'eye-with-line'} 
                      size={20} 
                      color="black" 
                    />
                  </TouchableOpacity>
              </View>
            </View>
            {
              formData.touched.password && formData.errors.password && (<Validationerror title={formData.errors.password}/>)
            }
            <View
                style={{
                  marginTop: 20
                }}
              >
              <Text
                style={styles.loginTextHeader}
              > Confirm Password </Text>
              <View 
                style={styles.loginContainerText}
              >
                <TextInput
                    id='confirmpassword'
                    placeholder="Confirm Password"
                    keyboardType="default"
                    style={styles.loginInput}
                    secureTextEntry={!showPassword}
                    onChangeText={formData.handleChange('confirmPassword')}
                    onBlur={formData.handleBlur('confirmPassword')}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Entypo 
                      name={showPassword ? 'eye' : 'eye-with-line'} 
                      size={20} 
                      color="black" 
                    />
                  </TouchableOpacity>
              </View>
            </View>
              {
                formData.touched.confirmPassword && formData.errors.confirmPassword && (<Validationerror title={formData.errors.confirmPassword}/>)
              }
            <View
              style={styles.button}
            >
              <CustomeButtom 
                title="Reset password" 
                onPress={formData.handleSubmit}
                color={'#1AACD5'}
              />
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
  button: {
    marginTop: 40
  },
  error: {
    borderWidth: 1,
    borderColor: '#E60023',
    borderRadius: 10
  },
  errorText: {
    color: '#E60023',
    fontSize: 15,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10
  },
  toast: {
    zIndex: 100, // Ensures it stands out above other components
    elevation: 10, // For Android (zIndex alone doesn’t work on Android)
    backgroundColor: '#333', // Dark background
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000', // Adds shadow for a "floating" effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

})