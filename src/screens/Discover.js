import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Discover extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello from Discover screen.</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
