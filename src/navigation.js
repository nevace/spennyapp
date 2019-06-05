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
			Navigation.setDefaultOptions({
				topBar: {
					hideOnScroll: false,
					// animate: true,
					background: {
						color: 'rgba(248,248,248,0.82)',
					},
					title: {
						component: {
							name: 'SpennyLogo'
						}
					}
				}
			});

			Navigation.setRoot({
				root: {
					bottomTabs: {
						children: [
							{
								stack: {
									children: [
										{
											component: {
												name: 'Home',
												options: {
													bottomTab: {
														text: 'Home',
														fontSize: 12
														// icon: require('./signup.png')
													}
												}
											}
										}
									]
								}
							},
							{
								stack: {
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
										}
									]
								}
							},
							{
								stack: {
									children: [
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
