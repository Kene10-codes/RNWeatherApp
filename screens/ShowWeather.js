import React from 'react';
import {View, Text, Image} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

// Component
import TextField from '../components/text';

const ShowWeather = ({weathers}) => {
  const {name, weather, main} = weathers;
  return (
    <View style={globalStyles.weatherContainer}>
      <Text style={globalStyles.title}>Forecast</Text>
      <Text style={globalStyles.weatherItem}>{weather[0].description}</Text>
      <Text style={globalStyles.weatherItem}>{weather[0].main}</Text>
      <Text style={globalStyles.weatherItem}>{weather[0].description}</Text>
      <Text style={globalStyles.weatherItem}>
        <TextField>Country/City : </TextField> {name}
      </Text>

      <View style={globalStyles.weatherInfo}>
        <Text style={globalStyles.subTitle}>Weather Details</Text>
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
      </View>
    </View>
  );
};

export default ShowWeather;
