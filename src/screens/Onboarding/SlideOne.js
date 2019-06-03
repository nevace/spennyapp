import React from 'react';
import { Container,  Heading, ImageContainer, Text, TextContainer } from './Onboarding.styled';
import { Image } from 'react-native';


const SlideOne = ({heading, text}) => {
	return (
		<Container>
			<ImageContainer>
				<Image
					source={require('../../../assets/images/onboarding-1.png')}
					style={{ width: '100%', height: '100%' }}
				/>
			</ImageContainer>
			<TextContainer>
				<Heading>{heading}</Heading>
				<Text>{text}</Text>
			</TextContainer>
		</Container>
	)
}

export default SlideOne;