import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

//Components
import TextField from '../components/text';
import Card from '../components/card';

export default function ShowGeoWeather({weathers}) {
  return (
    <Card>
      <Text style={globalStyles.weatherItem}>
        <TextField>Humidity : </TextField> {weathers.main.humidity}g/m3.
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Pressure : </TextField>{weathers.main.pressure}Pa
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>
          Temperature :{' '}
        </TextField> {weathers.main.temp}°C
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Temperature Max : </TextField>
        {weathers.main.temp_max}°C{' '}
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Temperature Min : </TextField>{weathers.main.temp_min}°C{' '}
      </Text>
    </Card>
  );
}
