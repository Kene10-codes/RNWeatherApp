import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Constants from 'expo-constants';
import axios from 'axios';

// Components
import ShowWeather from './ShowWeather';

export default function Weather () {
  const [location, setLocation] = useState ('Imo');
  const [weather, setWeather] = useState([])
  const [errorMessage, setErrorMessage] = useState ('');
  const [isError, setIsError] =  useState(false);

  // Search Weather using Location
  const getWeather = async () => {
    if (location === '') {
        setErrorMessage('Location cannot be empty')
        setIsError(true)
      }   
    try {
       const response = await axios.get (
         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Constants.expoConfig?.extra?.weatherAPI}`
       );
        const responseData = response.data;
        setWeather(responseData);
        setIsError(false);
        setErrorMessage ('');
    } catch (error) {
      setIsError(true);
    } finally {
      setLocation('')
    }
  };

   return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={globalStyles.container}>
      <Text style={globalStyles.cityText}>Enter your City/Country : </Text>
      <TextInput
        value={location}
        placeholder="Enter name of city or country..."
        onChangeText={setLocation}
        style={globalStyles.input}
      />
      {<Text>{isError}</Text> ? <Text style={globalStyles.error}>{errorMessage}</Text> : ''}

      {/* Search Button */}  
      <Button title="Search" color="maroon" onPress={getWeather} />

      {/*  FlatList to render the items */}
       {<Text>{weather}</Text> ? <ShowWeather weathers={weather} /> : <Text>No Weather Available Now!</Text>} 
    </View>
   </TouchableWithoutFeedback>
  );
}
