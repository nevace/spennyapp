import React from 'react';
import { Button } from 'react-native-elements';
import { facebookSignIn, googleSignIn } from '../../userSignInFlows';
import { Container, LogoContainer, Logo, Strapline, SignInButtons, Terms, FindOutMoreText } from './SignIn.styled';
import spennyLogo from '../../../assets/images/spenny-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo source={spennyLogo} />
				<Strapline>Rewards of the future</Strapline>
			</LogoContainer>
			<SignInButtons>
				<Button
					type="outline"
					icon={<FontAwesomeIcon icon={faLinkedinIn} color="#0077B5" size={22} />}
					onPress={facebookSignIn}
					title="Sign in with LinkedIn"
					titleStyle={{ color: '#0077B5', paddingLeft: 15, fontSize: 16 }}
					buttonStyle={buttonStyles}
					containerStyle={{marginBottom: 10}}
					raised
				/>
				<Button
					type="outline"
					icon={<FontAwesomeIcon icon={faGoogle} color="#4285F4" size={22} />}
					onPress={googleSignIn}
					title="Sign in with Google"
					titleStyle={{ color: '#4285F4', paddingLeft: 15, fontSize: 16 }}
					buttonStyle={buttonStyles}
					containerStyle={{marginBottom: 10}}
					raised
				/>
				<Button
					type="outline"
					icon={<FontAwesomeIcon icon={faFacebookF} color="#3C5193" size={22} />}
					onPress={facebookSignIn}
					title="Sign in with Facebook"
					titleStyle={{ color: '#3C5193', paddingLeft: 15, fontSize: 16 }}
					buttonStyle={buttonStyles}
					raised
				/>
				<FindOutMoreText>Find out more</FindOutMoreText>
				<Terms>By signing up to Spenny you are agreeing  to our Terms and Privacy Policy</Terms>
			</SignInButtons>
		</Container>
	);
};

const buttonStyles = {
	justifyContent: 'flex-start',
	paddingTop: 11,
	paddingBottom: 11,
	paddingLeft: 25,
	borderWidth: 0
};

export default SignIn;
