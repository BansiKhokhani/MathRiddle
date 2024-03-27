import React from 'react'
import {View,Text} from 'react-native'
import colors from '../colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { customFontSize, marginSize } from '../helper'
import { TouchableOpacity } from 'react-native-gesture-handler'

function CorrectScreen({onCallBack}) {
  return (
    <View style={{flex:1,backgroundColor:colors.textColor,justifyContent:'center',alignItems:'center'}}>
        <FontAwesome name='thumbs-up' size={customFontSize+40} color={'black'}/>
        <Text style={{fontSize:customFontSize+10,color:'black',fontWeight:'300'}}>CORRECT</Text>
        <Text style={{fontSize:customFontSize,color:'black',fontWeight:'300'}}>Continuing on the next level!</Text>
        <TouchableOpacity style={{backgroundColor:colors.buttonColor,paddingHorizontal:marginSize+45,paddingVertical:10,marginTop:marginSize+20}} onPress={()=>{onCallBack()}}><Text style={{fontSize:customFontSize+5,fontWeight:'300',color:colors.textColor}}>Next</Text></TouchableOpacity>
    </View>
  )
}

export default CorrectScreen
