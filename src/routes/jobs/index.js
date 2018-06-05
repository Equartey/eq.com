import { h, Component } from 'preact';
import { CSSTransitionGroup } from 'react-transition-group';
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
		console.log(this.state.jobs);
		const jobsCards = this.state.jobs.map((j, i) => (
			<article class={style.article}>
				<h2>{j.name}</h2>
				<h3>{j.title}</h3>
				<p>{j.desc}</p>
			</article>
		));
		return (
			<div className={` ${style.jobs}`} key={1}>
				{/* <CSSTransitionGroup
					transitionName="randomTransition"
					transitionAppear
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<h1 class={style.header} key={1}>
						Jobs
					</h1>
				</CSSTransitionGroup> */}
				{jobsCards}
			</div>
		);
	}
}
