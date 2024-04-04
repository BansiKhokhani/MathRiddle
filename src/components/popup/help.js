import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,BackHandler} from 'react-native'
import colors from '../colors';
import { customFontSize } from '../helper';

const Help=({onCallBack})=>{
  return (
    <View style={styles.overlay}>
    <View style={styles.alert}>
      <Text style={styles.message}>Need Help?</Text>
      <TouchableOpacity onPress={()=>{}} style={[styles.button, styles.restartButton]}>
          <Text style={styles.buttonText}>Watch Ads for </Text><Text style={[styles.buttonText,{fontSize:customFontSize+2,fontWeight:'bold'}]}>Hint </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Watch Ads for </Text><Text style={[styles.buttonText,{fontSize:customFontSize+2,fontWeight:'bold'}]}>Solution </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onCallBack(false)}} style={{marginTop:30,paddingHorizontal:30,paddingVertical:10}}>
        <Text style={{color:colors.textColor}}>No, Thanks</Text>
        </TouchableOpacity>
      
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alert: {
      backgroundColor:colors.popupBackgroundColor,
      paddingVertical:10,
      width:'70%',
      borderRadius: 2,
      alignItems: 'center',
    },
    message: {
      marginBottom: 20,
      fontSize: customFontSize+2,
      textAlign: 'center',
      color:colors.popupTextColor,
      fontWeight:'300'
    },
    button: {
      alignItems:'center',
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      backgroundColor:colors.buttonColor,paddingHorizontal:20,
      flexDirection:'row'
    },
    buttonText: {
      color: colors.textcolor,
      fontSize: customFontSize,
      fontWeight:'400'
    },
    restartButton:{
        marginBottom:10,
    }
  });

export default Help
