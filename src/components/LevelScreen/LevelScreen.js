import React from 'react'
import { View, Text } from 'react-native'
import { customFontSize } from '../helper'
import colors from '../colors'


export default Level=({currentLevel})=>{
    

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {currentLevel==1&&
             <Text style={{fontSize:customFontSize+15,color:colors.textColor,fontWeight:'400'}}>4, 8, 16, ?</Text>
            }
            {currentLevel==2&&
             <Text style={{fontSize:customFontSize+15,color:colors.textColor,fontWeight:'400'}}>4, 8, 16, ?</Text>
            }
            {currentLevel==3&&
             <Text style={{fontSize:customFontSize+15,color:colors.textColor,fontWeight:'400'}}>4, 8, 16, ?</Text>
            }
            {currentLevel==4&&
             <Text style={{fontSize:customFontSize+15,color:colors.textColor,fontWeight:'400'}}>4, 8, 16, ?</Text>
            }
            {currentLevel==5&&
             <Text style={{fontSize:customFontSize+15,color:colors.textColor,fontWeight:'400'}}>4, 8, 16, ?</Text>
            }
           
           
        </View>
    )
}
