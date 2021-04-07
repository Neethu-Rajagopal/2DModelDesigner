import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiCallService {
    private readonly getDataUrl = `/webServices/getData`;
    private readonly postDataUrl = `/webServices/postData`;
    private readonly appChangeUrl = `/webServices/switchApp`;
    private readonly logoutUrl = `/login/logout`;
    private readonly excelExportUrl = `/webServices/pythonExcelGenerator`;

    constructor(private _requestService: HttpRequestService) { }
    /**
     * @param url  -> Target API URL
     * @param inputParameter  -> Parameters to pass
     */
    wsGetData(url:string,inputParameter:object): Observable < any > {
        let tempParam = { url:url, inputParameter:JSON.stringify(inputParameter) };
        return this._requestService.getRequest(this.getDataUrl,{params:tempParam});
    }
    /**
     * @param params - Object needs to be of type
     *
     * {
     *
     *      `url`  - Target `API URL`
     *
     *      `data` - `Parameters to pass`
     *
     * }
     */
    wsPostData(params: object): Observable < any > {
        return this._requestService.postRequest(this.postDataUrl, params);
    }

    wsAppChange(params: object): Observable < any > {
        return this._requestService.getRequest(this.appChangeUrl, {params:params});
    }

    logout(): Observable < any >{
      return this._requestService.getRequest(this.logoutUrl);
    }
    /**
     * @param url  -> Target API URL
     * @param responseType  -> The type of response required
     * @param inputParameter -> Parameters to pass
     */
    excelExportData(url:string,responseType:any,inputParameter:object): Observable < any > {
        let tempParam = { url:url, inputParameter:JSON.stringify(inputParameter) };
        return this._requestService.postRequestExcel(this.excelExportUrl,responseType,tempParam);
    }
}
