import { h, Component } from 'preact';
import React from 'preact-compat';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Slide from 'react-reveal/Slide';
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
			<Slide left cascade delay={150 * i}>
				<div>
					<article class={style.article}>
						<h2>{j.name}</h2>
						<h3>{j.title}</h3>
						<p>{j.desc}</p>
					</article>
				</div>
			</Slide>
		));
		return (
			<TransitionGroup>
				<div className={` ${style.jobs}`}>{jobsCards}</div>
			</TransitionGroup>
		);
	}
}
