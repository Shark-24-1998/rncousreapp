/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import StackDemo from './src/navigation/stack/StackDemo';
import DrawerDemo from './src/navigation/drawer/DrawerDemo';

AppRegistry.registerComponent(appName, () => DrawerDemo );
