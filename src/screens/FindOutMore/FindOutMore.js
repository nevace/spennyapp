import React from 'react';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Title, ButtonContainer, Text } from './FindOutMore.styled';
import { button } from '../../styles';


const FindOutMore = ({ componentId }) => {
	const slides = [
		{
			key: 'findoutMore1',
			title: 'Rewards of the future',
			text: 'Earn cashback directly into your bank account when you buy your meals with our partners.',
			image: require('../../../assets/images/find-out-more-1.png')
		},
		{
			key: 'findoutMore2',
			title: 'Leading rewards',
			text: 'Discover value. Compared to our competitors we offer upto 3x more cashback.',
			image: require('../../../assets/images/find-out-more-2.png')
		},
		{
			key: 'findoutMore3',
			title: 'Our partners',
			text: 'Offers. We are always working with great partners to offer you the best deal possible.',
			image: require('../../../assets/images/find-out-more-3.png'),
			button: true
		}
	];
	const renderItem = item => {
		return (
			<ImageBackground source={item.image} style={{ width: '100%', height: '100%' }}>
				<LinearGradient
					colors={['#ffffff00', '#ffffff']}
					style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 100 }}
				>
					<Title>{item.title}</Title>
					<Text>{item.text}</Text>
					{item.button && (
						<ButtonContainer>
							<Button
								type="outline"
								onPress={() => Navigation.dismissModal(componentId)}
								title="Get Started"
								titleStyle={{ color: '#37393A', fontSize: 14 }}
								buttonStyle={button}
								raised
							/>
						</ButtonContainer>
					)}
				</LinearGradient>
			</ImageBackground>
		);
	};

	return (
		<AppIntroSlider
			renderItem={renderItem}
			slides={slides}
			showNextButton={false}
			showDoneButton={false}
			dotStyle={{ backgroundColor: '#DAE7EE' }}
			activeDotStyle={{ backgroundColor: '#37393A' }}
		/>
	);
};

export default FindOutMore;
