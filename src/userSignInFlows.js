import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { goHome, goToAuth } from './navigation';
import { GoogleSignin } from 'react-native-google-signin';
import moment from 'moment';

export async function googleSignIn() {
	try {
		await GoogleSignin.configure();

		const data = await GoogleSignin.signIn();
		const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
		const { user, additionalUserInfo } = await firebase.auth().signInWithCredential(credential);
		const userData = {
			firstName: additionalUserInfo.profile.given_name,
			lastName: additionalUserInfo.profile.family_name,
			locale: additionalUserInfo.profile.locale,
			displayName: user.displayName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			provider: 'google'
		};

		firebase
			.firestore()
			.collection('users')
			.doc(user.uid)
			.set(userData, {merge: true});

		goHome();
	} catch (e) {
		console.error(e);
	}
}

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
		const { user, additionalUserInfo } = await firebase.auth().signInWithCredential(credential);
		const userData = {
			firstName: additionalUserInfo.profile.first_name,
			lastName: additionalUserInfo.profile.last_name,
			birthday: additionalUserInfo.profile.birthday,
			dob: firebase.firestore.Timestamp.fromDate(moment(additionalUserInfo.profile.birthday, 'MM/DD/YYYY').toDate()),
			gender: additionalUserInfo.profile.gender,
			displayName: user.displayName,
			email: user.email,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			provider: 'facebook'
		};

		firebase
			.firestore()
			.collection('users')
			.doc(user.uid)
			.set(userData, {merge: true});

		goHome();
	} catch (e) {
		console.error(e);
	}
}
