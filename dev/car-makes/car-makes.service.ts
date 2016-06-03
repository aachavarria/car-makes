import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';


 @Injectable()
 export class CarMakesService{

    constructor(private _http:Http) {}

 	fetchAllMakes(): Observable<any>{
        return this._http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q')
            .map(response => response.json())
 	}

    getCarModelYears(make,model) : Observable<any>{
        return this._http.get(`http://api.edmunds.com/api/vehicle/v2/${make}/${model}/?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q`)
            .map(response => response.json());
    }

 }


//https://api.edmunds.com/api/vehicle/v2/acura/cl?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q
