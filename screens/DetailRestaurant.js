
import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

const DetailRestaurant = ({ route }) => {
  const {
    name,
    address,
    phoneNumber,
    details,
    tag,
  } = route.params.restaurant;

  const handleShare = () => {
    // Implement your share logic here
    console.log(`Sharing details of ${name}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.restaurantName}>{name}</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tagsText}>Tags: {tag}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Phone Number: {phoneNumber}</Text>
        <Text style={styles.detailText}>Address: {address}</Text>
        <Text style={styles.detailText}>Description: {details}</Text>
        {/* Add more details as needed */}
      </View>
      {/* Implement your map component here */}
      <View style={styles.mapContainer}>
        {/* Your map component goes here */}
        <Text>Map Goes Here</Text>
      </View>
      <Button title="Share" onPress={handleShare} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagsContainer: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  tagsText: {
    fontSize: 14,
    color: 'gray',
  },
  detailContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  mapContainer: {
    height: 200, // Set the height of your map container
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailRestaurant;
