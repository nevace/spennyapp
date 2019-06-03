import React from 'react';
import { Container, Footer, HeadingThree, ImageContainer, TextThree, TextContainer, ButtonContainer, FooterContainer } from './Onboarding.styled';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { button } from '../../styles';
import { goHome } from '../../navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SlideThree = ({ heading, text, footer }) => {
	return (
		<Container>
			<ImageContainer>
				<ImageBackground
					source={require('../../../assets/images/onboarding-2.png')}
					style={{ width: '100%', height: '100%' }}
				>
					<TextContainer>
						<HeadingThree>{heading}</HeadingThree>
					</TextContainer>
				</ImageBackground>
			</ImageContainer>
			<TextContainer>
				<TextThree>{text}</TextThree>
			</TextContainer>
			<FooterContainer>
				<FontAwesomeIcon icon={faLock} color="#9d9d9d" size={18}/><Footer>{footer}</Footer>
			</FooterContainer>
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
