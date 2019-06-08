import React, { Component } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import HorizontalList from './HorizontalList/HorizontalList';
import { Navigation } from 'react-native-navigation';
import Geolocation from 'react-native-geolocation-service';

class RestaurantList extends Component {
	state = {
		data: null,
		error: null
	};

	watchId = null;

	handleItemPress = data => () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'RestaurantDetail',
				passProps: data
			}
		});
	};

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentWillUnmount() {
		if (this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	async componentDidAppear() {
		if (Platform.OS === 'android') {
			const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

			if (permission === PermissionsAndroid.RESULTS.DENIED) {
				// show no location banner
				this.setState({ error: 'PERMISSION_DENIED' });
				return;
			}
		} else {
			await navigator.geolocation.requestAuthorization();
		}

		this.watchId = Geolocation.watchPosition(
			position => {
				console.log('pos', position);
				const updateDistanceData = this.props.data.map(restaurant => {
					//restaurant.distance =  //position.coords.latitude //position.coords.longitude calculation
					return restaurant;
				});
				this.setState({
					data: updateDistanceData,
					error: null
				});
			},
			error => {
				console.log('er', error);
				// show no location banner
				this.setState({ error: error.message });
			},
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
		);
	}

	componentDidDisappear() {
		Geolocation.clearWatch(this.watchId);
	}

	render() {
		const { data } = this.state;

		return data ? <HorizontalList title={this.props.title} data={data} onItemPress={this.handleItemPress} /> : null;
	}
}

export default RestaurantList;
