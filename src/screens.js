import React, {createElement} from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store';

const screens = {
	Initialising: require('./screens/Initialising').default,
	SignIn: require('./screens/SignIn/SignIn').default,
	FindOutMore: require('./screens/FindOutMore/FindOutMore').default,
	Onboarding: require('./screens/Onboarding/Onboarding').default,
	Discover: require('./screens/Discover').default,
	Account: require('./screens/Account').default,
};

export function registerScreens() {
	for (let screen of Object.keys(screens)) {
		const Component = screens[screen];

		Navigation.registerComponent(
			screen,
			() => props => (
				<Provider store={store}>
					<Component {...props} />
				</Provider>
			),
			() => Component
		);
	}
}
