import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {themes} from '../../themes/theme';
import {ms} from 'react-native-size-matters';
import TextButton from '../../component/textButton';
import Button from '../../component/button';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create account</Text>
      <Text style={styles.inputTag}>Email address</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Continue" />
        <TextButton
          textDetail="Already have an account?"
          text="Sign in"
          press={() => {
            navigation.navigate('login');
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
    borderBottomWidth: 0.2,

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
  inputTag: {
    position: 'absolute',
    top: ms(138),
    left: ms(16),
  },
});

export default Register;
