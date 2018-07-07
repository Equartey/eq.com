import { h, Component } from 'preact';
import { SocialList } from './social';
import React from 'preact-compat';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import style from './style.css';

export default class Social extends Component {
	state = {
		social: SocialList,
		mounted: true
	};
	render() {
		console.log(style);
		const SocialCards = this.state.social.map((s, i) => {
			if (s.title) {
				return (
					<div class={style.card__title}>
						<h3>{s.title}</h3>
					</div>
				);
			}
			return (
				<Fade cascade delay={50 * i}>
					<a className={style.card__link} href={s.href} target="_blank">
						<div key={i} className={style.card}>
							<FontAwesomeIcon class={style.card__svg} icon={s.icon} />
							<p>{s.skill}</p>
						</div>
					</a>
				</Fade>
			);
		});
		return (
			<TransitionGroup>
				<div class={style.social}>{SocialCards}</div>
			</TransitionGroup>
		);
	}
}
