import { Alert } from 'react-native';

export const handlePendingView = () => {
    Alert.alert(
      "Feature Unavailable",
      "This feature is still under development or not currently accessible.",
      [{ text: "OK" }]
    );
  };