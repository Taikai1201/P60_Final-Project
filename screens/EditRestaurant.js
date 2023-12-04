import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditRestaurant = ({ route, navigation }) => {
    const { restaurant } = route.params;
    const [editedRestaurant, setEditedRestaurant] = useState({
      name: restaurant.name,
      address: restaurant.address,
      phoneNumber: restaurant.phoneNumber,
      details: restaurant.details,
      tag: restaurant.tag,
      rating: restaurant.rating,
    });

    const handleSaveChanges = async () => {
        try {
          // Load existing data from AsyncStorage
          const existingData = await AsyncStorage.getItem('restaurantData');
          let data = existingData ? JSON.parse(existingData) : [];
    
          // Find the index of the restaurant to be edited
          const index = data.findIndex((r) => r.name === restaurant.name);
    
          // Update the restaurant data
          if (index !== -1) {
            data[index] = editedRestaurant;
    
            // Save the updated data back to AsyncStorage
            await AsyncStorage.setItem('restaurantData', JSON.stringify(data));
    
            console.log('Changes saved:', editedRestaurant);
            // Navigate back to the RestaurantList screen
            navigation.goBack();
          } else {
            console.error('Restaurant not found for editing');
          }
        } catch (error) {
          console.error('Error saving changes:', error);
        }
      };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={editedRestaurant.name}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={editedRestaurant.address}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={editedRestaurant.phoneNumber}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, phoneNumber: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Details"
        value={editedRestaurant.details}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, details: text })}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Tag"
        value={editedRestaurant.tag}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, tag: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={editedRestaurant.rating}
        onChangeText={(text) => setEditedRestaurant({ ...editedRestaurant, rating: text })}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default EditRestaurant;