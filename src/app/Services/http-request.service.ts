import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {

    constructor( private _http: HttpClient) { }

    getRequest(url: string, params ? : object) {
        return this._http.get(url, params);
    }

    postRequest(url: string, params?: object) {
        return this._http.post(url, params);
    }

    postRequestExcel(url: string,responseType:any, params?: object) {
        return this._http.post(url, params,{responseType: responseType});
    }

}
