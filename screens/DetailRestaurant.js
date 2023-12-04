import React from 'react';
import * as Sharing from 'expo-sharing';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

const DetailRestaurant = ({ route }) => {
  const {
    name,
    address,
    phoneNumber,
    details,
    tag,
    rating, 
  } = route.params.restaurant;

  const handleShare = async () => {
    try {
      
      console.log('Name:', name);
      console.log('Details:', details);
      console.log('Address:', address);
      console.log('Phone Number:', phoneNumber);
      console.log('Tags:', tag);
      console.log('Rating:', rating);
  

      const handleShare = async () => {
        try {
          
          const message = `Check out ${name || 'Sample Restaurant'} - ${details || 'No details'}\nAddress: ${address || 'No address'}\nPhone: ${phoneNumber || 'No phone'}\nTags: ${tag || 'No tags'}\nRating: ${rating || 'No rating'}`;
      
          
          await Sharing.shareAsync(message);
        } catch (error) {
          console.error('Error sharing:', error.message);
        }
      };
      
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
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
        
      </View>
      
      <View style={styles.mapContainer}>
        
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
    height: 200, 
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailRestaurant;
