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
    Modal,
    Dimensions 
  } from 'react-native';
  import React,{useState}from 'react';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { router } from 'expo-router';
  import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';

  const { width, height } = Dimensions.get('window');
  
  const serviceDetails = () => {
    const [showImages,setImages] = useState(false);

    const services = {
        id: '1',
        title: 'Elisah Plumbing Installation',
        category: 'Plumbing',
        loaction: 'Spintex',
        image: [
          {
            id: 1,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 2,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 3,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 4,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 5,
            uri: require('../../assets/images/3.png'),
          },
          {
            id: 6,
            uri: require('../../assets/images/3.png'),
          }
        ],
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
             <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                  <AntDesign name="left" size={24} color="black"  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}> {services.title}</Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems: 'center'
                  }}
                >
                  {
                    services.image.slice(0,2).map((image) => (
                      <TouchableOpacity
                        key={image.id}
                        onPress={() =>setImages(true)}
                      >
                          <Image 
                              source={image.uri}
                              style={{
                                width: width/2, 
                                height: height/7,
                                backgroundColor: '#E4E4E4',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10
                              }}
                          />
                    </TouchableOpacity>
                    ))
                  }
                  
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: '2%'
                  }}
                  onPress={() =>setImages(true)}
                >
                  <Image 
                      source={services.image[2].uri}
                      resizeMode='cover'
                      style={{
                        width: width, 
                        height: height/6,
                        backgroundColor: '#E4E4E4',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Carousel
                visible={showImages}
                setImages={setImages}
              >
                <FlatList 
                  data={services.image}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  renderItem={({item,index}) => (
                    <CarouselItem item={item} index={index}/>
                  )}
                />
              </Carousel>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  
  export default serviceDetails 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    headerContainer: {
      width: '95%',
      marginHorizontal: 'auto',
      marginTop: '2%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      width: '85%',
    },
    headerText: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
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
    image: {
      width: '40%'
    }
  })