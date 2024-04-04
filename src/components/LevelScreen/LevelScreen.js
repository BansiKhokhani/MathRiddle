import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { customFontSize } from '../helper'
import colors from '../colors'


export default Level = ({ currentLevel }) => {

    const superScript = (base, exponent) => {
        return <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>{base}</Text>
            </View>
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={{ fontSize: customFontSize, color: colors.textColor, fontWeight: '200' }}>{exponent}</Text>
            </View>
        </View>
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
            {currentLevel == 1 &&
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>4, 8, 16, ?</Text>
            }
            {currentLevel == 2 &&
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>12, 11, 13, 12, 14, 13, ... </Text>
            }
            {currentLevel == 3 &&
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>1, 6, 13, 22, 33,..</Text>
            }
            {currentLevel == 4 &&
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>3, 7, 23, 95, ? </Text>
            }
            {currentLevel == 5 &&
                <>
                    <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>Find the odd one out from the given set of numbers.</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>14, 28, 35, 46, 56, 84</Text>
                </>

            }
            {currentLevel == 6 &&
                <>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ + △ = 5</Text>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ - △ = 1</Text>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>      □ = ?</Text>

                </>
            }
            {currentLevel == 7 &&
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>7, 15, 31, ?</Text>

            }
            {currentLevel == 8 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>11 x 11 = 4</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>22 x 22 = 16</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>33 x 33 = 18</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>44 x 44 = 19</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>55 x 55 = ?</Text>
                </>
            }
            {currentLevel == 9 &&
                <View style={{ flexDirection: 'row' }}>
                    {superScript(1, 5)}
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>+</Text>
                    {superScript(5, 2)}
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>/</Text>
                    {superScript(25, 0)}
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>-</Text>
                    {superScript(5, 1)}
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>+</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>= ?</Text>
                </View>
            }
            {currentLevel == 10 &&
                < >
                    <Image source={require('../../../assets/images/TwoBy2.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 30 }} />
                    <Image source={require('../../../assets/images/FourBy4.png')} style={{ width: 300, height: 100, resizeMode: 'contain', }} />
                </>
            }
            {currentLevel == 11 &&
                <>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ ÷ 〇 = 2</Text>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ x 〇 = 2</Text>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ - 〇= ?</Text>

                </>
            }
            {currentLevel == 12 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>1 + 3 = 34</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>5 + 2 = 27</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>5 + 1 = 16</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>3 + 5 = 58</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>2 + 4 = ??</Text>
                </>
            }
            {currentLevel == 13 &&
                <Image source={require('../../../assets/images/roundPuzzle.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />
            }
            {currentLevel == 14 &&
                < >
                    <Image source={require('../../../assets/images/Triangle1.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/Triangle2.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/Triangle3.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/Triangle4.png')} style={{ width: 300, height: 100, resizeMode: 'contain' }} />
                </>
            }
            {currentLevel == 15 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>2+2÷2x2</Text>
            }
            {currentLevel == 16 &&
                <>
                    <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>How many Triangle ?</Text>
                    <Image source={require('../../../assets/images/Triangle.png')} style={{ width: 400, height: 200, resizeMode: 'contain' }} />
                </>
            }
            {currentLevel == 17 &&

                <Image source={require('../../../assets/images/squarePuzzle.png')} style={{ width: 400, height: 200, resizeMode: 'contain' }} />

            }
            {currentLevel == 18 &&
                < >
                    <Image source={require('../../../assets/images/RoundPuzzle1.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/RoundPuzzle2.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/RoundPuzzle3.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/RoundPuzzle4.png')} style={{ width: 300, height: 100, resizeMode: 'contain' }} />
                </>
            }
            {currentLevel == 19 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>When Tom Was 6 Years Old, His Brother Mark Was Half His Age. If Tom Is 40 Years Old Today, How Old Will Mark Be?</Text>
            }
            {currentLevel == 20 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>50, 49, 47, 44, 40, 35… What Comes Next In The Sequence?</Text>
            }
            {currentLevel == 21 &&
                < >
                    <Image source={require('../../../assets/images/Ractangle1.png')} style={{ width: 312, height: 112, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/Ractangle2.png')} style={{ width: 312, height: 112, resizeMode: 'contain', marginBottom: 10 }} />
                    <Image source={require('../../../assets/images/Ractangle3.png')} style={{ width: 312, height: 112, resizeMode: 'contain', marginBottom: 10 }} />
                </>
            }
            {currentLevel == 22 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>If You Have 20 Squares, 9 Pentagons, 8 Triangles, And 6 Hexagons, How Many Total Sides Do You Have?</Text>
            }
            {currentLevel == 23 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>Divide 14 By 7 And Add It To 15 Multiplied By 5. What Is The Answer?</Text>
            }
            {currentLevel == 24 &&

                <Image source={require('../../../assets/images/SmallSquareBoxPuzzle.png')} style={{ width: 412, height: 212, resizeMode: 'contain' }} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    superScript: {
        fontSize: 12, // Adjust the size of the superscript
        lineHeight: 12, // Adjust the line height to align properly
        textAlignVertical: 'top', // Align the text to the top
        textDecorationLine: 'none', // Remove any text decoration
        position: 'relative', // Position the superscript
        top: -8, // Adjust the position to make it appear above the baseline
    },
})