import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ByAttributeService {
	constructor() {  }

	// private dismissResults = new Subject<Object[]>();
	// dismissResults$ = this.dismissResults.asObservable();
	public resultsFromDismiss: object[] = [];
	saveDismissResults(data: object[]) {
		// this.resultsFromDismiss = this.fromDismiss.getUserArray();
		console.log(this.resultsFromDismiss);
		return(this.resultsFromDismiss);
	}
	// saveDismissResults(data: object[]) {
		// this.dismissResults.next(data);
		// console.log(data);
	// }
}

