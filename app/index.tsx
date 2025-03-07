import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  SafeAreaView,
  Image,
  StatusBar 
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React,{useRef,useState} from 'react'
import { router } from 'expo-router'
import "../global.css"
import CustomeButtom from '@/components/CustomeButtom'


const { width, height } = Dimensions.get('window');

const index = () => {

  const onboardingData = [
    {
      id: 1,
      title: 'Get variety of professional services',
      description: 'Get differet professional services anywhere you are',
      image: require('../assets/images/1.png'),
    },
    {
      id: 2,
      title: 'Connect with professionals',
      description: 'Connect with highly skilled and professional service providers',
      image: require('../assets/images/2.png'),
    },
    {
      id: 3,
      title: 'At affordable prices',
      description: 'Get professionals for cheap cost',
      image: require('../assets/images/3.png'),
    }

  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  // To handle changing slide on swipe
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentSlideIndex(newIndex);
  };

   // Render each item in FlatList
   const renderItem = ({ item }: any) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {/* <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentSlideIndex ? '#00A8E8' : '#D3D3D3' },
              ]}
            />
          ))}
        </View> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
      />
      <View style={styles.footer}>
        {currentSlideIndex === onboardingData.length - 2 ? (
          <View
            style={{
              width: '85%'
            }}
          >
            <CustomeButtom 
            title='Get Started'
            onPress={() => router.push('/welcome')}
            color={'#1AACD5'}
            />
          </View>
        ) : (
          <View
            style={{
              width: '85%'
            }}
          >
            <CustomeButtom 
            title='Next'
            onPress={() => {
              ref.current.scrollToIndex({ index: currentSlideIndex + 1 });
            }}
            color={'#1AACD5'}
          />
          </View>
        )}
      </View>
      <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  slide: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  image: { 
    height: height / 1.5, 
    resizeMode: 'cover', 
    marginBottom: 20, 
    width: '100%'
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center' 
  },
  description: { 
    fontSize: 17, 
    color: '#555', 
    textAlign: 'center', 
    paddingHorizontal: 40 ,
    marginTop: 9
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
})