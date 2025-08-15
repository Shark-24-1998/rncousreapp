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
import CustomModal from './src/account/screen/CustomModal';
import UseRefHook from './src/hooks/UseRefHook';

AppRegistry.registerComponent(appName, () => UseRefHook);
