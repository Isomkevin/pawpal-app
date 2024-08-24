import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DogWalkerDetailsScreen = ({ route }) => {
  const { dogWalker } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showHourPicker = () => {
    if (selectedDate) {
      setHourPickerVisibility(true);
    } else {
      alert('Please select a date first.');
    }
  };

  const hideHourPicker = () => {
    setHourPickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    const dateString = date.toISOString().split('T')[0];
    if (dogWalker.availability.unavailableDates.includes(dateString)) {
      alert('This date is not available. Please choose another date.');
    } else {
      setSelectedDate(date);
    }
    hideDatePicker();
  };

  const handleHourConfirm = (time) => {
    const selectedHour = time.getHours();
    if (dogWalker.availability.unavailableHours.includes(selectedHour)) {
      alert('This hour is not available. Please choose another time.');
    } else {
      setSelectedHour(selectedHour);
    }
    hideHourPicker();
  };

  const handleBooking = () => {
    if (selectedDate && selectedHour !== null) {
      const bookingDateTime = new Date(selectedDate);
      bookingDateTime.setHours(selectedHour, 0, 0, 0);
      alert(`You have booked a walking session with ${dogWalker.name} on ${bookingDateTime.toLocaleString()} for \$${dogWalker.pricePerHour}/hour!`);
    } else {
      alert('Please select a date and time first!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: dogWalker.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{dogWalker.name}</Text>
      <Text style={styles.details}>Rating: {dogWalker.rating}</Text>
      <Text style={styles.price}>Price: ${dogWalker.pricePerHour}/hr</Text>
      
      {/* Display individual availability details */}
      <Text style={styles.details}>
        Availability: {dogWalker.availability.start} - {dogWalker.availability.end}
      </Text>

      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>
          {selectedDate ? selectedDate.toDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showHourPicker}>
        <Text style={styles.buttonText}>
          {selectedHour !== null ? `Selected Hour: ${selectedHour}:00` : 'Select Hour'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book a Walking Session</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isHourPickerVisible}
        mode="time"
        onConfirm={handleHourConfirm}
        onCancel={hideHourPicker}
        minuteInterval={60} // Ensures only the hour is selected
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DogWalkerDetailsScreen;
