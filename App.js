// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantList from './screens/RestaurantList';
import AddRestaurant from './screens/AddRestaurant';
import HomeScreen from './screens/HomeScreen';
import DetailRestaurant from './screens/DetailRestaurant';

const Stack = createStackNavigator();

const restaurantGuideHeaderStyles = {
  title: 'Restaurant Guide',
  headerStyle: {
    backgroundColor: 'gray',
  },
  headerTitleStyle: {
    color: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={restaurantGuideHeaderStyles}
        />
        <Stack.Screen
          name="Add Restaurant"
          component={AddRestaurant}
          options={restaurantGuideHeaderStyles}
        />
        <Stack.Screen
          name="List of your restaurant"
          component={RestaurantList}
          options={restaurantGuideHeaderStyles}
        />
        <Stack.Screen
          name="Detail Restaurant"
          component={DetailRestaurant}
          options={restaurantGuideHeaderStyles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
