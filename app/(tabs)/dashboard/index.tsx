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
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import React,{useEffect,useState} from 'react';
import { useLocalSearchParams,router,Link } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { userData } from '@/enums/enums';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { setSaveEmail } from '@/redux/features/users';
import { useSelector } from 'react-redux';

const index = () => {
  const {email} = useLocalSearchParams();
  const {GetUser} = useAuth();
  const [user,setuser] = useState<userData>({});
  const dispatch = useDispatch();
  const selectedServices = useSelector((state: any) => state.request.selectedServices);

  const loadUser = async () => {
    try {
      const data = await GetUser(email);
      setuser(data.user);
      dispatch(setSaveEmail(email));
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
    },
    {
      id: '4',
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
      id: '5',
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
      id: '6',
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
        		<Text style={styles.headerText}> Hello</Text>
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
            <TouchableOpacity
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              onPress={() => {
                router.push('/categories');
              }}
            >
              <Text 
                style={{
                  fontSize: 16
                }}> All </Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <FlatList
              data={_categories}
              keyExtractor={(item) => item.id}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false} // Hides the scrollbar
              renderItem={({ item }) => (
                <TouchableOpacity  
                  style={styles.subcategory}
                  onPress={() => {
                    router.push('/categories/[ItemId]');
                  }}
                >
                  <Text style={{textAlign: 'center'}}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.popularContainer}>
              <View style={styles.popularCategories}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'semibold'
                  }}
                > Popular services </Text>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    router.push('/popular');
                  }}
                >
                  <Text 
                    style={{
                      fontSize: 16
                    }}> All </Text>
                  <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{
                  flex: 1
                }}
                >
                <FlatList
                  data={services}
                  keyExtractor={(item) => item.id}
                  horizontal // Enables horizontal scrolling
                  showsHorizontalScrollIndicator={false} // Hides the scrollbar
                  renderItem={({ item }) => (
                    <TouchableOpacity  
                      style={styles.popularSub}
                      onPress={() => {
                        router.push({
                          pathname: '/serviceDetails', // Correct route
                          params: { ItemId: item.id }, // Pass the dynamic parameter
                        });
                      }}
                    >
                      <Image 
                        source={item.image}
                        style={{width: 200, height: 100, borderRadius: 10,backgroundColor: '#E4E4E4'}}
                        resizeMode='cover'
                      />
                      <View>
                        <View 
                          style={{
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            marginTop: 10
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: 'semibold' 
                            }}
                          >{item.title}</Text>
                          <AntDesign name="heart" size={20} color={'#0598AC'} />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontWeight: 'light'
                            }}
                          >{item.loaction}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
          </View>
          <View 
            style={{
              marginTop: '6%'
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'semibold'
                }}
              > All services </Text>
            </View>
            <View>
              <View>
                {
                  services.map((item) => (
                    <View  style={styles.subServices} key={item.id}>
                      <TouchableOpacity
                        onPress={() => router.push('/serviceDetails')}
                      >
                        <Image 
                          source={item.image}
                          style={{width: 'auto', height: 140, borderRadius: 10,backgroundColor: '#E4E4E4'}}
                          resizeMode='cover'
                        />
                      </TouchableOpacity>
                      <View>
                        <View 
                          style={{
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            marginTop: 10
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: 'semibold' 
                            }}
                          >{item.title}</Text>
                          <TouchableOpacity>
                            <AntDesign name="heart" size={20} color={'#0598AC'} />
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontWeight: 'light'
                            }}
                          >{item.loaction}</Text>
                        </View>
                      </View>
                  </View>
                  ))
                }
              </View>   
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
    width: '90%',
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
	borderRadius: 10,
  backgroundColor: '#E4E4E4'
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
  popularCategories:{
	  display: 'flex',
	  flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  categoryContainer: {
    marginTop: '4%'
  },
  subcategory: {
    backgroundColor: '#E4E4E4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: '2.5%',
  },
  popularContainer: {
    marginTop: '10%'
  },
  popularSub: {
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: '3%'
  },
  subServices: {
    paddingVertical: 10,
    borderRadius: 5
  },
  floatingButton: {
    position: 'absolute',
      backgroundColor: '#1AACD5',
      width: '95%',
      height: 50,
      borderRadius: 10,
      bottom: -60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }

})