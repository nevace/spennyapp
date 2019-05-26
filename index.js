import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';
import { setCustomText } from 'react-native-global-props';

setCustomText({style: { fontSize: 16, fontFamily: 'Ubuntu', color: '#37393A' }});

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
