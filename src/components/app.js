import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Search from './search';
import Home from '../routes/home';
import Skills from '../routes/skills';
import Jobs from '../routes/jobs';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({
			bgAinmation: this.currentUrl === '/'
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			bgAinmation: this.currentUrl
		};
	}

	render() {
		return (
			<div id="app">
				{/* <Header /> */}
				<Search />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Jobs path="/jobs/" />
					<Skills path="/skills" />
				</Router>
			</div>
		);
	}
}
