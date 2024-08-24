import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AppButton = ({ onPress, title, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3CB371',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppButton;
