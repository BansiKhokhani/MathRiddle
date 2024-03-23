import React from 'react'
import {View,Text} from 'react-native'
import MainScreen from '../components/MainScreen/MainScreen'
import AllLevelsScreen from '../components/AllLevelsScreen/AllLevelsScreen'

const HomeScreen=()=>{
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
        <MainScreen/>
        
    </View>
  )
}

export default HomeScreen
