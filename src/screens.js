import { Navigation } from 'react-native-navigation';
import Initialising from './screens/Initialising';
import SignIn from './screens/SignIn/SignIn';
import FindOutMore from './screens/FindOutMore/FindOutMore';
import Onboarding from './screens/Onboarding/Onboarding';
import Discover from './screens/Discover';
import Account from './screens/Account';

export function registerScreens() {
	Navigation.registerComponent('Initialising', () => Initialising);
	Navigation.registerComponent('SignIn', () => SignIn);
	Navigation.registerComponent('FindOutMore', () => FindOutMore);
	Navigation.registerComponent('Onboarding', () => Onboarding);
	Navigation.registerComponent('Discover', () => Discover);
	Navigation.registerComponent('Account', () => Account);
}
