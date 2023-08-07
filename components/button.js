import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComp = (props, onPress) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'maroon',
  },
});

export default ButtonComp;
