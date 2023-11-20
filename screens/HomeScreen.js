// HomeScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleAddRestaurant = () => {
    navigation.navigate('Add Restaurant');
  };

  const handleViewRestaurantList = () => {
    navigation.navigate('List of your restaurant');
  };

  const handleViewDetails = (restaurant) => {
    navigation.navigate('Detail Restaurant', { restaurant });
  };

  const handleViewTeamMembers = () => {
    navigation.navigate('Team Members');
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

      {/* Display a list of restaurants (replace this with your actual list) */}
      <View style={styles.restaurantList}>
        {/* <Text>Restaurant 1</Text> */}
        {/* Add more restaurants as needed */}
      </View>

      {/* New button to view details */}
      <TouchableOpacity
        style={[styles.button, styles.viewDetailsButton]}
        onPress={() => handleViewDetails({ name: 'Sample Restaurant' })}
      >
        <Text style={styles.buttonText}>Details of the restaurant</Text>
      </TouchableOpacity>

      {/* New button to view team members */}
      <TouchableOpacity
        style={[styles.button, styles.viewTeamMembersButton]}
        onPress={handleViewTeamMembers}
      >
        <Text style={styles.buttonText}>View Team Members</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
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
  viewDetailsButton: {
    backgroundColor: '#808080',
  },
  viewTeamMembersButton: {
    backgroundColor: '#808080',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantList: {
    // Style your restaurant list as needed
  },
});
