import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../colors'
import { customFontSize } from '../helper'

function KeyboardButton({item,isPress}) {

    return (
        <TouchableOpacity activeOpacity={1} style={{
            flex:1,
            marginHorizontal:3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#0d0d0c',
            backgroundColor: '#212120', // Adjust the right margin to add space between buttons
            marginBottom: 0,
        }} onPress={()=>{isPress()}}>
            <Text style={{ fontSize: customFontSize+2, fontWeight: '300', color: colors.textColor }}>{item}</Text>
        </TouchableOpacity>
)}

export default KeyboardButton
