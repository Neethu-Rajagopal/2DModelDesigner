import { Component, OnInit } from '@angular/core';
import { CustomLoaderService } from "@app/Services/custom-loader.service";
import { ApiCallService  } from "@app/Services/api-call.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  view: string = 'List';
  array: any = ['FDB - 026', 'FDB - 025', 'FDB - 024'];
  selectedIndex: number = 0;

  constructor(
    private _customLoaderService:CustomLoaderService ,
    private _apiCallService:ApiCallService
  ) {

   }

  ngOnInit(): void {
    this.loadTwinTypes();
  }

  showList(index: number) {
    if (index === this.selectedIndex) { this.selectedIndex = -1; }
    else { this.selectedIndex = index; }
  }

  loadTwinTypes(){
    this._customLoaderService.showLoader();
    let apiurl = "/designer/AppSettings/";
    this._apiCallService.wsGetData(apiurl,{})
    .subscribe(
      (response) => {
        console.log(response);
        if(response['status'] === 201){

        }
        else{
          let leftmenu = [];
          console.log(response?.modules);

        }
      },
      (error) =>{
        console.log('Error while fetching data from - designer/AppSettings/',error);
      }, () => {
        this._customLoaderService.hideLoader();
      } );
  }
  ngOnDestroy() {
    this.resetAllVariables();
  }

  resetAllVariables(): void{

  }
}
