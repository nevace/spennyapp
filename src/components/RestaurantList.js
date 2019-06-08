import React, { Component } from 'react';
import { Platform } from 'react-native';
import HorizontalList from './HorizontalList/HorizontalList';
import { Navigation } from 'react-native-navigation';
import Geolocation from 'react-native-geolocation-service';

class RestaurantList extends Component {
	state = {
		data: null,
		latitude: null,
		longitude: null,
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

	async componentDidMount() {
		if (Platform.OS === 'android') {
			const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

			if (permission === PermissionsAndroid.RESULTS.DENIED) {
				// show no location banner
				this.setState({ error: 'PERMISSION_DENIED' });
				return;
			}

			this.watchId = Geolocation.watchPosition(
				position => {
					const updateDistanceData = this.props.data.map(restaurant => {
						//restaurant.distance =  //position.coords.latitude //position.coords.longitude calculation
						return restaurant;
					});
					this.setState({
						data: updateDistanceData,
						error: null
					});
				},
				error => this.setState({ error: error.message }),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
			);
		}
	}

	render() {
		const { title } = this.props;
		const { data } = this.state;

		return data && <HorizontalList title={title} data={data} onItemPress={this.handleItemPress} />;
	}
}

export default RestaurantList;
