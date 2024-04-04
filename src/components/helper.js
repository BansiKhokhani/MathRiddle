import { Dimensions } from 'react-native'
// Get the dimensions of the screen
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Define a scaling factor or percentage for font size adjustment
const FONT_SCALE_FACTOR = 0.04; // You can adjust this factor based on your preference

// Calculate the font size based on the window width or height
export const customFontSize = Math.round(FONT_SCALE_FACTOR * Math.min(windowWidth, windowHeight));

// Define a scaling factor or percentage for margin adjustment
const MARGIN_SCALE_FACTOR = 0.03; // You can adjust this factor based on your preference

// Calculate the margin based on the window width or height
export const marginSize = Math.round(MARGIN_SCALE_FACTOR * Math.min(windowWidth, windowHeight));

export const completedLevelAsyncStorageKey='completedLevel';