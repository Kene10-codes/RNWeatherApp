import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComp = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  button: {
    backgroundColor: 'maroon',
    borderRadius: 5,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
});

export default ButtonComp;
