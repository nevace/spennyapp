import React, { PureComponent } from 'react';
import RestaurantList from '../components/RestaurantList';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Discover extends PureComponent {
	render() {
		const { restaurants, componentId } = this.props;

		return isLoaded(restaurants) ? (
			<RestaurantList title="Fine Dining" data={Object.values(restaurants)} componentId={componentId} />
		) : null;

		// if (isEmpty(todos)) {
		// 	return <div>Todos List Is Empty</div>
		// }
	}
}

export default compose(
	firestoreConnect(['restaurants']),
	connect(state => ({ restaurants: state.firestore.data.restaurants }))
)(Discover);
