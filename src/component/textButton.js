import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import { themes } from '../themes/theme';

const TextButton = ({textDetail, text,press}) => {
  return (
    <View style={styles.viewContainer}>
      <Text>{textDetail}</Text>
      <TouchableOpacity onPress={press}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: ms(25),
    flexDirection: 'row',
  },
  textStyle: {
    color: themes.light.color.lightGreen,
    fontSize: ms(16),
    paddingLeft: ms(5),
  },
});

export default TextButton;
