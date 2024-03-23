import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard } from 'react-native'
import colors from '../colors'
import IconButton from '../Button/IconButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BannerAds } from '../Ads/Ads';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import LevelButton from '../Button/LevelButton';
import KeyboardButton from '../Button/keyboardButton';
const { width } = Dimensions.get('window');
import { customFontSize,marginSize } from '../helper';
const COLUMN_COUNT = 5;
const ITEM_WIDTH = width / (COLUMN_COUNT + 1);
const soundFile = require('./../../../assets/sound/wronganswer.mp3');



function MainScreen() {
    const [isMainScreen, setIsMainScreen] = useState(false);
    const [isAllLevelScreen,setIsAllLevelScreen]=useState(false);
    const [isLevelScreen,setIsLevelScreen]=useState(false);
    
    const [answer, setAnswer] = useState();
    console.log(marginSize);
    const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
    });


    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBackgroundColor }}>
            {/* mainscreen */}
            <View style={styles.mainScreenContainer}>
                <View style={styles.mainScreensubContainer}>
                    {/* <BannerAds/> */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{marginBottom:50}}>
                            <Text style={{ fontWeight: '100', fontFamily: 'ROBOTOCONDENSED-ITALIC-VARIABLEFONT_WGHT', fontSize: customFontSize+20}}>Math Riddles</Text>
                        </View>
                        <View>
                            <IconButton name='PLAY' Icon={Ionicons} iconName='play-outline' size={30}/>
                            <IconButton name='LEVELS' Icon={Ionicons} iconName='grid-outline' size={30}/>
                            <IconButton name='SOUND ON' Icon={AntDesign} iconName='sound' size={30}/>
                            <IconButton name='SETTING' Icon={Ionicons} iconName='settings-outline' size={30}/>
                            <IconButton name='EXIT' Icon={AntDesign} iconName='close' size={30}/>
                        </View>
                    </View>
                    
                </View>
            </View>
            {/* Level screen */}
            {/* <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: marginSize }}>
                    <Ionicons name='chevron-back' size={customFontSize+20} color={colors.textColor} style={{ fontWeight: '100', marginRight: 20 }} />
                    <Text style={{ fontSize: customFontSize+8, fontWeight: '500', color:colors.textColor }}>LEVELS</Text>
                </View>
                <View style={styles.levelScreenContainer}>
                    <View style={styles.levelScreensubContainer}>
                        <FlatList
                            data={ Array.from({ length: 100 }, (_, index) => index + 1)}
                            renderItem={({ item }) => (
                                <LevelButton itemWidth={ITEM_WIDTH} item={item}/>
                            )}
                            numColumns={COLUMN_COUNT}
                            keyExtractor={(item) => item.toString()}
                            contentContainerStyle={styles.flatListContainer}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View> */}
            {/* Final Level screen */}
            {/* <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: marginSize }}>
                    <Ionicons name='chevron-back' size={customFontSize+20} color={colors.textColor} style={{ fontWeight: '100', marginRight: 20,alignItems:'center' }} />
                    <Text style={{ fontSize: customFontSize+8, fontWeight: '500', color: colors.textColor }}>Level 1</Text>
                </View>

                <View style={[styles.finalLevelScreenContainer, { marginTop:marginSize }]}>
                    <View style={styles.finalLevelScreensubContainer}>

                    </View>
                </View>

                <View style={{ flex: 0.25, margin: 10, borderWidth: 1, borderColor: colors.buttonColor, padding: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,flex:0.4}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttonColor ,flex:1,marginHorizontal:3}}>
                            <Text style={{ padding: 10, width: width / 3.5, fontSize: customFontSize, fontWeight: '300', color: colors.textColor,flex:1}}>Answer</Text>
                            <TouchableOpacity style={{ padding:10}}><AntDesign name='close' size={customFontSize} color={colors.textColor} /></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor:colors.buttonColor ,flex:0.3,marginHorizontal:3}}>
                            <TouchableOpacity style={{ flex:1, justifyContent:'center',alignItems: 'center' }}><AntDesign name='close' size={customFontSize} color={colors.textColor} /></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row',  justifyContent:'center',alignItems: 'center', backgroundColor: colors.buttonColor,flex:1 ,marginHorizontal:3}}>
                            <TouchableOpacity style={{}} onPress={() => {
                                sound.play((success) => {
                                    if (!success) {
                                        console.log('failed to play the sound');
                                    }
                                });
                            }}><Text style={{ width: width / 3.5, fontSize: customFontSize+2, fontWeight: '300', textAlign: 'center', color: colors.textColor }}>ENTER</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <View style={{ flex: 1, flexDirection: 'row',marginBottom:5}}>
                            <KeyboardButton item={1} />
                            <KeyboardButton item={2} />
                            <KeyboardButton item={3} />
                            <KeyboardButton item={4} />
                            <KeyboardButton item={5} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <KeyboardButton item={6} />
                            <KeyboardButton item={7} />
                            <KeyboardButton item={8} />
                            <KeyboardButton item={9} />
                            <KeyboardButton item={0} />
                        </View>
                        <View></View>
                    </View>
                </View>



            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    mainScreenContainer: {
        flex: 1,
        shadowColor: '#000', // Shadow color
        shadowOpacity: 0.2, // Shadow opacity
        shadowOffset: { width: 1, height: 1 }, // Shadow offset
        shadowRadius: 4, // Shadow radius
        elevation: 4, // Elevation (Android only)
        margin: 5,
        borderRadius: 2,

    },
    mainScreensubContainer: {
        flex: 1,
        margin: 3,
        borderRadius: 2,
    },
    levelScreenContainer: {
        flex: 1,
        shadowColor: '#000', // Shadow color
        shadowOpacity: 0.2, // Shadow opacity
        shadowOffset: { width: 1, height: 1 }, // Shadow offset
        shadowRadius: 4, // Shadow radius
        elevation: 4, // Elevation (Android only)
        marginTop: marginSize,
        borderRadius: 2,
        marginHorizontal:marginSize,
        justifyContent: 'center',
        alignItems: 'center',

    },
    levelScreensubContainer: {
        flex: 1,
        margin: 3,
        borderRadius: 2,
        paddingTop: 15,
    },
    flatListContainer: {
        paddingHorizontal: 5,
        
    },
    finalLevelScreenContainer: {
        flex: 0.75,
        shadowColor: '#000', // Shadow color
        shadowOpacity: 0.2, // Shadow opacity
        shadowOffset: { width: 1, height: 1 }, // Shadow offset
        shadowRadius: 4, // Shadow radius
        elevation: 4, // Elevation (Android only)
        borderRadius: 2,
        marginHorizontal: 10,

    },
    finalLevelScreensubContainer: {
        flex: 1,
        borderRadius: 2,

    }

})
export default MainScreen
