import { h, render, Component } from 'preact';
import { SkillList } from './skills';
import React from 'preact-compat';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import style from './style';

export default class Skills extends Component {
	state = {
		skills: SkillList,
		mounted: true
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
				<div class={style.card}>
					<FontAwesomeIcon class={style.card__svg} icon={s.icon} />
					<p>{s.skill}</p>
				</div>
			);
		});
		return <div class={style.skills}>{SkillCards}</div>;
	}
}
