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
    Dimensions, 
    ActivityIndicator
  } from 'react-native';
  import React,{useState,useCallback,useRef}from 'react';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import { router } from 'expo-router';
  import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/CarouselItem';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

  const { width, height } = Dimensions.get('window');
  
  const serviceDetails = () => {
    const [showImages,setImages] = useState(false);
    const [isopen,setIsOpen] = useState(false);
    const [selectedSubServices, setSelectedSubServices] = useState([]);
    const [loadingSubService, setLoadingSubService] = useState(null);

    const handleToggleSubService = (id:any) => {
      if (loadingSubService === id) return; // Prevent duplicate interactions
      setLoadingSubService(id);
  
      setTimeout(() => {
        setLoadingSubService(null);
        setSelectedSubServices((prev:any) =>
          prev.includes(id)
            ? prev.filter((serviceId: any) => serviceId !== id) // Deselect
            : [...prev, id] // Select
        );
      }, 500); // Simulate animation duration
    };
  
    const handleFloatingButtonPress = () => {
      router.push({
        pathname: '/requestsDetails',
        params:  {
          subServices: selectedSubServices
        }
      })
    };
  
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
            id: 1,
            title: 'leak repair',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '100'
          },
          {
            id: 2,
            title: 'Sewages',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '200'
          },
          {
            id: 3,
            title: 'leak repair',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '100'
          },
          {
            id: 4,
            title: 'Sewages',
            description: 'Fixing of leakages from toilet flapper value, pipes and etc',
            price: '200'
          }
        ]
      }

    const toggleSheet = () => {
      setIsOpen(!isopen);
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
                    services.image.slice(0,1).map((image) => (
                      <View
                        key={image.id}
                      >
                          <Image 
                              source={image.uri}
                              style={{
                                width: width/2.5, 
                                height: height/6,
                                backgroundColor: '#E4E4E4',
                                borderTopLeftRadius: 10
                              }}
                          />
                    </View>
                    ))
                  }
                  {
                    services.image.slice(1,2).map((image) => (
                      <View
                        key={image.id}
                        style={{
                          
                        }}
                      >
                          <Image 
                              source={image.uri}
                              style={{
                                width: width/1.88, 
                                height: height/6,
                                backgroundColor: '#E4E4E4',
                                borderTopRightRadius: 10
                              }}
                          />
                          <View
                            style={{
                              position: 'absolute', 
                              bottom: 0, 
                              backgroundColor: 'rgba(0,0,0,0.3)', 
                              width: '100%', 
                              height: '100%', 
                              borderTopRightRadius: 10,
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                backgroundColor: 'white',
                                width: '90%',
                                borderRadius: 5, 
                                position: 'absolute',
                                bottom: 0,
                                marginBottom: '10%',
                                marginLeft: '5%',
                                padding: '0%'

                              }}
                              onPress={() =>setImages(true)}
                            >
                              <View
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  padding: '2%'
                                }}
                              >
                                <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                                <Text 
                                  style={{
                                    fontSize: 18
                                  }}
                                > Show all photos </Text>
                              </View>
                            </TouchableOpacity>  
                          </View>
                    </View>
                    ))
                  }
                  
                </View>
                <View
                  style={{
                    marginTop: '2%'
                  }}
                >
                  <Image 
                      source={services.image[2].uri}
                      resizeMode='cover'
                      style={{
                        width: width/1.06, 
                        height: height/5,
                        backgroundColor: '#E4E4E4',
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 10,
                    }}
                  />
                </View>
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

              {/* Description container */}
              <View style={styles.descriptionContainer}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    marginBottom: '5%'
                  }}
                >Description</Text>
                <Text>
                  {services.description}
                </Text>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Ionicons name="location-outline" size={24} color="black" /> 
                  <Text
                    style={{
                      fontSize: 18
                    }}
                  >Location</Text>
                </View>
                <Text
                  style={{
                    fontSize: 18
                  }}
                >{services.loaction}</Text>
              </View>
              {/* <View 
                  style={{
                      width: '100%',
                      borderWidth: 0.5,
                      opacity: 0.2,
                      marginTop: '2%'
                  }}
              /> */}
              <View
                style={{
                  marginTop: '10%'
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    marginBottom: '5%'
                  }}
                > Services Offered </Text>
                {/* <View 
                  style={{
                      width: '100%',
                      borderWidth: 0.5,
                      opacity: 0.2,
                      marginTop: '5%'
                  }}
                /> */}
                <View>
                {services.sub_services.map((subService) => (
            <View
              key={subService.id}
              style={[
                styles.subServiceContainer,
                selectedSubServices.includes(subService.id) && styles.selectedContainer,
              ]}
            >
              <View style={styles.subServiceDetails}>
                <Text style={styles.subServiceTitle}>{subService.title}</Text>
                <Text style={styles.subServiceDescription}>{subService.description}</Text>
                <Text style={styles.subServicePrice}>${subService.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleToggleSubService(subService.id)}
                disabled={loadingSubService === subService.id}
              >
                {loadingSubService === subService.id ? (
                  <ActivityIndicator size="small" color="#1AACD5" />
                ) : (
                  <AntDesign
                    name={
                      selectedSubServices.includes(subService.id) ? 'closecircle' : 'pluscircle'
                    }
                    size={30}
                    color="#1AACD5"
                  />
                )}
              </TouchableOpacity>
            </View>
          ))}
                </View>
              </View>
          </ScrollView>
          {selectedSubServices.length > 0 && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => {
                router.push('/requestsDetails')
              }}
            >
              <Text style={styles.floatingButtonText}>
                View {selectedSubServices.length} request{selectedSubServices.length > 1 && 's'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
      width: '82%',
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
    },
    descriptionContainer: {
      marginTop: '5%',
      backgroundColor: '#97E8FF',
      padding: '5%',
      borderRadius: 10
    },
    sheetContent: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    sheetTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    closeButton: {
      marginTop: 20,
      backgroundColor: "#dc3545",
      padding: 10,
      borderRadius: 5,
    },
    closeButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    subServiceTitle: {
      fontSize: 18,
    },
    subServiceDescription: {
      marginTop: '5%',
      color: '#5E5E5E',
      width: '70%',
    },
    subServicePrice: {
      fontSize: 18,
      marginTop: '4%'
    },
    sheetPrice: {
      marginTop: 10,
      fontWeight: 'bold',
    },
    subServiceContainer: {
      backgroundColor: '#E4E4E4',
      borderRadius: 10,
      marginBottom: 16,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedContainer: {
      borderLeftWidth: 5,
      borderLeftColor: '#1AACD5',
    },
    subServiceDetails: {
      width: '70%',
    },
    floatingButton: {
      position: 'absolute',
      backgroundColor: '#1AACD5',
      width: '95%',
      height: 50,
      borderRadius: 10,
      bottom: 10,
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