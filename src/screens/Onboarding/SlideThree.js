import React from 'react';
import { Container, Footer, Heading, ImageContainer, Text, TextContainer } from './Onboarding.styled';
import { ImageBackground } from 'react-native';
import { ButtonContainer, Title } from '../FindOutMore/FindOutMore.styled';
import { Button } from 'react-native-elements';
import { button } from '../../styles';
import { goHome } from '../../navigation';

const SlideThree = ({ heading, text, footer }) => {
	return (
		<Container>
			<ImageContainer>
				<ImageBackground
					source={require('../../../assets/images/onboarding-2.png')}
					style={{ width: '100%', height: '100%' }}
				>
					<TextContainer>
						<Heading>{heading}</Heading>
					</TextContainer>
				</ImageBackground>
			</ImageContainer>
			<TextContainer>
				<Text>{text}</Text>
			</TextContainer>
			<Footer>{footer}</Footer>
			<ButtonContainer>
				<Button
					type="outline"
					onPress={() => goHome()}
					title="Get Started"
					titleStyle={{ color: '#37393A', fontSize: 14 }}
					buttonStyle={button}
					raised
				/>
			</ButtonContainer>
		</Container>
	);
};

export default SlideThree;
