import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { goToAuth, goHome } from '../navigation';
import firebase from 'react-native-firebase';

export default class Initialising extends PureComponent {
	async componentDidMount() {
		try {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					goHome();
				} else {
					goToAuth();
				}
			});
		} catch (err) {
			console.error(err);
			goToAuth();
		}
	}

	render() {
		// this will show the splash screen
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}
}