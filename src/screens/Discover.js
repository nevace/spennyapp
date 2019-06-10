import React, { PureComponent } from 'react';
import RestaurantList from '../components/RestaurantList';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Banner from '../components/Banner/Banner';

class Discover extends PureComponent {
	state = { banner: false };

	showBanner = () => {
		this.setState({ banner: true });
	};

	render() {
		const { restaurants, componentId } = this.props;
		const { banner } = this.state;

		return (
			<>
				{banner && <Banner text="Turn on Location Services for the best experience." />}
				{isLoaded(restaurants) && (
					<RestaurantList
						title="Fine Dining"
						data={Object.values(restaurants)}
						componentId={componentId}
						showBanner={this.showBanner}
						banner={banner}
					/>
				)}
			</>
		);

		// if (isEmpty(todos)) {
		// 	return <div>Todos List Is Empty</div>
		// }
	}
}

export default compose(
	firestoreConnect(['restaurants']),
	connect(state => ({ restaurants: state.firestore.data.restaurants }))
)(Discover);
