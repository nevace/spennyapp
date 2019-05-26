import { Navigation } from 'react-native-navigation';

export const goHome = () =>
	Navigation.setRoot({
		root: {
			bottomTabs: {
				children: [
					{
						component: {
							name: 'Home',
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Home'
									// icon: require('./signin.png')
								}
							}
						}
					},
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

export const goToAuth = () =>
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							name: 'SignIn'
						}
					}
				]
			}
		}
	});
