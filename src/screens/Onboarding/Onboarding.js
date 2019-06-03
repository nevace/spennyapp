import React, { Component } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Navigation } from 'react-native-navigation';
import { Container, ImageContainer, TextContainer, Footer, ButtonContainer, Text, Heading } from './Onboarding.styled';
import { button } from '../../styles';
import { goHome } from '../../navigation';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

//@TODO use redux to store/access user data
const slides = [
	{
		key: 'onboarding1',
		heading: 'Welcome to the rewards of the future, Ben.',
		text:
			'To start earning rewards straight away, add your debit or credit card securley. Any future payments will be monitored for payments to be made back into your account.',
		image: require('../../../assets/images/onboarding-1.png')
	},
	{
		key: 'onboarding2'
	},
	{
		key: 'onboarding3',
		heading: 'Ben, you are ready to start earning discounts.',
		text: 'To help you get the most out of your rewards, we will like to notify you of the best deals around you.',
		footer: 'All your information is stored securley.',
		image: require('../../../assets/images/onboarding-2.png'),
		button: true
	}
];

class Onboarding extends Component {
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
			// await AsyncStorage.setItem('onboarded', 'true');
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<AppIntroSlider
				renderItem={this.renderItem}
				slides={slides}
				dotStyle={{ backgroundColor: '#DAE7EE' }}
				activeDotStyle={{ backgroundColor: '#37393A' }}
				showSkipButton
				onSkip={goHome}
				showDoneButton={false}
				buttonTextStyle={{color: 'red'}}
			/>
		);
	}
}

export default Onboarding;
