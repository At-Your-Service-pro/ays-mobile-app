import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList,
  TouchableOpacity 
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

  const _categories = [
    {
      id: '1',
      title: 'Plumbing',
    },
    {
      id: '2',
      title: 'Floor fitters',
    },
    {
      id: '3',
      title: 'Capenters',
    },
    {
      id: '4',
      title: 'Plumbing',
    },
    {
      id: '5',
      title: 'Floor fitters',
    },
    {
      id: '6',
      title: 'Capenters',
    }
  ]

  const services = [
    {
      id: '1',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '2',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    },
    {
      id: '3',
      title: 'Plumbing Installation',
      category: 'Plumbing',
      loaction: 'Spintex',
      image: require('../../../assets/images/3.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      phonenumber: '0245861319',
      sub_services: [
        {
          title: 'leak repair',
          price: '$100'
        },
        {
          title: 'leak repair',
          price: '$100'
        }
      ]
    }
  ]

  
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
      <View style={styles.categoryContainer}>
        <FlatList
          data={_categories}
          // keyExtractor={(item) => item.id}
          horizontal // Enables horizontal scrolling
          showsHorizontalScrollIndicator={false} // Hides the scrollbar
          renderItem={({ item }) => (
            <TouchableOpacity  style={styles.subcategory}>
              <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.popularContainer}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'semibold'
              }}
            > Popular services </Text>
          </View>
          <View>

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
    marginTop: '7%',
	  display: 'flex',
	  flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  categoryContainer: {
    marginTop: '4%',
    flex: 1,
  },
  subcategory: {
    backgroundColor: '#E4E4E4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  popularContainer: {
    marginTop: '10%'
  }

})