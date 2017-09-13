
  	// tslint:disable:no-trailing-whitespace

import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
 })

export class NavigationComponent implements OnInit  {

	navExpanded = false;


	dismissNav() {
		this.navExpanded = false;
	}

	toggleNav() {
		if (!this.navExpanded) {
			this.navExpanded = true;
		} else {
			this.navExpanded = false;
		}
	}

  constructor() { }

  ngOnInit() {

  }	

}
