import React from 'react';
import { Button } from 'react-native-elements';
import { facebookSignIn } from '../../userSignInFlows';
import { Container, LogoContainer, Logo, Strapline } from './SignIn.styled';
import spennyLogo from '../../../assets/images/spenny-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const SignIn = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo source={spennyLogo} />
				<Strapline>Rewards of the future</Strapline>
			</LogoContainer>
			<Button
				type="outline"
				icon={<FontAwesomeIcon icon={faFacebookF} color="black"/>}
				onPress={facebookSignIn}
				title="Login with Facebook"
				raised
			/>
		</Container>
	);
};

export default SignIn;
