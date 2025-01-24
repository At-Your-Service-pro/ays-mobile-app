import { StyleSheet, Text, View, Modal, Animated,Dimensions } from 'react-native';
import React from 'react';

const BottomSheet = ({ visible, children }: any) => {
  const [showModal, setShowModal] = React.useState(visible);
  const translateY = React.useRef(new Animated.Value(Dimensions.get('window').height)).current; // Start from off-screen


  React.useEffect(() => {
    if (visible) {
      setShowModal(true); // Ensure the modal is shown
      Animated.spring(translateY, {
        toValue: Dimensions.get('window').height * 0, // Animate to 30% of the screen height
        friction: 10,
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: Dimensions.get('window').height, // Animate back off-screen
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowModal(false)); // Close modal after animation
    }
  }, [visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: translateY }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
  },
});
