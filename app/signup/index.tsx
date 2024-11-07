import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React,{useState} from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import CustomeButtom from '@/components/CustomeButtom';
import Fontisto from '@expo/vector-icons/Fontisto';

const index = () => {
  const [showPassword,setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      >
        <View
          style={styles.header}
        >
          <AntDesign name="left" size={24} color="black" onPress={() => router.back()}/>
          <View>
            <Text style={styles.headerText}> Create Account </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginHorizontal: 'auto'
          }}
        >
          <View
            style={{
              marginTop: 20
            }}
          >
              <Text
                style={styles.loginTextHeader}
              > Firstname </Text>
              <View 
                style={styles.loginContainerText}
              >
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                    placeholder=""
                    keyboardType="default"
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
              > Lastname </Text>
              <View 
                style={styles.loginContainerText}
              >
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                    placeholder=""
                    keyboardType="default"
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
              > Email </Text>
              <View 
                style={styles.loginContainerText}
              >
                <Fontisto name="email" size={24} color="black" />
                <TextInput
                    placeholder=""
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
          <View
            style={{
              marginTop: 20
            }}
          >
              <Text
                style={styles.loginTextHeader}
              > Phone number </Text>
              <View 
                style={styles.loginContainerText}
              >
                <TextInput
                    placeholder="e.g 0245679625"
                    keyboardType="default"
                    style={styles.loginInput}
                  />
              </View>
            </View>
            <View
              style={styles.privacy}
            >
               <Text>
                By tapping "Continue" you agree to our <Text style={{color: '#1AACD5'}}>Terms of Use</Text> and <Text style={{color: '#1AACD5'}}>Privacy Policy</Text>
               </Text>
            </View>
            <CustomeButtom 
              title='Continue'
              onPress={() => router.push('/otp')}
            />
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
    marginTop: '10%',
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
  },
  loginContainerText: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 10
  },
  loginTextHeader: {
    fontSize: 20,
    fontWeight: 'regular'
  },
  loginInput: {
    padding: 7,
    marginBottom: 10,
    borderRadius: 7,
    marginTop: 10,
    fontSize: 18,
    width: '85%'
  },
  privacy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  }
})