import React, {useState, useEffect} from 'react';
import {Platform, Text, View, Button, TouchableOpacity, FlatList} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import axios from 'axios';

// Screens and components
import ShowGeoWeather from './ShowGeoWeather';
import ButtonComp from '../components/button';


export default function GeoWeather ({navigation,}) {
  const [errorMsg, setErrorMsg] = useState (null);
  const [weathers, setWeather] = useState ([]);
  const [loading, setLoading] = useState(true)

  // GoTo weather function
  const goToWeather = () => {
    navigation.navigate('Weather');
  }


  useEffect (() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync ();
        if (status !== 'granted') {
          setErrorMsg ('Permission to access location denied!');
          return;
        }
        let location = await Location.getCurrentPositionAsync ({});
        const {latitude, longitude} = location.coords;
       await axios.get (
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Constants.expoConfig?.extra?.weatherAPI}`
          ).then((response) => {
            
            const responseData = response.data;
            setWeather(responseData);
            setLoading(false);            
          }).then((error) => {
            // console.log(error)
          })
    }) ();
  }, []);


  return (
    <View style={globalStyles.container}>
     <View style={globalStyles.weatherHeader}>
       <Text style={globalStyles.title}>Weather</Text>
       <ButtonComp>
         <Text onPress={goToWeather}>Search</Text>
       </ButtonComp>
        <TouchableOpacity  >
      </TouchableOpacity>
     </View>
      
      <View style={globalStyles.weatherInfo}>
        {<Text>{!loading}</Text> 
        ? 
        <ShowGeoWeather weathers={weathers}  />
        : 
        <Text>Loading...</Text>}
      </View>
    </View>
  );
}
