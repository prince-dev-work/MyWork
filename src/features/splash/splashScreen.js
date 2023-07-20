import { View,StyleSheet} from 'react-native'
import React ,{useEffect,useState}from 'react'
import { ms } from 'react-native-size-matters'
import { themes } from '../../themes/theme'
 import Image from '../../assets/images/_MonolyLogo.svg'
 






const SplashScreen = ({navigation}) => {

    setTimeout(() => {
   navigation.replace("auth")
    }, 3000);


  return (
    <View style={styles.viewStyle} >


           <Image style={styles.splashImage}/>
           
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: themes.light.color.white,
    justifyContent:"center",
    alignItems:"center"
  },
 
})

export default SplashScreen

