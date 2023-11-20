import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function RestaurantList({ route }) {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Update the restaurant list when the route parameters change
    if (route.params && route.params.newRestaurant) {
      setRestaurantData([...restaurantData, route.params.newRestaurant]);
    }
  }, [route.params]);

  return (
    <View>
      <Text>Restaurant List</Text>
      <FlatList
        data={restaurantData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
