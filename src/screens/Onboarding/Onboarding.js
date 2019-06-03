import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import { goHome } from '../../navigation';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import { Next, Skip } from './Onboarding.styled';

class Onboarding extends Component {

	state = {
		slides: [
			{
				key: 'onboarding1',
				heading: `Welcome to the rewards of the future, ${this.props.name}.`,
				text:
					'To start earning rewards straight away, add your debit or credit card securley. Any future payments will be monitored for payments to be made back into your account.',
				image: require('../../../assets/images/onboarding-1.png')
			},
			{
				key: 'onboarding2'
			},
			{
				key: 'onboarding3',
				heading: `${this.props.name}, you are ready to start earning discounts.`,
				text: 'To help you get the best rewards, we will notify you of the best deals closest to your current location.',
				footer: 'All your information is stored securley.',
				image: require('../../../assets/images/onboarding-2.png'),
				button: true
			}
		]
	};

	renderItem = item => {
		if (item.key === 'onboarding1') {
			return <SlideOne {...item} />;
		}

		if (item.key === 'onboarding2') {
			return <SlideTwo {...item} />;
		}

		return <SlideThree {...item} />;
	};

	async componentDidMount() {
		try {
			await AsyncStorage.setItem('onboarded', 'true');
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<AppIntroSlider
				renderItem={this.renderItem}
				slides={this.state.slides}
				dotStyle={{ backgroundColor: '#DAE7EE' }}
				activeDotStyle={{ backgroundColor: '#37393A' }}
				showSkipButton
				onSkip={goHome}
				showDoneButton={false}
				renderNextButton={() => <Next>NEXT</Next>}
				renderSkipButton={() => <Skip>SKIP</Skip>}
			/>
		);
	}
}

export default connect(({ firebase }) => ({ name: firebase.profile.firstName }))(Onboarding);
