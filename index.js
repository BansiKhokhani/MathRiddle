/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigationContainer from './navigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigationContainer);
