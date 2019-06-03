import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RNFirebase from 'react-native-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';
import { reduxFirestore } from 'redux-firestore';

const reduxFirebaseConfig = { userProfile: 'users', useFirestoreForProfile: true };
const firebase = RNFirebase.initializeApp();

export default createStore(
	rootReducer,
	composeWithDevTools(
		reactReduxFirebase(firebase, reduxFirebaseConfig),
		reduxFirestore(firebase)
	)
);
