
import { Component, OnInit, AfterContentInit } from '@angular/core';
// import { ClickOutsideDirective } from '../click-outside.directive';

// @Component({
//   selector: 'app-navigation',
//   templateUrl: './navigation.component.html',
//   styleUrls: ['./navigation.component.scss']
//  })

// export class NavigationComponent implements OnInit  {

// 	navExpanded = false;


	dismissNav(event) {
		this.navExpanded = false;
	}
	toggleNav() {
		if (!this.navExpanded) {
			this.navExpanded = true;
		} else {
			this.navExpanded = false;
		}
	}

//   constructor() { }

//   ngOnInit() {
  	
//   }

// }
