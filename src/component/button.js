import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {themes} from '../themes/theme';
import {ms} from 'react-native-size-matters';

const Button = ({press, title}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={press}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    backgroundColor: themes.light.color.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ms(16),
    paddingRight: ms(16),
    position: 'absolute',
    bottom: ms(58),
    borderRadius:ms(4)
  },
  buttonText: {
    color: themes.light.color.white, 
    fontSize: ms(17),
    fontFamily: themes.light.fontFamily.bold,
  },
});

export default Button;
