import React,{useEffect} from 'react'
import {View,TouchableOpacity,Text,StyleSheet,BackHandler} from 'react-native'
import colors from '../colors';
import { customFontSize } from '../helper';
const ExitPopup=({onCallBack})=>{

      const handleCancel = () => {
        onCallBack(false);
      };
    
      const handleConfirm = () => {
        onCallBack(false);
        BackHandler.exitApp();
      };


  return (
    <View style={styles.overlay}>
            <View style={styles.alert}>
              <Text style={styles.message}>Wait!!!!</Text>
              <Text style={styles.message}>Are you sure you want to go back?</Text>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleConfirm} style={[styles.button, styles.confirmButton]}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                
              </View>
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
      padding: 20,
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
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      width:'30%',
      alignItems:'center',
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      backgroundColor:colors.buttonColor
    },
    buttonText: {
      color: colors.textcolor,
      fontSize: customFontSize,
      fontWeight:'400'
    },
  });

export default ExitPopup
