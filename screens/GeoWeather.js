import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function GeoWeather () {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>GEO Weather</Text>
    </View>
  );
}
