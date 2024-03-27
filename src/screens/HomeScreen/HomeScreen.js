import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Image } from 'react-native'
import colors from '../../components/colors'
import IconButton from '../../components/Button/IconButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { BannerAds } from '../../components/Ads/Ads';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import LevelButton from '../../components/Button/LevelButton';
import Level from '../../components/LevelScreen/LevelScreen';
import KeyboardButton from '../../components/Button/keyboardButton';
const { width } = Dimensions.get('window');
import { customFontSize, marginSize } from '../../components/helper';
import { AnswerOfLevel } from '../../components/AnswerOfLevel/AnswerOfLevel';
import CorrectScreen from '../../components/CorrectScreen/CorrectScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLUMN_COUNT = 5;
const ITEM_WIDTH = width / (COLUMN_COUNT + 1);
const wrongAnswerSoundFile = require('./../../../assets/sound/wronganswer.mp3');
const correctAnswerSoundFile = require('./../../../assets/sound/correctanswer.mp3')

function HomeScreen() {
    const [isMainScreen, setIsMainScreen] = useState(true);
    const [isAllLevelScreen, setIsAllLevelScreen] = useState(false);
    const [isLevelScreen, setIsLevelScreen] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [correctAnswerScreen, setCorrectAnswerScreen] = useState(false);
    const [unlockLevel,setUnlockLevel]=useState(0);
    const [answer, setAnswer] = useState(0);


    useEffect(() => {
       unlockLevelNumber();
    }, []);

    const wrongAnswerSound = new Sound(wrongAnswerSoundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
    });
    const correctAnswerSound = new Sound(correctAnswerSoundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
    });

    const unlockLevelNumber=()=>{
     
        loadData().then((value)=>{
            if(value!=null)
                setUnlockLevel(value)
            else
                setUnlockLevel(1);
        });
        
    }
    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('completedLevel');
            return JSON.parse(value);
        } catch (error) {
            console.log('Error loading data:', error);
            return 1;
        }
    };
    const saveData = async (levelNumber) => {
        try {
            
            loadData().then((value)=>{console.log(value)})
            await AsyncStorage.setItem('completedLevel',JSON.stringify(levelNumber));
            console.log('Data saved successfully.');
        } catch (error) {
            console.log('Error saving data:', error);
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBackgroundColor }}>
            {/* mainscreen */}
            {isMainScreen &&
                <View style={styles.mainScreenContainer}>
                    <View style={styles.mainScreensubContainer}>
                        {/* <BannerAds/> */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <View style={{ marginBottom: 50 }}>
                                <Text style={{ fontWeight: '100', fontFamily: 'ROBOTOCONDENSED-ITALIC-VARIABLEFONT_WGHT', fontSize: customFontSize + 20 }}>Math Riddles</Text>
                            </View>
                            <View>
                                <IconButton name='PLAY' Icon={Ionicons} iconName='play-outline' onCallback={(value) => { setIsMainScreen(false), setIsLevelScreen(true),unlockLevelNumber(),setSelectedLevel(unlockLevel)}} />
                                <IconButton name='LEVELS' Icon={Ionicons} iconName='grid-outline' onCallback={() => { setIsMainScreen(false), setIsAllLevelScreen(true) }} />
                                <IconButton name={isSoundOn ? 'SOUND ON' : 'SOUND OFF'} Icon={Entypo} iconName={isSoundOn ? 'sound' : 'sound-mute'} onCallback={() => { setIsSoundOn(!isSoundOn) }} />
                                <IconButton name='SETTING' Icon={Ionicons} iconName='settings-outline' onCallback={() => { console.log('setting') }} />
                                <IconButton name='EXIT' Icon={AntDesign} iconName='close' onCallback={() => { console.log('exit') }} />
                            </View>
                        </View>

                    </View>
                </View>}
            {/* Level screen */}
            {isAllLevelScreen && <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: marginSize }}>
                    <TouchableOpacity onPress={() => { setIsMainScreen(true), setIsAllLevelScreen(false) }} ><Ionicons name='chevron-back' size={customFontSize + 20} color={colors.textColor} style={{ fontWeight: '100', marginRight: 20 }} /></TouchableOpacity>
                    <Text style={{ fontSize: customFontSize + 8, fontWeight: '500', color: colors.textColor }}>LEVELS</Text>
                </View>
                <View style={styles.levelScreenContainer}>
                    <View style={styles.levelScreensubContainer}>
                        <FlatList
                            data={Array.from({ length: 100 }, (_, index) => index + 1)}
                            renderItem={({ item, index }) => (
                                <LevelButton itemWidth={ITEM_WIDTH} item={item} levelNumber={index + 1} onCallBack={(levelNumber) => { unlockLevelNumber();if (levelNumber <= unlockLevel) { setIsLevelScreen(true), setIsAllLevelScreen(false), setSelectedLevel(levelNumber) } }} />
                            )}
                            numColumns={COLUMN_COUNT}
                            keyExtractor={(item) => item.toString()}
                            contentContainerStyle={styles.flatListContainer}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>}
            {/* Final Level screen */}
            {isLevelScreen &&
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: marginSize }}>
                        <TouchableOpacity onPress={() => { setIsAllLevelScreen(true), setIsLevelScreen(false) }} ><View><Ionicons name='chevron-back' size={customFontSize + 20} color={colors.textColor} style={{ fontWeight: '100', marginRight: 20, alignItems: 'center' }} /></View></TouchableOpacity>
                        <Text style={{ fontSize: customFontSize + 8, fontWeight: '500', color: colors.textColor }}>Level {selectedLevel}</Text>
                    </View>

                    <View style={[styles.finalLevelScreenContainer, { marginTop: marginSize }]}>
                        <View style={styles.finalLevelScreensubContainer}>
                            <Level currentLevel={selectedLevel} />
                        </View>
                    </View>

                    <View style={{ flex: 0.25, margin: 10, borderWidth: 1, borderColor: colors.buttonColor, padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.4 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttonColor, flex: 1, marginHorizontal: 3 }}>
                                <Text style={{ padding: 10, width: width / 3.5, fontSize: customFontSize, fontWeight: '300', color: colors.textColor, flex: 1 }}>{answer == 0 ? 'Answer' : answer}</Text>
                                <TouchableOpacity style={{ padding: 10 }} onPress={() => { setAnswer(0) }}><AntDesign name='close' size={customFontSize} color={colors.textColor} /></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: colors.buttonColor, flex: 0.3, marginHorizontal: 3 }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} ><Image source={require('../../../assets/images/idea.png')} resizeMode={'cover'} style={{ alignSelf: 'center', height: '50%', width: '50%', tintColor: colors.textColor }} /></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.buttonColor, flex: 1, marginHorizontal: 3 }}>
                                <TouchableOpacity style={{}} onPress={() => {
                                    const correctAnswer = (answer == AnswerOfLevel[selectedLevel]);
                                    if (isSoundOn) {
                                        const sound = correctAnswer ? correctAnswerSound : wrongAnswerSound;
                                        sound.play((success) => {
                                            if (!success) {
                                                console.log('failed to play the sound');
                                            }
                                        });
                                    }
                                    if (correctAnswer) {
                                        console.log('next level');
                                        setIsLevelScreen(false);
                                        setCorrectAnswerScreen(true);
                                    }
                                    setAnswer(0)

                                }}><Text style={{ width: width / 3.5, fontSize: customFontSize + 2, fontWeight: '300', textAlign: 'center', color: colors.textColor }}>ENTER</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginTop: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                                <KeyboardButton item={1} isPress={() => { setAnswer((answer * 10) + 1) }} />
                                <KeyboardButton item={2} isPress={() => { setAnswer((answer * 10) + 2) }} />
                                <KeyboardButton item={3} isPress={() => { setAnswer((answer * 10 + 3)) }} />
                                <KeyboardButton item={4} isPress={() => { setAnswer((answer * 10) + 4) }} />
                                <KeyboardButton item={5} isPress={() => { setAnswer((answer * 10) + 5) }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <KeyboardButton item={6} isPress={() => { setAnswer((answer * 10) + 6) }} />
                                <KeyboardButton item={7} isPress={() => { setAnswer((answer * 10) + 7) }} />
                                <KeyboardButton item={8} isPress={() => { setAnswer((answer * 10) + 8) }} />
                                <KeyboardButton item={9} isPress={() => { setAnswer((answer * 10) + 9) }} />
                                <KeyboardButton item={0} isPress={() => { setAnswer((answer * 10 + 0)) }} />
                            </View>
                        </View>
                    </View>
                </View>}
            {correctAnswerScreen &&
                <CorrectScreen onCallBack={() => { setCorrectAnswerScreen(false), setIsLevelScreen(true), setSelectedLevel(selectedLevel + 1), saveData(selectedLevel + 1) }} />

            }
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
        marginHorizontal: marginSize,
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
export default HomeScreen
