import { Navigation } from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';

export const goHome = async () => {
	try {
		const value = await AsyncStorage.getItem('onboarded');
		if (!value) {
			Navigation.setRoot({
				root: {
					component: { name: 'Onboarding' }
				}
			});
		} else {
			Navigation.setRoot({
				root: {
					bottomTabs: {
						children: [
							{
								component: {
									name: 'Discover',
									options: {
										bottomTab: {
											text: 'Discover',
											fontSize: 12
											// icon: require('./signup.png')
										}
									}
								}
							},
							{
								component: {
									name: 'Account',
									options: {
										bottomTab: {
											fontSize: 12,
											text: 'Account'
											// icon: require('./signin.png')
										}
									}
								}
							}
						]
					}
				}
			});
		}
	} catch (err) {
		console.error(err);
	}
};

export const goToAuth = () =>
	Navigation.setRoot({
		root: {
			component: {
				name: 'SignIn'
			}
		}
	});
