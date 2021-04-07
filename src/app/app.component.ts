import { Component, OnInit } from '@angular/core';
import { CustomLoaderService } from "@app/Services/custom-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'designer';

  constructor(private _customLoaderService:CustomLoaderService){

  }
 ngOnInit():void{
  this._customLoaderService.toggleLoader.subscribe((showLoader:boolean)=>{
    if(showLoader){
        //this._spinnerService.show();
    }else{
        //this._spinnerService.hide();
    }
  });
 }
}
