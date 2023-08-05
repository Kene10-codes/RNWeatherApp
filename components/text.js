import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextComponent = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'maroon',
  },
});

export default TextComponent;
