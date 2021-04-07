import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CustomLoaderService {
	private invokeCounter : number = 0;

	@Output() toggleLoader : EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() {}

	showLoader(calledFrom?: string):void{
		this.invokeCounter++;
		if(this.invokeCounter == 1){
			this.toggleLoader.emit(true);
        }
	}

	hideLoader(calledFrom? : string):void{
		this.invokeCounter--;
		if(this.invokeCounter < 0){
			this.invokeCounter = 0;
			return;
		}
		if(this.invokeCounter == 0){
			this.toggleLoader.emit(false);
		}
	}

	forceRemoveLoader(calledFrom?: string):void{
		this.invokeCounter = 0;
		this.toggleLoader.emit(false);
	}
}
