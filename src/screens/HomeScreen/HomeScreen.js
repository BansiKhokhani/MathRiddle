import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Image, BackHandler ,Linking} from 'react-native'
import colors from '../../components/colors'
import IconButton from '../../components/Button/IconButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import LevelButton from '../../components/Button/LevelButton';
import Level from '../../components/LevelScreen/LevelScreen';
import KeyboardButton from '../../components/Button/keyboardButton';
const { width } = Dimensions.get('window');
import { customFontSize, marginSize } from '../../components/helper';
import { AnswerOfLevel} from '../../components/AnswerOfLevel/AnswerOfLevel';
import { HintOfLevel } from '../../components/AnswerOfLevel/HintOfLevel';
import CorrectScreen from '../../components/CorrectScreen/CorrectScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExitPopup from '../../components/popup/exitPopup';
import SettingPopup from '../../components/popup/settingPopup';
import { completedLevelAsyncStorageKey } from '../../components/helper';
import ClearData from '../../components/popup/clearData';
import Help from '../../components/popup/help';
import Toast from 'react-native-simple-toast';
import CongretulationScreen from '../../components/CongretulationScreen/CongretulationScreen';

const COLUMN_COUNT = 5;
const ITEM_WIDTH = width / (COLUMN_COUNT + 1);
const wrongAnswerSoundFile = require('./../../../assets/sound/wronganswer.mp3');
const correctAnswerSoundFile = require('./../../../assets/sound/correctanswer.mp3')

function HomeScreen() {
    const [isMainScreen, setIsMainScreen] = useState(true);
    const [isAllLevelScreen, setIsAllLevelScreen] = useState(false);
    const [isLevelScreen, setIsLevelScreen] = useState(false);
    const [isExit, setIsExit] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isClearData, setIsClearData] = useState(false);
    const [isHelp, setIsHelp] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [isCongretulationScreen, setIsCongretulationScreen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [correctAnswerScreen, setCorrectAnswerScreen] = useState(false);
    const [unlockLevel, setUnlockLevel] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [isWrongAnswer,setIsWrongAnswer]=useState(false);

    useEffect(() => {
        const backAction = () => {
            setIsExit(true);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();

    }, []);

    useEffect(() => {
        unlockLevelNumber();
    }, [isAllLevelScreen, isLevelScreen, isClearData, isMainScreen]);

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

    const unlockLevelNumber = () => {

        loadData().then((value) => {
            if (value != null)
                setUnlockLevel(value)
            else
                setUnlockLevel(1);
        });

    }
    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem(completedLevelAsyncStorageKey);
            return JSON.parse(value);
        } catch (error) {
            console.log('Error loading data:', error);
            return 1;
        }
    };
    const saveData = async (levelNumber) => {
        try {

            loadData().then((value) => { console.log(value) })
            await AsyncStorage.setItem(completedLevelAsyncStorageKey, JSON.stringify(levelNumber));
            console.log('Data saved successfully.');
        } catch (error) {
            console.log('Error saving data:', error);
        }
    };
    const showTextForDuration = () => {
        setIsWrongAnswer(true)
        setTimeout(() => {
          setIsWrongAnswer(false)
        }, 2000);
      };

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBackgroundColor }}>
            {/* mainscreen */}
            {isMainScreen &&
                <View style={styles.mainScreenContainer}>
                    <View style={styles.mainScreensubContainer}>
                        <View style={{ margin: 15, flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={1} style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                                Linking.openURL('https://play.google.com/store/apps/details?id=com.harekrishna.expensemanager')
                                    .catch(err => console.error('An error occurred', err));
                            }}>

                                <Text style={{ fontWeight: '100', fontStyle: 'italic', fontSize: customFontSize / 1.5, color: colors.textColor }}>AD</Text>
                                <Image source={require('../../../assets/images/Expense_Manager_AppIcon.png')} style={{ height: 50, width: 50, borderRadius: 12 }}></Image>
                                <Text style={{ fontWeight: '300', fontSize: customFontSize / 1.5, color: colors.textColor }}>Expense</Text>
                                <Text style={{ fontWeight: '300', fontSize: customFontSize / 1.5, color: colors.textColor }}>Manager</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <View style={{ marginBottom: 50 }}>
                                <Text style={{ fontWeight: '100', fontFamily:'PixelifySans-Medium', fontSize: customFontSize + 30 }}>Math Riddles</Text>
                            </View>
                            <View>
                                <IconButton name='PLAY' Icon={Ionicons} iconName='play-outline' onCallback={(value) => { setIsMainScreen(false), setIsLevelScreen(true), unlockLevelNumber(), setSelectedLevel(unlockLevel) }} />
                                <IconButton name='LEVELS' Icon={Ionicons} iconName='grid-outline' onCallback={() => { setIsMainScreen(false), setIsAllLevelScreen(true) }} />
                                <IconButton name={isSoundOn ? 'SOUND ON' : 'SOUND OFF'} Icon={Entypo} iconName={isSoundOn ? 'sound' : 'sound-mute'} onCallback={() => { setIsSoundOn(!isSoundOn) }} />
                                <IconButton name='SETTING' Icon={Ionicons} iconName='settings-outline' onCallback={() => { setIsSettings(!isSettings) }} />
                                <IconButton name='EXIT' Icon={AntDesign} iconName='close' onCallback={() => { setIsExit(!isExit) }} />
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
                            data={Array.from({ length: 50 }, (_, index) => index + 1)}
                            renderItem={({ item, index }) => (
                                <LevelButton itemWidth={ITEM_WIDTH} item={item} color={(index + 1) <= unlockLevel ? colors.activeLevelColor : colors.disableLevelColor} levelNumber={index + 1} onCallBack={(levelNumber) => { unlockLevelNumber(); if (levelNumber <= unlockLevel) { setIsLevelScreen(true), setIsAllLevelScreen(false), setSelectedLevel(levelNumber) } }} />
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
                        <TouchableOpacity activeOpacity={1} onPress={() => { setIsAllLevelScreen(true), setIsLevelScreen(false) }} ><View><Ionicons name='chevron-back' size={customFontSize + 20} color={colors.textColor} style={{ fontWeight: '100', marginRight: 20, alignItems: 'center' }} /></View></TouchableOpacity>
                        <Text style={{ fontSize: customFontSize + 8, fontWeight: '500', color: colors.textColor }}>Level {selectedLevel}</Text>
                    </View>

                    <View style={[styles.finalLevelScreenContainer, { marginTop: marginSize }]}>
                        <View style={styles.finalLevelScreensubContainer}>
                            <Level currentLevel={selectedLevel} />
                           <Text style={{textAlign:'center',marginBottom:marginSize,fontSize:customFontSize,color:colors.textColor}}>{isWrongAnswer?'Wrong Answer !':'  '}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.25, margin: 10, borderWidth: 1, borderColor: colors.buttonColor, padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.4 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttonColor, flex: 1, marginHorizontal: 3 }}>
                                <Text style={{ padding: 10, width: width / 3.5, fontSize: customFontSize, fontWeight: '300', color: colors.textColor, flex: 1 }}>{answer == 0 ? 'Answer' : answer}</Text>
                                <TouchableOpacity activeOpacity={1} style={{ padding: 10 }} onPress={() => { setAnswer(0) }}><AntDesign name='close' size={customFontSize} color={colors.textColor} /></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: colors.buttonColor, flex: 0.3, marginHorizontal: 3 }}>
                                <TouchableOpacity  activeOpacity={1} onPress={() => { setIsHelp(true) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} ><Image source={require('../../../assets/images/idea.png')} resizeMode={'cover'} style={{ alignSelf: 'center', height: '50%', width: '50%', tintColor: colors.textColor }} /></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.buttonColor, flex: 1, marginHorizontal: 3 }}>
                                <TouchableOpacity  activeOpacity={1} style={{}} onPress={() => {
                                    const correctAnswer = (answer == AnswerOfLevel[selectedLevel-1]);
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
                                        if(selectedLevel>=50)
                                            setIsCongretulationScreen(true);
                                        else
                                            setCorrectAnswerScreen(true);
                                        
                                    }
                                    else
                                        showTextForDuration();
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
                <CorrectScreen onCallBack={() => {setCorrectAnswerScreen(false), setIsLevelScreen(true), setSelectedLevel(selectedLevel + 1), saveData(selectedLevel + 1) }} />
            }
            {isExit &&
                <ExitPopup onCallBack={(value) => { setIsExit(value) }} />
            }
            {isSettings &&
                <SettingPopup onCallBack={(value) => { (value == 'Close' ? setIsSettings(false) : (setIsSettings(false), setIsClearData(true))) }} />
            }
            {isClearData &&
                <ClearData onCallBack={(value) => { setIsClearData(value), unlockLevelNumber() }} />
            }
            {isHelp &&
                <Help hint={HintOfLevel[selectedLevel-1]} solution={AnswerOfLevel[selectedLevel-1]} onCallBack={(value) => { setIsHelp(value) }} />
            }
            {isCongretulationScreen &&
                <CongretulationScreen onCallBack={(value)=>{setIsCongretulationScreen(false),setIsMainScreen(true)}}/>
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
