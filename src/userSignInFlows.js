import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { goHome } from './navigation';

export async function facebookSignIn() {
	try {
		const result = await LoginManager.logInWithReadPermissions([
			'public_profile',
			'email',
			'user_location',
			'user_gender',
			'user_birthday'
		]);

		if (result.isCancelled) {
			console.log('User cancelled');
			return;
		}

		const data = await AccessToken.getCurrentAccessToken();

		if (!data) {
			console.log(`Can't get access token`);
			return;
		}

		const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

		await firebase.auth().signInWithCredential(credential);

		goHome();
	} catch (e) {
		console.error(e);
	}
}
