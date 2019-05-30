import React from 'react';
import { Button } from 'react-native-elements';
import { Text } from 'react-native';
import { facebookSignIn, googleSignIn } from '../../userSignInFlows';
import { Container, LogoContainer, Logo, Strapline, SignInButtons, Terms, Intro } from './SignIn.styled';
import spennyLogo from '../../../assets/images/spenny-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Navigation } from 'react-native-navigation';
import {buttonLeft} from '../../styles';

const SignIn = ({ componentId }) => {
	return (
		<Container>
			<LogoContainer>
				<Logo source={spennyLogo} />
				<Strapline>Rewards of the future</Strapline>
			</LogoContainer>
			<SignInButtons>
				{/*<Button*/}
					{/*type="outline"*/}
					{/*icon={<FontAwesomeIcon icon={faLinkedinIn} color="#0077B5" size={22} />}*/}
					{/*onPress={facebookSignIn}*/}
					{/*title="Sign in with LinkedIn"*/}
					{/*titleStyle={{ color: '#0077B5', paddingLeft: 15, fontSize: 16 }}*/}
					{/*buttonStyle={buttonLeft}*/}
					{/*containerStyle={{ marginBottom: 10 }}*/}
					{/*raised*/}
				{/*/>*/}
				<Button
					type="outline"
					icon={<FontAwesomeIcon icon={faGoogle} color="#4285F4" size={22} />}
					onPress={googleSignIn}
					title="Sign in with Google"
					titleStyle={{ color: '#4285F4', paddingLeft: 15, fontSize: 14 }}
					buttonStyle={buttonLeft}
					containerStyle={{ marginBottom: 10 }}
					raised
				/>
				<Button
					type="outline"
					icon={<FontAwesomeIcon icon={faFacebookF} color="#3C5193" size={22} />}
					onPress={facebookSignIn}
					title="Sign in with Facebook"
					titleStyle={{ color: '#3C5193', paddingLeft: 15, fontSize: 14 }}
					buttonStyle={buttonLeft}
					containerStyle={{ marginBottom: 10 }}
					raised
				/>
				<Intro onPress={() => Navigation.showModal({ component: { name: 'FindOutMore' } })}>
					Find out more
				</Intro>
				<Terms>By signing up to Spenny you are agreeing to our Terms and Privacy Policy</Terms>
			</SignInButtons>
		</Container>
	);
};

export default SignIn;
