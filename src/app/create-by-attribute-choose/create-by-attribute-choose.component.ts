import { Component, OnInit } from '@angular/core';
import { ByAttributeService } from '../_services/by-attribute.service';

@Component({
  selector: 'app-create-by-attribute-choose',
  templateUrl: './create-by-attribute-choose.component.html',
  styleUrls: ['./create-by-attribute-choose.component.scss']
})
export class CreateByAttributeChooseComponent implements OnInit {
  constructor(private byAttribute: ByAttributeService) {
    console.log(this.byAttribute.resultsFromDismiss);
	}

  dismissResults: Object[] = this.byAttribute.resultsFromDismiss.slice(0);



  	
  ngOnInit() {
   //  this.byAttribute.dismissResults$.subscribe( data => {
  	// console.log('Received data from dismiss component' + data);
  	// this.dismissResults = data;
   //  console.log(this.dismissResults);
  	// });
  }

}
