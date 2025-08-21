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
import UseComtextHook from './src/hooks/UseContextHook';
import UseCallBackHook from './src/hooks/useCallBack/UseCallBackHook';
import LinearGradietDemo from './src/gradient-&-blurview/LinearGradietDemo';
import BlurViewDemo from './src/gradient-&-blurview/BlurViewDemo';
import UseMemoHook from './src/hooks/UseMemoHook';
import UseReducerHook from './src/hooks/UseReducerHook';
import PermissionsDemo from './src/permission-handling/PermissionsDemo';

AppRegistry.registerComponent(appName, () => PermissionsDemo);
