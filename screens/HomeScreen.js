//HomeScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleAddRestaurant = () => {
    navigation.navigate('Add Restaurant');
  };

  const handleViewRestaurantList = () => {
    navigation.navigate('List of your restaurant');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={handleAddRestaurant}
        >
          <Text style={styles.buttonText}>Add Your Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.viewButton]}
          onPress={handleViewRestaurantList}
        >
          <Text style={styles.buttonText}>View Restaurant List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // White background color
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#808080', 
  },
  viewButton: {
    backgroundColor: '#808080', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
