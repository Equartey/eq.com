import { h, Component } from 'preact';
import React from 'preact-compat';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import { JobsList } from './jobs';
import style from './style';

export default class Jobs extends Component {
	state = {
		jobs: JobsList,
		mounted: true
	};

	// gets called when this route is navigated to
	componentDidMount() {}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		this.setState({
			mounted: false
		});
	}

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		const jobsCards = this.state.jobs.map((j, i) => (
			<div>
				<article class={style.article}>
					<h2>{j.name}</h2>
					<h3>{j.title}</h3>
					<p>{j.desc}</p>
				</article>
			</div>
		));
		return (
			<div className={` ${style.jobs}`}>
				<TransitionGroup>
					<Fade delay={500} right>
						<div>{jobsCards}</div>
					</Fade>
				</TransitionGroup>
			</div>
		);
	}
}
