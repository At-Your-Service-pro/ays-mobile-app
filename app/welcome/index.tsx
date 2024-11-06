import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import React,{useState} from 'react'
import CustomeButtom from '@/components/CustomeButtom';
import { TouchableOpacity } from 'react-native-gesture-handler';

const index = () => {
  const [formData,setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: ''
  });
  const [showPassword,setShowPassword] = useState(false);

  const handleChange = (event: any) => {
    setFormData({
     ...formData,
      [event.target.name]: event.target.value
    })
  }
 
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={styles.headerContainer}
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
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  style={styles.loginInput}
                />
             </View>
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
                  placeholder="Enter Password"
                  keyboardType="default"
                  style={styles.loginInput}
                  secureTextEntry={!showPassword}
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

        </View>
      </SafeAreaView>
    </View>
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
    marginTop: '20%'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  headerSubText: {
    marginTop: 10,
    fontSize: 18
  },
  loginContainer: {
    marginTop: 40,
    marginBottom: 20
  },
  loginContainerText: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
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
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 18,
    width: '85%'
  }

})