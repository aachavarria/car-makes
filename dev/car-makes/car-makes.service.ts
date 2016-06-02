import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


 @Injectable()
 export class CarMakesService{
    private url = 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q';

    constructor(private _http:Http) {}

 	fetchAllMakes(): Observable<any>{
        return this._http.get(this.url)
            .map(response => response.json());
 	}

 }
