import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../colors'
import { customFontSize, marginSize } from '../helper'

function LevelButton({itemWidth,item,levelNumber,color,onCallBack}) {
  
    return (
        <TouchableOpacity activeOpacity={1} style={{ width: itemWidth,
            height: itemWidth,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#0d0d0c',
            backgroundColor:color,marginRight: marginSize/2.2, // Adjust the right margin to add space between buttons
            marginBottom: 5,}} onPress={()=>{  onCallBack(levelNumber)}}>
            <Text style={{fontSize:customFontSize,fontWeight:'300', color:colors.textColor }}>{item}</Text>
        </TouchableOpacity>
    )
}

export default LevelButton
