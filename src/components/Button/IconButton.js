import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../colors'
import { customFontSize, marginSize } from '../helper'

function IconButton({name,Icon,iconName,size}) {

    return (
        <TouchableHighlight underlayColor={'gray'} style={{ borderWidth: 0.6, paddingRight: marginSize+60, backgroundColor: colors.buttonColor, marginBottom: 5, paddingVertical: marginSize }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginHorizontal:marginSize }}>
                    <Icon name={iconName} size={customFontSize+10} color={colors.textColor} style={{fontWeight:'300'}} />
                </View>
                <View>
                    <Text style={{ fontSize: customFontSize+3, color:colors.textColor,fontWeight:'300' }}>{name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default IconButton
