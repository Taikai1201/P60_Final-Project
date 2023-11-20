// AddRestaurant.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function AddRestaurant({ navigation }) {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPhoneNumber, setRestaurantPhoneNumber] = useState('');
  const [restaurantDetails, setRestaurantDetails] = useState('');
  const [restaurantTag, setRestaurantTag] = useState('');

  const handleAddRestaurant = () => {
    // Handle adding the restaurant to your list or any other logic
    // You can replace the following with your logic for storing the data

    // Clear the input fields
    setRestaurantName('');
    setRestaurantAddress('');
    setRestaurantPhoneNumber('');
    setRestaurantDetails('');
    setRestaurantTag('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Name of restaurant"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address of restaurant"
        value={restaurantAddress}
        onChangeText={(text) => setRestaurantAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number of restaurant"
        value={restaurantPhoneNumber}
        onChangeText={(text) => setRestaurantPhoneNumber(text)}
        keyboardType="phone-pad" // Set the keyboard type to numeric
      />
      <TextInput
        style={styles.input}
        placeholder="Add any details of restaurant"
        value={restaurantDetails}
        onChangeText={(text) => setRestaurantDetails(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Add tag"
        value={restaurantTag}
        onChangeText={(text) => setRestaurantTag(text)}
      />
      <Button title="Add Restaurant" onPress={handleAddRestaurant} />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'blue', // Blue color for the border
    borderWidth: 1,
    marginBottom: 16, // Increased margin between input fields
    paddingHorizontal: 8,
    borderRadius: 8, // Border radius
  },
});
