
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RestaurantList({ navigation }) {
  return (
    <View>
      <Text>List of Your Restaurants</Text>
      <Button
        title="Add Restaurant"
        onPress={() => navigation.navigate('AddRestaurant')}
      />
    </View>
  );
}
