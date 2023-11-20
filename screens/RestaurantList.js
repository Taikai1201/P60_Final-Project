import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyData = [
  { id: '1', name: 'Restaurant 1', rate: '3/5' },
  { id: '2', name: 'Restaurant 2', rate: '3.5/5' },
  { id: '3', name: 'Restaurant 3', rate: '4/5' },
];

export default function RestaurantList({ route }) {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Update the restaurant list when the route parameters change
    if (route.params && route.params.newRestaurant) {
      setRestaurantData([...restaurantData, route.params.newRestaurant]);
    }
  }, [route.params]);

  const renderRestaurantItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.rate}>Rate: {item.rate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant List</Text>
      <FlatList
        data={dummyData} // Change this to restaurantData if needed
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurantItem}
        horizontal={false} 
      />
    </View>
  );
}

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
  gridItem: {
    backgroundColor: 'grey', 
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: '90%', 
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: 'white',
    fontSize: 14,
  },
});