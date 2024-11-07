import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import React,{useState} from 'react'
import CustomeButtom from '@/components/CustomeButtom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const index = () => {
  const [formData,setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword,setShowPassword] = useState(false);

  const handleChange = (event: any) => {
    setFormData({
     ...formData,
      [event.target.id]: event.target.value
    })
  }
 
  return (
    <SafeAreaView 
      style={styles.container}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
        <CustomeButtom 
          title="Reset password" 
          onPress={() => router.push('')}
        />
      </ScrollView>
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
    fontWeight: 'bold'
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