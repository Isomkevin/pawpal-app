import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dogWalkers } from '../data/mockData'

const DogWalkerListScreen = () => {
  const navigation = useNavigation();

  const renderDogWalker = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('DogWalkerDetails', { dogWalker: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Rating: {item.rating}</Text>
        <Text style={styles.details}>Available: {item.availability.start} - {item.availability.end}</Text>
        <Text style={styles.price}>Price: ${item.pricePerHour}/hr</Text>
      </View>
    </TouchableOpacity>
);


  return (
    <View style={styles.container}>
      <FlatList
        data={dogWalkers}
        keyExtractor={item => item.id}
        renderItem={renderDogWalker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default DogWalkerListScreen;
