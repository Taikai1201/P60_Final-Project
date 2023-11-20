import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function AddRestaurant({ navigation }) {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPhoneNumber, setRestaurantPhoneNumber] = useState('');
  const [restaurantDetails, setRestaurantDetails] = useState('');
  const [restaurantTag, setRestaurantTag] = useState('');
  const [rating, setRating] = useState('5.0'); 
  const handleAddRestaurant = () => {
    const newRestaurant = {
      name: restaurantName,
      address: restaurantAddress,
      phoneNumber: restaurantPhoneNumber,
      details: restaurantDetails,
      tag: restaurantTag,
      rating: rating,
    };

    navigation.navigate('List of your restaurant', { newRestaurant });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={restaurantName}
        onChangeText={(text) => setRestaurantName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={restaurantAddress}
        onChangeText={(text) => setRestaurantAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={restaurantPhoneNumber}
        onChangeText={(text) => setRestaurantPhoneNumber(text)}
        keyboardType="phone-pad" 
      />
      <TextInput
        style={styles.input}
        placeholder="Details"
        value={restaurantDetails}
        onChangeText={(text) => setRestaurantDetails(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Tag"
        value={restaurantTag}
        onChangeText={(text) => setRestaurantTag(text)}
      />
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          items={[
            { label: '5.0', value: '5.0' },
            { label: '4.5', value: '4.5' },
            { label: '4.0', value: '4.0' },
            { label: '3.5', value: '3.5' },
            { label: '3.0', value: '3.0' },
            
          ]}
          onValueChange={(value) => setRating(value)}
          value={rating}
          placeholder={{ label: 'Rate', value: null }}
          style={pickerSelectStyles}
        />
      </View>
      <TouchableHighlight
        style={styles.addButton}
        onPress={handleAddRestaurant}
        underlayColor="#4682B4" 
      >
        <Text style={styles.buttonText}>Add Restaurant</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 75,
    paddingBottom: 12,
    borderColor: '#4682B4',
    borderRadius: 8,
    backgroundColor: '#4682B4',
    color: 'white',
    paddingRight: 30,
    alignSelf: 'center',
    width: '60%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 75,
    paddingBottom: 12,
    borderColor: '#4682B4',
    borderRadius: 8,
    backgroundColor: '#4682B4',
    color: 'white',
    paddingRight: 30,
    alignSelf: 'center',
    width: '60%',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#4682B4',
    borderWidth: 2,
    marginBottom: 16,
    borderRadius: 8,
    alignSelf: 'center',
    width: '80%',
  },
  addButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  pickerContainer: {
    height: 40,
    borderColor: '#4682B4',
    marginBottom: 16,
    borderRadius: 6
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
