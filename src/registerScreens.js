import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './store';
import RNFirebase from 'react-native-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const screens = {
	Initialising: require('./screens/Initialising').default,
	SignIn: require('./screens/SignIn/SignIn').default,
	FindOutMore: require('./screens/FindOutMore/FindOutMore').default,
	Onboarding: require('./screens/Onboarding/Onboarding').default,
	Home: require('./screens/Home').default,
	Discover: require('./screens/Discover').default,
	RestaurantDetail: require('./screens/RestaurantDetail/RestaurantDetail').default,
	Account: require('./screens/Account').default
};

const rrfProps = {
	firebase: RNFirebase.initializeApp(),
	config: { userProfile: 'users', useFirestoreForProfile: true },
	dispatch: store.dispatch,
	createFirestoreInstance
};

export function registerScreens() {
	for (let screen of Object.keys(screens)) {
		const Component = screens[screen];

		Navigation.registerComponent(
			screen,
			() => props => (
				<Provider store={store}>
					<ReactReduxFirebaseProvider {...rrfProps}>
						<Component {...props} />
					</ReactReduxFirebaseProvider>
				</Provider>
			),
			() => Component
		);
	}

	//register logo for nav bar
	Navigation.registerComponent('SpennyLogo', () => require('./components/SpennyLogo').default);
}
