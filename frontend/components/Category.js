import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {handlePendingView } from './Alerts';

const Category = ({ image, title, navigation, targetScreen }) => {
  // Check if the image prop is a URL or a local image
  const isURL = typeof image === 'string' && image.startsWith('http');

  // Function to handle the press event
  const handlePress = () => {
    if (navigation && targetScreen) {
      navigation.navigate(targetScreen);
    } else {
      console.log("Navigation or targetScreen not provided");
      handlePendingView()
    }
  };

  

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View >
        <Image
          source={isURL ? { uri: image } : image} // Conditionally set the source
          style={styles.image}
          onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
          onLoad={() => console.log('Image loaded successfully')}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default Category;

