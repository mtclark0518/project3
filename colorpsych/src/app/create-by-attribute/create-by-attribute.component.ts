import { Component, OnInit } from '@angular/core';
import { Dichotomy } from '../dichotomy-model';

const dichotomies = [
	{
		descriptor1: {
			attribute: 'Freethinking',
			description: 'Attract out-of-the-box thinkers'
		},
		descriptor2: {
			attribute: 'Conventional',
			description: 'Create a responsible image'
		},
		selected: 'Freethinking',
		rank: 1
	},
	{
		descriptor1: {
			attribute: 'Spontaneous',
			description: 'Embody a go-with-the-flow attitude'
		},
		descriptor2: {
			attribute: 'Ordered',
			description: 'Create an efficient, self-disciplined image'
		},
		selected: 'Spontaneous',
		rank: 2
	},
	{
		descriptor1: {
			attribute: 'Traditional',
			description: 'Create a homelike, familiar feeling'
		},
		descriptor2: {
			attribute: 'Innovative',
			description: 'Introduce new knowledge and products'
		},
		selected: 'Traditional',
		rank: 3
	},
	{
		descriptor1: {
			attribute: 'Concrete',
			description: 'Perceive strong organizational skills'
		},
		descriptor2: {
			attribute: 'Abstract',
			description: 'Evoke insightful, abstract thinking'
		},
		selected: 'Concrete',
		rank: 4
	},
	{
		descriptor1: {
			attribute: 'Practical',
			description: 'Convey objectives and instructions'
		},
		descriptor2: {
			attribute: 'Artistic',
			description: 'Inspire imaginative experiences'
		},
		selected: 'Practical',
		rank: 5
	},
	{
		descriptor1: {
			attribute: 'Things',
			description: 'Establish a grounded, fix-anything image'
		},
		descriptor2: {
			attribute: 'Ideas',
			description: 'Convey spontaneous, original ideas'
		},
		selected: 'Things',
		rank: 6
	},
	{
		descriptor1: {
			attribute: 'Composed',
			description: 'Convey a reserved point of view'
		},
		descriptor2: {
			attribute: 'Warm',
			description: 'Encourage an uplifting, comfort-giving image'
		},
		selected: 'Composed',
		rank: 7
	},
	{
		descriptor1: {
			attribute: 'Trustful',
			description: 'Encourage unsuspecting acceptance'
		},
		descriptor2: {
			attribute: 'Skeptical',
			description: 'Encourage forward-thinking challenges to the norm'
		},
		selected: 'Trustful',
		rank: 8
	},
	{
		descriptor1: {
			attribute: 'Clear-thinking',
			description: 'Evoke self-assured thoughts'
		},
		descriptor2: {
			attribute: 'Thought-provoking',
			description: 'Promote progressive ideas'
		},
		selected: 'Clear-thinking',
		rank: 9
	},
	{
		descriptor1: {
			attribute: 'Deliberate',
			description: 'Create a threat-sensitive campaign'
		},
		descriptor2: {
			attribute: 'Bold',
			description: 'Promote expressive social involvements'
		},
		selected: 'Deliberate',
		rank: 10
	},
	{
		descriptor1: {
			attribute: 'Extroverted',
			description: 'Evoke assertive, group-oriented types'
		},
		descriptor2: {
			attribute: 'Introverted',
			description: 'Create empathetic, sensitive interactions'
		},
		selected: 'Extroverted',
		rank: 11
	},
	{
		descriptor1: {
			attribute: 'Serious',
			description: 'Portray restrained self-control'
		},
		descriptor2: {
			attribute: 'Carefree',
			description: 'Create lively, spontaneous interactions'
		},
		selected: 'Serious',
		rank: 12
	},
	{
		descriptor1: {
			attribute: 'Cooperative',
			description: 'Create a cooperative compliance'
		},
		descriptor2: {
			attribute: 'Dominant',
			description: 'Evoke dominant, forceful actions'
		},
		selected: 'Cooperative',
		rank: 13
	},
	{
		descriptor1: {
			attribute: 'Instictive',
			description: 'Encourage the gut feeling or impulse'
		},
		descriptor2: {
			attribute: 'Stable',
			description: 'Create an established, conservative image'
		},
		selected: 'Instinctive',
		rank: 14
	},
	{
		descriptor1: {
			attribute: 'Open',
			description: 'Evoke a genuine, forthright, sincere image'
		},
		descriptor2: {
			attribute: 'Mysterious',
			description: 'Create a mysterious, discreet ambience'
		},
		selected: 'Open',
		rank: 15
	},
	{
		descriptor1: {
			attribute: 'Relaxed',
			description: 'Create a calming, relaxed mood'
		},
		descriptor2: {
			attribute: 'High-energy',
			description: 'Evoke an attention-getting immediacy'
		},
		selected: 'Relaxed',
		rank: 16
	}
];

@Component({
  selector: 'app-create-by-attribute',
  templateUrl: './create-by-attribute.component.html',
  styleUrls: ['./create-by-attribute.component.scss']
})
export class CreateByAttributeComponent implements OnInit {

	pairs = dichotomies;
	public pairClass = 'dismissable_button_group';
	dismissable = true;
	dismissed = false;

	toggleDismiss(id) {
		console.log('clicked');
		console.log(id);
		for (let i = 0; i < this.pairs.length; i++) {
			if (i === id) {
				let targetedEl = document.getElementById(id);
				console.log(targetedEl);
				console.log('i: ' + i + ' id: ' + id);
				if (targetedEl.classList.contains('dismissable_button_group')) {
					targetedEl.classList.add('dismiss');
				} else {
					targetedEl.classList.remove('dismiss');
				}
			}
		}
	}

  constructor() { }

  ngOnInit() {
  	console.log(this.pairs);
  }

}
