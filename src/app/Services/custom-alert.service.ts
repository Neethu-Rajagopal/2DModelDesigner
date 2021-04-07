import { Injectable, Output, EventEmitter } from '@angular/core';
import { AlertType } from 'ng2-alert-center';

@Injectable({
	providedIn: 'root'
})
export class CustomAlertService {
	@Output() customAlertEmitter : EventEmitter<object>;

	constructor() {
		this.customAlertEmitter  = new EventEmitter<object>()
	}
    /**
     * @param alertType `'warning'|'danger'|'info'|'success'` Type of alert.
     * @param message `string` The message to be displayed
     * @param duration `number` How long before the message disappears. Default -> 3000ms
     */
	createAlert(alertType : 'warning'|'danger'|'info'|'success' , message : string, duration : number = 3000){
		let type = 0;
		if(alertType == "warning"){
			type = AlertType.WARNING;
		} else if(alertType == "danger"){
			type = AlertType.DANGER;
		} else if(alertType == "info"){
			type = AlertType.INFO;
		} else if(alertType == "success"){
			type = AlertType.SUCCESS;
		} else {
			type = AlertType.INFO;
		}

		this.customAlertEmitter.emit({
			'alertType' : type,
			'message'   : message,
			'duration'  : duration
		});

	}
}
