import './style';
import App from './components/app';

if (typeof window !== 'undefined') {
	const WebFont = require('webfontloader');

	WebFont.load({
		google: {
			families: ['Roboto Condensed:300,400,700', 'sans-serif']
		}
	});
}

export default App;
