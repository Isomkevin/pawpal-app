import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { petDetails } from '../data/mockData';
import AppButton from '../components/AppButton';
import { handlePendingView } from '../components/Alerts';

const myPetDetails = petDetails[0]; 

const PetDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: myPetDetails.imageUrl }} 
        style={styles.image} 
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{myPetDetails.name}</Text>
        <Text style={styles.breed}>{myPetDetails.breed}</Text>
        <Text style={styles.age}>{myPetDetails.age}</Text>
        <Text style={styles.weight}>{myPetDetails.weight}</Text>
        <Text style={styles.description}>{myPetDetails.description}</Text>
        <AppButton title="Get a Dog Walker" onPress={() => navigation.navigate('DogWalkerList')} style={styles.petServicesButton} />
        <AppButton title="Get Veterinary Services" onPress={handlePendingView} style={styles.petServicesButton} />
        <AppButton title="Other Pet Services" onPress={handlePendingView} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  breed: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  age: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  weight: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  petServicesButton: {
    backgroundColor: '#FFA500',
    marginBottom: 20,
  },
});

export default PetDetailsScreen;
