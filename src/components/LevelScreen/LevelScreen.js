import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { customFontSize } from '../helper'
import colors from '../colors'


export default Level = ({ currentLevel }) => {

    const superScript = (base, exponent) => {
        console.log(base)
        return <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>{(!isNaN(base)) && base}</Text>
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
            {currentLevel == 25 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>24 = 16</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>26 = 36</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>27 = 49</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>25 = 25</Text>
                </>
            }
            {currentLevel == 26 &&

                <Image source={require('../../../assets/images/RoundPuzzle-Level26.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 27 &&

                <Image source={require('../../../assets/images/FriutPuzzle_Level27.png')} style={{ width: 312, height: 312, resizeMode: 'contain' }} />
            }
            {currentLevel == 28 &&
                <>
                    <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}> If P means '+', Q means '-', R means '×' and S means '÷', then the value of the following expression?</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>40 S 4 R 2 P 19 Q 26</Text>
                </>
            }
            {currentLevel == 29 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>The sum of the ages of Ankur, Raj and Ram is 80 years. What was the sum of their ages threee years ago?</Text>
            }
            {currentLevel == 30 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>The next term in the series 2, 5, 10, 17, 26, 37,?  is:</Text>
            }
            {currentLevel == 31 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>IF</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>A + C = 4</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>D + E = 9</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>B + F = 8</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>G + C = 10</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>THEN</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>G + A = ?</Text>
                </>
            }
            {currentLevel == 32 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>13, 18 = 31</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>7, 25 = 32</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>12, 30 = 42</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>26, 13 = ?</Text>

                </>
            }
            {currentLevel == 33 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>8 - 8 / 4 x 3 = ?</Text>
            }
            {currentLevel == 34 &&

                <Image source={require('../../../assets/images/squarePuzzlelevel34.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 35 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>11, 15, 20, ?</Text>
            }
            {currentLevel == 36 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>4, 8 = 32</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>5, 3 = 15</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>10, 2 = 20</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>8, 6 = ?</Text>

                </>
            }
            {currentLevel == 37 &&
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>{'('}</Text>
                    {superScript(3, 2)}
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>-</Text>
                    {superScript(2, 3)}
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>{')'}</Text>
                    {superScript(NaN, 66)}
                    <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}> = ?</Text>
                </View>
            }
            {currentLevel == 38 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>7, 15, 31, ?</Text>
            }
            {currentLevel == 39 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>1783, 3178, 8317, ?</Text>
            }
            {currentLevel == 40 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>8 = 17</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>22 = 45</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>15 = 31</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>20 = ?</Text>

                </>
            }
            {currentLevel == 41 &&

                <Image source={require('../../../assets/images/squarePuzzlelevel41.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 42 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>6, 5 = 33</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>2, 7 = 17</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>11, 4 = 47</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>8, 4 = ?</Text>

                </>
            }
            {currentLevel == 43 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>87 = 40</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>31 = 12</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>23 = 8</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>95 = ?</Text>

                </>
            }
            {currentLevel == 44 &&

                <Image source={require('../../../assets/images/octagonLevel44.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 45 &&

                <Image source={require('../../../assets/images/starlevel45.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 46 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>4, 2 = 36</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>3, 7 = 100</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>5, 4 = 81</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>1, 6 = ?</Text>

                </>
            }
            {currentLevel == 47 &&

                <Image source={require('../../../assets/images/squarePuzzlelevel47.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 48 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>126 = 76</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>132 = 32</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>208 = 58</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>261 = ?</Text>

                </>
            }
            {currentLevel == 49 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>5, 3 = 28</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>7, 6 = 55</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>4, 5 = 21</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>3, 8 = ?</Text>

                </>
            }
            {currentLevel == 50 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>6÷2(1+2)</Text>
            }
            {currentLevel == 51 &&
                <Image source={require('../../../assets/images/hexagon_level_51.png')} style={{ width: 212, height: 212, resizeMode: 'contain' }} />
            }
            {currentLevel == 52 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}> 7, 9 = 8</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>21, 5 = 13</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>36, 2 = 19</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}> 1, 7 = ?</Text>

                </>
            }
            {currentLevel == 53 &&
                <Image source={require('../../../assets/images/squarePuzzleLevel53.png')} style={{ width: 312, height: 312, resizeMode: 'contain' }} />
            }
            {currentLevel == 54 &&
                <>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>4, 5 = 29</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>3, 6 = 27</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>7, 4 = 39</Text>
                    <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>2, 7 = ?</Text>

                </>
            }
            {currentLevel == 55 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>2,6,12,20,30,…</Text>
            }
            {currentLevel == 56 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>5,13,21,29,...</Text>
            }
            {currentLevel == 57 &&
                <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>6,14,32,..</Text>
            }
            {currentLevel == 58 &&
                <Text style={{ fontSize: customFontSize + 5, color: colors.textColor, fontWeight: '200', textAlign: 'center' }}>When Tony Was 12 Years Old, His Brother Mark Was Half His Age. If Tony Is 40 Years Old Today, How Old Will Mark Be?</Text>
            }
            {currentLevel == 59 &&
                 <>
                 <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ ÷ 〇 = 3</Text>
                 <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ x 〇 = 3</Text>
                 <Text style={{ fontSize: customFontSize + 15, color: colors.textColor, fontWeight: '200' }}>□ - 〇= ?</Text>

                </>
            }
             {currentLevel == 60 &&
                 <>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>IF</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>F + H = 14</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>I + K = 19</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>B + F = 8</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>G + C = 10</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>THEN</Text>
                 <Text style={{ fontSize: customFontSize + 10, color: colors.textColor, fontWeight: '200' }}>G + B = ?</Text>
             </>
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