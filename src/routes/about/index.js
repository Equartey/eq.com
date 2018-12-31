import { h, Component } from 'preact';
import React from 'preact-compat';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import style from './style.css';

/*eslint-disable */

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			activeImage: 'elijah',
			images: {
				// Desktop: 530x680 | Mobile 690x450
				blenderbottle: {
					mobile: 'bb.png',
					desktop: 'bb.png',
					size: 'contain'
				},
				elijah: {
					mobile: 'elijah.jpeg',
					desktop: 'elijah.jpeg',
					size: 'cover'
				},
				outdoors: {
					mobile: 'desert_sun_tall.jpg',
					desktop: 'desert_sun_tall.jpg',
					size: 'cover'
				},
				rocks: {
					mobile: 'elijah_climb_big.jpg',
					desktop: 'elijah_climb_big.jpg',
					size: 'cover'
				},
				student: {
					mobile: 'byu_logo_tall.png',
					desktop: 'byu_logo_tall.png',
					size: 'contain'
				},
				thrills: {
					mobile: 'jeep_moab_big.jpg',
					desktop: 'jeep_moab_big.jpg',
					size: 'cover'
				}
			}
		};
	}
	SwitchImage = ev => {
		let value = ev.currentTarget.innerText.toLowerCase();
		this.setState(prevState => ({
			activeImage: prevState.activeImage === value ? 'elijah' : value
		}));
	};
	render() {
		let windowExists = typeof window !== 'undefined';
		let isMobile = windowExists ? window.innerWidth < 768 : null;
		return (
			<div class={style.about}>
				<TransitionGroup>
					<Fade delay={500} right>
						<div>
							<div class={style.inner}>
								<div class={style.img}>
									<div
										class={style.img__full}
										style={{
											backgroundImage: `url(../../assets/${
												this.state.images[this.state.activeImage][
													isMobile ? 'mobile' : 'desktop'
												]
											})`,
											backgroundSize: this.state.images[this.state.activeImage]
												.size
										}}
									>
										{/* <img
									class={style.img__img}
									src={}
									alt="My Ugly Mug"
								/> */}
									</div>
								</div>
								<div class={style.info}>
									<h3 class={style.info__title}>Elijah Quartey</h3>
									<h4 class={style.info__pronounce}>
										/ee/lie/jah/ /kwôrt/tay/
									</h4>
									<p class={style.info__defintion}>noun</p>
									<ol class={style.info__defintion_sub}>
										<li>
											Web Developer at
											<span
												class={style.info__switch}
												onClick={this.SwitchImage}
											>
												BlenderBottle
											</span>
										</li>
										<li>
											Full time
											<span
												class={style.info__switch}
												onClick={this.SwitchImage}
											>
												student
											</span>
										</li>
									</ol>
									<p class={style.info__defintion}>adjective</p>
									<ol class={style.info__defintion_sub}>
										<li>
											Someone who experiences excitement climbing
											<span
												class={style.info__switch}
												onClick={this.SwitchImage}
											>
												rocks
											</span>
										</li>
										<li>
											Replenishes energy by existing
											<span
												class={style.info__switch}
												onClick={this.SwitchImage}
											>
												outdoors
											</span>
										</li>
										<li>
											Enthusiastic seeker of
											<span
												class={style.info__switch}
												onClick={this.SwitchImage}
											>
												thrills
											</span>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</Fade>
				</TransitionGroup>
			</div>
		);
	}
}
