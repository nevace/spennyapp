import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { goToAuth, goHome } from '../navigation';
import firebase from 'react-native-firebase';

export default class Initialising extends Component {
	async componentDidMount() {
		goToAuth();

		// try {
		// 	firebase.auth().onAuthStateChanged(user => {
		// 		if (user) {
		// 			goHome();
		// 		} else {
		// 			goToAuth();
		// 		}
		// 	});
		// } catch (err) {
		// 	console.log('error: ', err);
		// 	goToAuth();
		// }
	}

	render() {
		// this will show the splash screen
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Loading</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 28
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
