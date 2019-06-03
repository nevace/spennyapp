import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';
import { setCustomText } from 'react-native-global-props';

setCustomText({style: { fontSize: 14, fontFamily: 'Ubuntu', color: '#37393A', textAlign: 'center', lineHeight: 20 }});

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'Initialising'
			}
		}
	});
});
