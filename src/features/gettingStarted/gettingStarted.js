import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Image from '../../assets/images/_MonolyLogo.svg';
import {themes} from '../../themes/theme';
import {ms} from 'react-native-size-matters';
import Button from '../../component/button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextButton from '../../component/textButton';

const GettingStarted = ({navigation}) => {
  return (
 
    <View style={styles.viewMain}>
      <View style={styles.view}> 
        <Image />
        <View style={styles.textContainer }>
          <Text style={styles.Textstyle}>
            Monoly Enclave {'\n'} Management Console
          </Text>
        
        </View> 
      
     
      </View>
      <Button title="Sign in"  press={() =>
        navigation.navigate('login')
      }/>
      <TextButton 
       textDetail="Don’t have an ID?" text="Create now" press={()=>navigation.navigate('register')}/>
      </View>
   
      
      
  );
};
const styles = StyleSheet.create({
   viewMain: {
    // flexGrow: 1,
    flex:1,
    backgroundColor: themes.light.color.white,
    justifyContent: 'center',
     alignItems: 'center',
   },
   view: {
   
    marginTop: ms(247),
    marginBottom: ms(430.97),
   },

   Textstyle: {
    fontSize: ms(20),
     fontFamily: themes.light.fontFamily.light,
    textAlign:'center',
     color: themes.light.color.black,
   },
   textContainer: {
  
    paddingTop: ms(20),
     paddingLeft: ms(16),
     paddingright: ms(16),
   },
});
export default GettingStarted;
