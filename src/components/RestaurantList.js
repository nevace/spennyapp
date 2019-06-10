import React, { Component } from 'react';
import HorizontalList from './HorizontalList/HorizontalList';
import { Navigation } from 'react-native-navigation';
import getDistance from 'geolib/es/getDistance';
import RNLocation from 'react-native-location';

RNLocation.configure({
	distanceFilter: 10
});

class RestaurantList extends Component {
	state = {
		data: null
	};

	locationSubscription = null;

	handleItemPress = data => () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'RestaurantDetail',
				passProps: data
			}
		});
	};

	calculateRestaurantDistance = locations => {
		const { latitude, longitude } = locations.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];
		const updateDistanceData = this.props.data.map(restaurant => {
			const distance = Math.round(
				getDistance(
					{ latitude, longitude },
					{
						latitude: restaurant.location.geo._latitude,
						longitude: restaurant.location.geo._longitude
					}
				) / 83.33 // based on 83.33 metres per min
			);

			return { ...restaurant, distance };
		});

		this.setState({ data: updateDistanceData });
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
		const permissions = { ios: 'whenInUse', android: { detail: 'fine' } };
		const permissionsAlreadyGranted = await RNLocation.checkPermission(permissions);

		// permissions have been granted already
		if (permissionsAlreadyGranted) {
			this.locationSubscription = RNLocation.subscribeToLocationUpdates(this.calculateRestaurantDistance);
		} else {
			// request permissions (only works once)
			const requestPermissions = await RNLocation.requestPermission(permissions);

			// permissions granted
			if (requestPermissions) {
				this.locationSubscription = RNLocation.subscribeToLocationUpdates(this.calculateRestaurantDistance);
			} else {
				// requested permissions rejected by user
				this.setState({ data: this.props.data });

				this.props.showBanner();
			}
		}
	}

	componentDidDisappear() {
		this.locationSubscription && this.locationSubscription();
	}

	render() {
		const { data } = this.state;

		return data ? (
			<HorizontalList
				title={this.props.title}
				data={data}
				onItemPress={this.handleItemPress}
				banner={this.props.banner}
			/>
		) : null;
	}
}

export default RestaurantList;
