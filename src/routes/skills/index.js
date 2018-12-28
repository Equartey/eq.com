import { h, Component } from 'preact';
import { SkillList } from './skills';
import React from 'preact-compat';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import style from './style.css';

export default class Skills extends Component {
	state = {
		skills: SkillList
	};
	render() {
		const SkillCards = this.state.skills.map((s, i) => {
			if (s.title) {
				return (
					<div class={style.card__title}>
						<h3>{s.title}</h3>
					</div>
				);
			}
			return (
				<div key={i} className={style.card}>
					<FontAwesomeIcon class={style.card__svg} icon={s.icon} />
					<p>{s.skill}</p>
				</div>
			);
		});
		return (
			<div class={style.container}>
				<TransitionGroup>
					<Fade delay={50} left>
						<div>
							<div class={style.skills}>{SkillCards}</div>
						</div>
					</Fade>
				</TransitionGroup>
			</div>
		);
	}
}
