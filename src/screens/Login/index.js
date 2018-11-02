import React, { Component } from 'react';
// import { Image } from 'react-native';
import { Container, Content, Text, View, Button, Icon, Grid, Col } from 'native-base';
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import styles from './styles';

const map = require('../../../assets/map.png');

class Login extends Component {

	async facebookLogin(){
		try {
			const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

			if (result.isCancelled) {
				throw new Error('User cancelled request');
			}

			console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

			// get the access token
			const data = await AccessToken.getCurrentAccessToken();

			if (!data) {
				throw new Error('Something went wrong obtaining the users access token');
			}

			// create a new firebase credential with the token
			const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

			// login with credential
			const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

			console.info(JSON.stringify(currentUser.user.toJSON()))
		} catch (e) {
			console.error(e);
		}
	}

  render() {
    const navigation = this.props.navigation;

    return <Container style={styles.container}>
				<Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
					<Button
						iconLeft
						large
						style={{ backgroundColor: '#0077b5', alignSelf: 'center', width: 280, justifyContent: 'flex-start', marginBottom: 20 }}
					>
						<Icon type="MaterialCommunityIcons" name="linkedin" style={{ fontSize: 30 }} />
						<Text>Login with LinkedIn</Text>
					</Button>
					<Button
						iconLeft
						large
						style={{ backgroundColor: '#3B5998', alignSelf: 'center', width: 280, justifyContent: 'flex-start' }}
						onPress={this.facebookLogin}
					>
						<Icon type="MaterialCommunityIcons" name="facebook-box" style={{ fontSize: 30 }} />
						<Text>Login with Facebook</Text>
					</Button>
					{/*<View style={{flex: 1, justifyContent: "flex-end", backgroundColor: "red"}}>*/}
					{/*<Text style={styles.topText}>Choose your location</Text>*/}
					{/*</View>*/}
					{/*<Image source={map} style={styles.mapImage} />*/}
					{/*<View style={styles.infoTextView}>*/}
					{/*<Text style={styles.infoText}>*/}
					{/*Looks like we cant locate you right now.*/}
					{/*</Text>*/}
					{/*<Text style={styles.infoText}>*/}
					{/*Please turn on your location services to know your delivery area.*/}
					{/*</Text>*/}
					{/*</View>*/}

					{/*<Button*/}
					{/*block*/}
					{/*style={styles.gpsAutoBtn}*/}
					{/*onPress={() => navigation.navigate("Location")}*/}
					{/*>*/}
					{/*<Text>Use my GPS location</Text>*/}
					{/*</Button>*/}

					{/*<Text style={styles.otherText}>*/}
					{/*Or manually enter your address below*/}
					{/*</Text>*/}

					{/*<Button*/}
					{/*block*/}
					{/*style={styles.gpsManualBtn}*/}
					{/*onPress={() => navigation.navigate("Location")}*/}
					{/*>*/}
					{/*<Text>Enter the location manually</Text>*/}
					{/*</Button>*/}

					{/*<View style={{alignSelf: "center"}}>*/}

					{/*</View>*/}
				</Content>
			</Container>;
  }
}

export default Login;
