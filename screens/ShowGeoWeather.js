import React from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import TextField from '../components/text';

export default function ShowGeoWeather({main}) {
  return (
    <Card>
      <Text style={globalStyles.weatherItem}>
        <TextField>Humidity : </TextField> {main.humidity}g/m3.
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Pressure : </TextField>{main.pressure}Pa
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>
          Temperature :{' '}
        </TextField> {main.temp}°C
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Temperature Max : </TextField>
        {main.temp_max}°C{' '}
      </Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Temperature Min : </TextField>{main.temp_min}°C{' '}
      </Text>
    </Card>
  );
}
