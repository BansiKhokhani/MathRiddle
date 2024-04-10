import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, BackHandler } from 'react-native'
import colors from '../colors';
import { customFontSize, marginSize } from '../helper';
import AnswerAndHint from '../popup/AnswerAndHint'
import Sound from 'react-native-sound';
import { RewardedAd, RewardedAdEventType, TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
const RewardedAdUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3791007458121855/9384919829';
const rewarded = RewardedAd.createForAdRequest(RewardedAdUnitId, {
  keywords: ['fashion', 'clothing'],
});

const Help = ({ hint, solution, onCallBack }) => {
  const [showinfoText, setToShowInfoText] = useState(false);
  const [isSeenAdsOfHint, setIsSeenAdsOfHint] = useState(false);
  const [isSeenAdsOfSolution, setIsSeenAdsOfSolution] = useState(false);
  const [currentSelectedButton, setCurrentSelectedButton] = useState('');
  const [isNoAds, setIsNoAds] = useState(false);
  const [showAnswerAndHint, setToShowAnswerAndHint] = useState(false)
  const wrongAnswerSoundFile = require('../../../assets/sound/wronganswer.mp3');
  const wrongAnswerSound = new Sound(wrongAnswerSoundFile, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
});


  useEffect(() => {
    console.log('useeffact')
    // Start loading the rewarded ad straight away
    rewarded.load();
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
        rewarded.load();
      },
    );
    // Unsubscribe from events on unmount
    return () => {
      unsubscribeEarned();
    };
  }, []);

  const showRewarded = (buttonType) => {
    // Show the rewarded ad when the button is pressed
    console.log(buttonType)
    if (rewarded.loaded) {
      rewarded.show().then(() => {
        if (buttonType == 'Hint') {
          console.log('Hint....');
          setIsSeenAdsOfHint(true);
        }
        else if (buttonType == 'Solution') {
          console.log('Solution');
          setIsSeenAdsOfSolution(true)
        }
      }).catch(error => {
        console.error('Failed to show rewarded ad:', error);
        // Handle error (e.g., reload the ad)
        rewarded.load();
      });

    } else {
      console.log('Rewarded ad not loaded');
      // Retry loading the ad
      setIsNoAds(true);
      const sound = wrongAnswerSound;
      sound.play((success) => {
        if (!success) {
          console.log('failed to play the sound');
        }
      });
      setTimeout(() => {
        setIsNoAds(false);
      }, 2000);
      rewarded.load();
    }

  };



  const showTextForDuration = () => {

    setTimeout(() => {
      handleToShowInfoText()
    }, 2000);
  };

  const handleToShowInfoText = () => {
    setToShowInfoText(!showinfoText)
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.alert}>
        {!showAnswerAndHint ?
          <><Text style={[styles.message, { fontWeight: '400', fontSize: customFontSize + 5 }]}>Need Help?</Text>
            {isNoAds && <Text style={[styles.message, { fontSize: customFontSize, color: colors.textColor }]}>There is no available Ads yet.</Text>}
            <TouchableOpacity activeOpacity={1} onPress={() => { !isSeenAdsOfHint ? showRewarded('Hint') : (setCurrentSelectedButton('Hint'), setToShowAnswerAndHint(true)) }} style={[styles.button, styles.restartButton]}>
              <Text style={styles.buttonText}>Watch Ads for </Text><Text style={[styles.buttonText, { fontSize: customFontSize + 2, fontWeight: 'bold' }]}>Hint </Text>
            </TouchableOpacity>
            {!showinfoText && <TouchableOpacity activeOpacity={1} onPress={() => { !isSeenAdsOfHint ? handleToShowInfoText() : isSeenAdsOfSolution ? (setCurrentSelectedButton('Solution'), setToShowAnswerAndHint(true)) : (showRewarded('Solution')) }} style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Watch Ads for </Text><Text style={[styles.buttonText, { fontSize: customFontSize + 2, fontWeight: 'bold' }]}>Solution </Text>
            </TouchableOpacity>}
            {showinfoText && (showTextForDuration())}
            {showinfoText && (<Text style={[styles.button, { backgroundColor: 'white', color: colors.textColor, borderColor: 'black', borderWidth: 1, fontWeight: '400', fontSize: customFontSize, paddingHorizontal: 45 }]}>Firstly, show hint!</Text>)}
            <TouchableOpacity onPress={() => { onCallBack(false) }} style={{ marginTop: 30, paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ color: colors.textColor }}>No, Thanks</Text>
            </TouchableOpacity></>
          :
          <AnswerAndHint data={currentSelectedButton == 'Hint' ? hint : solution} onCallBack={(value) => { setToShowAnswerAndHint(value) }} />
        }


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    backgroundColor: colors.popupBackgroundColor,
    paddingVertical: 10,
    width: '70%',
    borderRadius: 2,
    alignItems: 'center',
  },
  message: {
    marginBottom: 20,
    fontSize: customFontSize + 2,
    textAlign: 'center',
    color: colors.popupTextColor,
    fontWeight: '300'
  },
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: colors.buttonColor, paddingHorizontal: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: colors.textColor,
    fontSize: customFontSize,
    fontWeight: '400'
  },
  restartButton: {
    marginBottom: 10,
  }
});

export default Help
