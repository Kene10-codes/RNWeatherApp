import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import Weather from '../screens/Weather';
import GeoWeather from '../screens/GeoWeather';
import ShowWeather from '../screens/ShowWeather';
import ShowGeoWeather from '../screens/ShowGeoWeather';

// Initialize Stack
const Stack = createNativeStackNavigator ();

export default (WeatherStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GeoWeather"
        component={GeoWeather}
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="GeoWeather" component={GeoWeather} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="ShowGeoWeather" component={ShowGeoWeather} />
        <Stack.Screen name="ShowWeather" component={ShowWeather} />

      </Stack.Navigator>
    </NavigationContainer>
  );
});
