import brands from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import desktop from '@fortawesome/fontawesome-pro-light/faDesktop';
import sync from '@fortawesome/fontawesome-pro-light/faSync';
import database from '@fortawesome/fontawesome-pro-light/faDatabase';
import tint from '@fortawesome/fontawesome-pro-light/faTint';
import cube from '@fortawesome/fontawesome-pro-light/faCube';
import server from '@fortawesome/fontawesome-pro-light/faServer';
import calendar from '@fortawesome/fontawesome-pro-light/faCalendarAlt';
import branch from '@fortawesome/fontawesome-pro-light/faCodeBranch';
import vials from '@fortawesome/fontawesome-pro-light/faVials';

fontawesome.library.add(brands, desktop);

export const SkillList = [
	{
		title: 'Web Technologies'
	},
	{
		skill: 'Javascript',
		icon: ['fab', 'js']
	},
	{
		skill: 'React',
		icon: ['fab', 'react']
	},
	{
		skill: 'Nodejs',
		icon: ['fab', 'node-js']
	},
	{
		skill: 'AJAX & Promises',
		icon: sync
	},
	{
		skill: 'Gulp',
		icon: ['fab', 'gulp']
	},
	{
		skill: 'End to End Testing',
		icon: vials
	},
	{
		skill: 'Webpack',
		icon: cube
	},
	{
		skill: 'SASS',
		icon: ['fab', 'sass']
	},
	{
		skill: 'CSS3 Animations',
		icon: ['fab', 'css3-alt']
	},
	{
		skill: 'HTML 5',
		icon: ['fab', 'html5']
	},
	{
		skill: 'MySQL',
		icon: database
	},
	{
		skill: 'php',
		icon: ['fab', 'php']
	},
	{
		title: 'Programming Languages'
	},
	{
		skill: 'C#',
		icon: ['fab', 'windows']
	},
	{
		skill: 'Java',
		icon: ['fab', 'java']
	},
	{
		title: 'Content Management Systems'
	},
	{
		skill: 'Shopify Liduid Templating',
		icon: tint
	},
	{
		skill: 'Word Press',
		icon: ['fab', 'wordpress-simple']
	},
	{
		skill: 'Drupal',
		icon: ['fab', 'drupal']
	},
	{
		skill: 'Drupal',
		icon: ['fab', 'joomla']
	},
	{
		title: 'Web Skills'
	},
	{
		skill: 'Hosting & DNS',
		icon: server
	},
	{
		skill: 'Agile & Scrum',
		icon: calendar
	},
	{
		skill: 'Git',
		icon: branch
	},
	{
		skill: 'UI/UX Design',
		icon: desktop
	}
];
