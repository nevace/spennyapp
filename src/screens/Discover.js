import React, { Component } from 'react';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Discover extends Component {
	render() {
		const { restaurants } = this.props;

		return isLoaded(restaurants) ? <HorizontalList title="Fine Dining" data={Object.values(restaurants)} /> : null;

		// if (isEmpty(todos)) {
		// 	return <div>Todos List Is Empty</div>
		// }
	}
}

export default compose(
	firestoreConnect(['restaurants']),
	connect(state => ({ restaurants: state.firestore.data.restaurants }))
)(Discover);
