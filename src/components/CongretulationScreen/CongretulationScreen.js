import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import colors from '../colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { customFontSize,marginSize, completedLevelAsyncStorageKey,} from '../helper'

const CongretulationScreen=()=>{

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem(completedLevelAsyncStorageKey);
      console.log('Key removed successfully');
      Toast.show('Data Clear!', Toast.SHORT);

    } catch (error) {
      console.log(error);
    }
    
  }
  return (
   <View style={{flex:1,backgroundColor:colors.textColor,justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'black',fontSize:customFontSize+10,fontWeight:'200'}}>Congretulations!</Text>
    <Text style={{color:'black',fontSize:customFontSize,fontWeight:'200'}}>You have completed all levels of the Game!</Text>
    <TouchableOpacity style={{backgroundColor:colors.buttonColor,paddingHorizontal:marginSize+45,paddingVertical:10,marginTop:marginSize+20}} onPress={()=>{onCallBack(false)}}><Text style={{fontSize:customFontSize+5,fontWeight:'300',color:colors.textColor}}>Go Back</Text></TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:colors.buttonColor,paddingHorizontal:marginSize+45,paddingVertical:10,marginTop:marginSize+20}} onPress={clearData}><Text style={{fontSize:customFontSize+5,fontWeight:'300',color:colors.textColor}}>Reset</Text></TouchableOpacity>
    </View>
  )
}

export default CongretulationScreen
