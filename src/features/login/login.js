import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {themes} from '../../themes/theme';
import {ms} from 'react-native-size-matters';
import TextButton from '../../component/textButton';
import Button from '../../component/button';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in</Text>
      <Text style={styles.textStyle}>Email address</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Sign in" />
        <TextButton
          textDetail="Don’t have an ID?"
          text="Create now"
          press={() => {
            navigation.navigate('register');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: ms(35),
    fontFamily: themes.light.fontFamily.bold,
    color: themes.light.color.black,
    marginTop: ms(44),
    marginLeft: ms(16),
  },
  input: {
    width: ms('90%'),
    height: ms(40),
    borderColor: themes.light.color.grey,
    borderBottomWidth: ms(0.2),

    marginBottom: ms(10),
    marginHorizontal: ms(16),

    position: 'absolute',
    top: ms(162),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    position: 'absolute',
    top: ms(138),
    left: ms(16),
  },
});

export default Login;
