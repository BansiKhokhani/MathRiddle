import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../colors'
import { customFontSize, marginSize } from '../helper'

function IconButton({name,Icon,iconName,onCallback}) {

    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{onCallback('')}} underlayColor={'gray'} style={styles.touchableOpacity}>
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <Icon name={iconName} size={customFontSize+10} color={colors.textColor} style={styles.iconStyle} />
                </View>
                <View>
                    <Text style={styles.iconTextName}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton

//Stylesheet
const styles=StyleSheet.create({
    touchableOpacity:{
        borderWidth: 0.6, paddingRight: marginSize+60, backgroundColor: colors.buttonColor, marginBottom: 5, paddingVertical: marginSize 
    },
    mainView:{ flexDirection: 'row', alignItems: 'center' },
    subView:{ marginHorizontal:marginSize },
    iconStyle:{fontWeight:'300'},
    iconTextName:{ fontSize: customFontSize+3, color:colors.textColor,fontWeight:'300' }
    
})