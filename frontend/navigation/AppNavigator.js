import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Import MaterialCommunityIcons
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';
import DogWalkerListScreen from '../screens/DogWalkerListScreen';
import DogWalkerDetailsScreen from '../screens/DogWalkerDetailsScreen';

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // Icon name for Home
          } else if (route.name === 'My Pet') {
            iconName = 'paw'; // Icon name for PetDetails
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={25} // Increase icon size
              color={color}
            />
          );
        },
        tabBarStyle: {
          height: 60, // Increase tab bar height
          paddingVertical: 10, // Add padding to the top and bottom
        },
        tabBarLabelStyle: {
          fontSize: 14, // Adjust label font size
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Pet" component={PetDetailsScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="DogWalkerList" component={DogWalkerListScreen} />
        <Stack.Screen name="DogWalkerDetails" component={DogWalkerDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
