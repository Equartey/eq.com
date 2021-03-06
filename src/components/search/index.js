/* eslint-disable react/jsx-no-bind */
import React from 'preact-compat';
import Autosuggest from 'react-autosuggest';
import Autowhatever from 'react-autowhatever';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import Typing, { Delay, Reset, Speed } from 'react-typing-animation';

// Imagine you have a list of pages that you'd like to autosuggest.
const pages = [
	{
		name: 'about'
	},
	{
		name: 'home'
	},
	{
		name: 'skills'
	},
	{
		name: 'social'
	},
	{
		name: 'jobs'
	},
	{
		name: ''
	}
];
const placeholder = () => {
	let i = 0;

	clearTimeout(timedLoop);
	const timedLoop = () => {
		setTimeout(() => {
			// handle pre-render of DOM varibles
			if (typeof document !== 'undefined') {
				document.getElementsByClassName(
					'react-autosuggest__input'
				)[0].placeholder = pages[i].name;
				i++;
				if (i < pages.length - 1) {
					timedLoop();
				}
				else {
					i = 0;
					timedLoop();
				}
			}
		}, 1500);
	};
	timedLoop();
};

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: pages.filter(
			lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
		  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
// const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
const renderSuggestion = (suggestion, { query, isHighlighted }) => {
	let t = '';
	let q = query.toLowerCase();
	let text = suggestion.name,
		pos = text.indexOf(q);

	if (pos > -1) {
		t = text.split(q)[1];

		return (
			<div>
				{`${text.substring(0, q.length)}`}
				<span class="search__highlight">{`${t}`}</span>
			</div>
		);
	}
};

export default class Search extends React.Component {
	constructor() {
		super();
		let windowExists = typeof window !== 'undefined';
		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			value: '',
			suggestions: [],
			tucked: windowExists ? window.location.pathname !== '/' : '/',
			placeholder: false
		};
	}
	componentDidMount() {
		placeholder();
	}
	/*eslint-disable */
	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};
	/*eslint-enable */

	goHome = () => {
		this.setState({
			value: '',
			tucked: false
		});
	};

	goToPage = page => {
		this.setState({
			value: page,
			tucked: true
		});
		route(`/${page}`);
	};

	togglePlaceHolder = () => {
		this.setState({
			placeholder: !placeholder
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
		const newUrl = suggestionValue === 'home' ? '' : suggestionValue;
		this.setState({
			tucked: newUrl !== ''
		});
		route(`/${newUrl}`);
	};

	renderInputComponent = inputProps => (
		<div>
			<Autowhatever inputProps={inputProps} items={[]} />
		</div>
	);

	render() {
		const { value, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Home',
			value,
			onChange: this.onChange
		};

		const AnimatedTypingComponent = () => (
			<Typing speed={200} onFinishedTyping={this.togglePlaceHolder}>
				<span>Home</span>
				<Delay ms={1000} />
				<Typing.Backspace count={4} speed={100} />
				<Speed ms={200} />
				<span>About</span>
				<Delay ms={1000} />
				<Typing.Backspace count={5} speed={100} />
				<Speed ms={200} />
				<span>Jobs</span>
				<Delay ms={1000} />
				<Typing.Backspace count={4} speed={100} />
				<Speed ms={200} />
				<span>Me</span>
				<Delay ms={1000} />
				<Reset delay={2000} />
			</Typing>
		);

		// Finally, render it!
		return (
			<div
				className={`search__wrap ${
					this.state.tucked ? 'search__wrap--tucked' : ''
				}`}
			>
				<Link onClick={this.goHome} href="/">
					<img className="search__thumb" src="../../assets/logo-black.png" />
				</Link>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					onSuggestionSelected={this.onSuggestionSelected}
					highlightFirstSuggestion
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					renderInputComponent={this.renderInputComponent}
				/>
				<div
					className={`search__placeholder ${
						this.state.placeholder ? 'search__placeholder--hide' : ''
					}`}
				>
					{AnimatedTypingComponent}
				</div>
				{true && (
					<div class="navWrap">
						<div class="navButton" onClick={() => this.goToPage('jobs')}>
							<h2 class="navTitle">Jobs</h2>
						</div>
						<div class="navButton" onClick={() => this.goToPage('skills')}>
							<h2 class="navTitle">Skills</h2>
						</div>
						<div class="navButton" onClick={() => this.goToPage('about')}>
							<h2 class="navTitle">About</h2>
						</div>
						<div class="navButton" onClick={() => this.goToPage('social')}>
							<h2 class="navTitle">Social</h2>
						</div>
					</div>
				)}
			</div>
		);
	}
}
