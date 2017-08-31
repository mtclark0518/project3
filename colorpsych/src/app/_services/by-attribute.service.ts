import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CreateByAttributeDismissComponent } from '../create-by-attribute-dismiss/create-by-attribute-dismiss.component';

@Injectable()
export class ByAttributeService {
	constructor() {  }

	private dismissResults = new Subject<Object[]>();
	dismissResults$ = this.dismissResults.asObservable();

	saveDismissResults(data: Object[]) {
		this.dismissResults.next(data);
		console.log(data);
	}
}