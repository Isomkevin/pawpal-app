import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking, Modal, Pressable } from 'react-native';

// Function to open Google Maps with directions
const openGoogleMaps = (latitude, longitude) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  Linking.openURL(url).catch(err => console.error('An error occurred', err));
};

const PetCard = ({ pet }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  // Function to handle the button press for pet picture close-up
  const handleShowCloseup = () => {
    setIsModalVisible(true); // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.breed}>{pet.breed}</Text>
        <Text style={styles.details}>Age: {pet.age}</Text>
        <Text style={styles.details}>Weight: {pet.weight}</Text>
        <Text style={styles.description}>{pet.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleShowCloseup}>
            <Text style={styles.buttonText}>Show Close-Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openGoogleMaps(pet.location.latitude, pet.location.longitude)}
          >
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for showing the close-up image */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            <Image source={{ uri: pet.imageUrl }} style={styles.modalImage} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  breed: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default PetCard;
