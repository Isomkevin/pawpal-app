import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

const OnboardingScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://th.bing.com/th/id/R.cfcea7bab839544cbd50bad837242ed3?rik=i38TTljz3p%2foig&pid=ImgRaw&r=0' }}
      style={styles.image}
    />
    <Text style={styles.title}>ADOPT DON'T SHOP</Text>
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, mauris consectetur adipiscing elit.
    </Text>
    <AppButton 
      title="Next" 
      onPress={() => navigation.navigate('HomeTabs')}
      style={styles.button}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
  },
});

export default OnboardingScreen;
