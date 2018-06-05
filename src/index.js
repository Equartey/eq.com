import './style';
import WebFont from 'webfontloader';
import App from './components/app';

WebFont.load({
	google: {
		families: ['Roboto Condensed:300,400,700', 'sans-serif']
	}
});

export default App;
