import React, { PureComponent } from 'react';
import { View, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Name, Container, Address } from './RestaurantDetail.styled';

class RestaurantDetail extends PureComponent {
	static options() {
		return {
			topBar: {
				hideOnScroll: true,
				drawBehind: true,
				backButton: {
					color: 'white'
				},
				background: {
					color: 'transparent'
				},
				title: {
					component: {
						passProps: { hide: true }
					}
				}
			}
		};
	}

	constructor(props) {
		super(props);
		StatusBar.setHidden(true);
	}

	render() {
		const { featuredImage, name, location } = this.props;
		return (
			<View>
				<FastImage source={{ uri: featuredImage }} style={{ height: 211, width: '100%' }} />
				<Container>
					<Name>{name}</Name>
					<Address>{location.address}</Address>
				</Container>
			</View>
		);
	}
}

export default RestaurantDetail;
