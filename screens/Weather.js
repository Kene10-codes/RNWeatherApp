import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Constants from 'expo-constants';
import axios from 'axios';

// Components
import ShowWeather from './ShowWeather';

export default function Weather () {
  const [location, setLocation] = useState ('');
  const [weather, setWeather] = useState('')
  const [error, setError] = useState ('');


  // Search Weather using Location
  const getWeather = async () => {
    if (location === '') {
        setError('Location cannot be empty')
      }   
    if (!location) {
        setError('Location does not exist!')
      }

    try {
       const response = await axios.get (
         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Constants.expoConfig?.extra?.weatherAPI}`
       );
        const responseData = response.data;
        setWeather(responseData)
        setError ('');
    } catch (error) {
      setError ('There was an error somewhere!');
    }
  };


   return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.cityText}>Enter your City/Country : </Text>
      <TextInput
        value={location}
        placeholder="Enter name of city or country..."
        onChangeText={setLocation}
        style={globalStyles.input}
      />
      <Button title="Search" color="maroon" onPress={getWeather} />

      <Text style={globalStyles.title}>Weather</Text>

      {/*  FlatList to render the items */}
       {weather ? <ShowWeather weathers={weather} /> : <Text>No Weather Available Now!</Text>}
    
    </View>
  );
}
