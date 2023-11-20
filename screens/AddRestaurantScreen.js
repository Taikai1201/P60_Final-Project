// screens/AddRestaurantScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddRestaurantScreen({ navigation }) {
  const [restaurantName, setRestaurantName] = useState('');

  const handleAddRestaurant = () => {
    // Handle adding the restaurant to your list
    // You can use state management (e.g., Redux) or context API for this
    // For simplicity, let's just alert the restaurant name for now
    alert(`Added restaurant: ${restaurantName}`);
    setRestaurantName(''); // Clear the input field
  };

  return (
    <View>
      <TextInput
        placeholder="Enter restaurant name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <Button title="Add Restaurant" onPress={handleAddRestaurant} />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
