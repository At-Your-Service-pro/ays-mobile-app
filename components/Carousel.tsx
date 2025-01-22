import { StyleSheet, Text, View, Modal, Animated,TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const  Carousel = ({ visible, children,setImages }: any) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      setShowModal(true); // Ensure the modal is shown
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 10,
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setShowModal(false)); // Close modal after animation
    }
  }, [visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            // styles.modalContainer,
            { transform: [{ scale: scaleValue }] }, // Apply the scale animation
          ]}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: '5%',
              marginTop: '5%'
            }}
            onPress={() => setImages(false)}
          >
            <AntDesign name="closecircle" size={30} color="white" />
          </TouchableOpacity>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.88)',
    justifyContent: 'center',
    alignItems: 'center',
  },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     elevation: 20,
//   },
});
