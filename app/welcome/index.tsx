import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput ,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import React,{useState,useEffect} from 'react'
import CustomeButtom from '@/components/CustomeButtom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router,useLocalSearchParams } from 'expo-router';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Validationerror from '@/components/Validationerror';
import { useAuth } from '@/hooks/useAuth';

const index = () => {
  const {LoginUser} = useAuth();
  const [error,setError] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const formData = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
       .email('Invalid email')
       .required('Email is required'),
      password: Yup.string()
       .min(6, 'Password must be at least 6 characters long')
       .required('Password is required')
    }),
    onSubmit: async(values) => {
      setIsLoading(true);
      const response = await LoginUser(values);
      if(response.statusCode === 401){
        setIsLoading(false);
        setTimeout(() => {

        },1500);
        setError(response.message);
      } else {
        setIsLoading(false);
        setError('');
        router.push({
          pathname: '/dashboard',
          params: {email: values.email}
        });
      }
      
      // TODO: Send the form data to the server
    }
  })
  const [showPassword,setShowPassword] = useState(false);

  // useEffect(() => {
  //   if(message === 'user_created'){
  //     Toast.show({
  //       text1: "Account created successfully",
  //       text2: "login",
  //       type: "success",
  //     });
  //   }
  // },[]);
 
  return (
    <SafeAreaView 
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.headerContainer}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text
              style={styles.headerText}
            >Welcome!</Text>
            <Text
              style={styles.headerSubText} 
            >Fill out your details to log you in</Text>
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
                    onChangeText={formData.handleChange('email')}
                    onBlur={formData.handleBlur('email')}
                  />
              </View>
            </View>
            {
              formData.touched.email && formData.errors.email && (<Validationerror title={formData.errors.email}/>)
            }
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
                      name={showPassword ? 'eye-with-line' : 'eye'} 
                      size={20} 
                      color="black" 
                    />
                  </TouchableOpacity>
              </View>
            </View>
            {
              formData.touched.password && formData.errors.password && (<Validationerror title={formData.errors.password}/>)
            }
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => router.push({
                pathname: '/forgotpassword',
                params:{
                  message: 'forgot_pass'
                }
              })}
            >
              <Text
                style={styles.forgotPasswordText}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
            {
              error && (<Validationerror title={`${error}, try again`}/>)
            }
          </View>
          <CustomeButtom 
            title="Login" 
            onPress={formData.handleSubmit}
            isLoading={isLoading}
          />
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <View 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  color: '#5E5E5E'
                }}
              >
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => router.push('/signup')}
              > 
                <Text 
                  style={{fontSize: 20,fontWeight: 'regular',marginLeft: 5}}
                > Sign up </Text>
              </TouchableOpacity>
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
    flex: 1
  },
  headerContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: '20%'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  headerSubText: {
    marginTop: 10,
    fontSize: 15,
    color: '#5E5E5E'
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
  forgotPasswordContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 20
  },
  forgotPasswordText: {
    fontSize: 17,
    fontWeight: 'regular',
  }

})