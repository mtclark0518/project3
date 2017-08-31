import { Component, OnInit } from '@angular/core';
import { ByAttributeService } from '../_services/by-attribute.service';

@Component({
  selector: 'app-create-by-attribute-choose',
  templateUrl: './create-by-attribute-choose.component.html',
  styleUrls: ['./create-by-attribute-choose.component.scss']
})
export class CreateByAttributeChooseComponent implements OnInit {
	dismissResults: Object[] = [];
  constructor(private byAttribute: ByAttributeService) {
	}

	displayDismissResults() {
		console.log(this.dismissResults);
	}
  	
  ngOnInit() {
    this.byAttribute.dismissResults$.subscribe( data => {
  	console.log('Received data from dismiss component' + data);
  	this.dismissResults = data;
  	});
  }

}
