import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,BackHandler} from 'react-native'
import colors from '../colors';
import { customFontSize } from '../helper';

const SettingPopup=({data,onCallBack})=>
{
   
    
  return (
    
    <View style={styles.alert}>
      <Text style={styles.message}>{data}</Text>
      <TouchableOpacity onPress={()=>{onCallBack(false)}} style={{}}>
          <Text style={styles.text}>Got it, Thanks</Text>
        </TouchableOpacity>
    </View>
 
  )
}
const styles = StyleSheet.create({
  
    alert: {
      backgroundColor:colors.popupBackgroundColor,
      paddingVertical:5,
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
      backgroundColor:colors.buttonColor,paddingHorizontal:20
    },
    text: {
      color: colors.textColor,
      fontSize: customFontSize,
      fontWeight:'400'
    },
    restartButton:{
        marginBottom:20,
    }
  });

export default SettingPopup;
