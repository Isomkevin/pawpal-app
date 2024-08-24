import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Category from '../components/Category';
import AppButton from '../components/AppButton';
import PetCard from '../components/PetCard'; // Import the PetCard component
import { petCategories, petDetails } from '../data/mockData';
import { handlePendingView } from '../components/Alerts';
import { getUserLocation } from '../services/locationService';


const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    const fetchLocationAndFilter = async () => {
      const loc = await getUserLocation();
      if (loc) {
        setLocation(loc);
        const filtered = filterPetsByLocation(petDetails, loc);
        setFilteredPets(filtered);
      }
    };

    fetchLocationAndFilter();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Categories</Text>
      <FlatList
        data={petCategories}
        renderItem={({ item }) => <Category title={item.title} image={item.image} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
        contentContainerStyle={styles.categoryListContent}
      />
      
      <Text style={styles.title}>Find the best pet in your location</Text>
      {location && (
        <Text style={styles.locationText}>
          Your current location: (Lat: {location.coords.latitude}, Long: {location.coords.longitude})
        </Text>
      )}
      
      {filteredPets.length > 0 ? (
        <FlatList
          data={filteredPets}
          renderItem={({ item }) => <PetCard pet={item} />} // Use PetCard component
          keyExtractor={item => item.id}
          style={styles.filteredPetsList}
        />
      ) : (
        <Text style={styles.noPetsText}>No pets found in your area.</Text>
      )}
      
      <AppButton title="View All Pets" onPress={handlePendingView} style={styles.viewAllButton} />
    </View>
  );
};

const filterPetsByLocation = (pets, userLocation) => {
  const MAX_DISTANCE = 10; // Max distance in kilometers

  return pets.filter(pet => {
    const distance = getDistanceFromLatLonInKm(
      userLocation.coords.latitude,
      userLocation.coords.longitude,
      pet.location.latitude,
      pet.location.longitude
    );
    return distance <= MAX_DISTANCE;
  });
};

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon1 - lon2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  categoryList: {
    maxHeight: "100%",
    marginBottom: 20,
  },
  categoryListContent: {
    maxHeight: "100%",
    alignItems: 'center',
    paddingVertical: 20,
  },
  filteredPetsList: {
    marginBottom: 20,
  },
  noPetsText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  viewAllButton: {
    backgroundColor: '#FFA500',
    marginBottom: 20,
  },
});

export default HomeScreen;