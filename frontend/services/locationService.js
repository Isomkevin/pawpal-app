// services/locationService.js
import * as Location from 'expo-location';

export const getUserLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    return location;
  } catch (error) {
    console.error('Error getting location:', error);
    return null;
  }
};
