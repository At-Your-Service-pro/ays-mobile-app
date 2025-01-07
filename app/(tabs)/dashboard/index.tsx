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
import React,{useEffect,useState} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { userData } from '@/enums/enums';

const index = () => {
  const {email} = useLocalSearchParams();
  const {GetUser} = useAuth();
  const [user,setuser] = useState<userData>({});

  const loadUser = async () => {
    try {
      const data = await GetUser(email);
      setuser(data.user);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
      loadUser();
  },[]);

  
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
        		<Text style={styles.headerText}> Hi {user.firstname} , </Text>
          	</View>
          <View
		  	style={styles.imageContainer}
		  >
			<Image 
				source={require('../../../assets/images/bg.png')}
				style={styles.headerImage}
			/>
			<Text
				style={styles.imageText}
			>
				Get 50% on your first service order 
			</Text>
          </View>
		  <View
		  	style={styles.categories}
		  >
			<Text
				style={{
					backgroundColor: '#1AACD5',
					color: '#FFFFFF',
					padding: 10,
					fontSize: 17,
					borderRadius: 7,
					width: '35%',
					textAlign: 'center'
				}}
			> Categories</Text>
			<Text 
				style={{
					color: '#1AACD5',
					fontSize: 16
				}}> All </Text>
		  </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '95%',
    marginHorizontal: 'auto',
    marginTop: '10%'
  },
  headerText: {
    fontSize: 20
  },
  headerImage: {
	width: '100%', 
	marginHorizontal: 'auto',
	height: 100, 
	borderRadius: 10
  },
  imageContainer: {
	marginTop: '3%'
  },
  imageText: {
	position: 'absolute',
	top: '20%',
	left: '5%',
	color: 'white',
	fontSize: 16,
	width: '60%',
	fontStyle: 'italic'
  },
  categories: {
    marginTop: '5%',
	  display: 'flex',
	  flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  }  
})