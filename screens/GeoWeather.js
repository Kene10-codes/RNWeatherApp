import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import axios from 'axios';

// Screens
import ShowGeoWeather from './ShowGeoWeather';


export default function GeoWeather ({navigation}) {
  const [errorMsg, setErrorMsg] = useState (null);
  const [weathers, setWeather] = useState ('');
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    (async () => {
      // setLoading(true)
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

    // Destructure weather object
    const {main} = weathers;
    // console.log(main)

  return (
    <View style={globalStyles.container}>
     <View style={globalStyles.weatherHeader}>
       <Text style={globalStyles.title}>Weather</Text>
        <TouchableHighlight >
         <Button title='Click To Search' color='maroon' />
      </TouchableHighlight>
     </View>
      
      <View style={globalStyles.weatherInfo}>
        <Text style={globalStyles.subTitle}>Weather Details</Text>        
        { <Text>{loading}</Text>  ? <Text>Loading...</Text> : <ShowGeoWeather main={main} /> }   
      </View>
    </View>
  );
}
