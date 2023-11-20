import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantList from './screens/RestaurantList';
import AddRestaurantScreen from './screens/AddRestaurantScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RestaurantList} />
        <Stack.Screen name="AddRestaurant" component={AddRestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}