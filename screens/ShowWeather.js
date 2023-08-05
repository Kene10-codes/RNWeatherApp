import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const ShowWeather = ({weathers}) => {
  console.log (weathers);
  const {name, timezone, weather, sys, main} = weathers;
  return (
    <View>
      <Text>Show Weather</Text>
      <Text>{name}</Text>
      <Text>{timezone}</Text>
      <Text>{sys.country}</Text>
      {weather.map (item => (
        <View>
          <Text>{item.description}</Text>
          <Text>{item.main}</Text>
        </View>
      ))}

      <View>
        <Text>Humidity: {main.humidity}</Text>
        <Text>Pressure: {main.pressure}</Text>s
        <Text>Temperature: {main.temp}</Text>
        <Text>Temp Max: {main.temp_max}</Text>
        <Text>Temp Min: {main.temp_min}</Text>
        <Text>Sea Level: {main.sea_level}</Text>
      </View>
    </View>
  );
};

export default ShowWeather;
