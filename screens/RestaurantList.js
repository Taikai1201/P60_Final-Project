// RestaurantList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantList = ({ navigation, route }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Update the restaurant list when the route parameters change
    if (route.params && route.params.newRestaurant) {
      setRestaurantData([...restaurantData, route.params.newRestaurant]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant List</Text>
      <FlatList
        data={restaurantData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('Detail Restaurant', {
                restaurant: item,
              })
            }
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  itemText: {
    fontSize: 16,
  },
});

export default RestaurantList;
