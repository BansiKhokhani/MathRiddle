import React from 'react'
import {View,Text} from 'react-native'
import colors from '../colors'
import { customFontSize } from '../helper'

const CongretulationScreen=()=>{
  return (
   <View style={{flex:1,backgroundColor:colors.textColor,justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'black',fontSize:customFontSize+10,fontWeight:'200'}}>Congretulations!</Text>
    <Text style={{color:'black',fontSize:customFontSize,fontWeight:'200'}}>You have completed all levels of the Game!</Text>
    

    </View>
  )
}

export default CongretulationScreen
