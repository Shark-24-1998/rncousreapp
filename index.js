/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import StackDemo from './src/navigation/stack/StackDemo';
import DrawerDemo from './src/navigation/drawer/DrawerDemo';
import CreatAccount from './src/account/screen/CreateAccount';
import Navigation from './src/account/Navigation';
import UseStateHookDemo from './src/hooks/UseStateHookDemo';
import UseEffectHookDemo from './src/hooks/UseEffectHookDemo';

AppRegistry.registerComponent(appName, () => Navigation);
