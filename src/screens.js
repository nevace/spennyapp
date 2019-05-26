import { Navigation } from 'react-native-navigation';
import Initialising from './components/Initialising';
import Home from './components/Home';
import SignIn from './components/SignIn/SignIn';
import Discover from './components/Discover';
import Account from './components/Account';

export function registerScreens() {
	Navigation.registerComponent('Initialising', () => Initialising);
	Navigation.registerComponent('Home', () => Home);
	Navigation.registerComponent('SignIn', () => SignIn);
	Navigation.registerComponent('Discover', () => Discover);
	Navigation.registerComponent('Account', () => Account);
}
