import {Component, EventEmitter, Input , Output , OnInit} from '@angular/core';
import {Control} from '@angular/common';
import {CarMakesService} from './car-makes.service';

@Component({
    selector:'[tableData]',
    template:`
        <td>{{model.name}}</td>
        <td>{{model.year}}</td>
    `
})

export class CarMakesModelYearComponent implements OnInit{
    @Input('tableData') model;

    constructor( private _carMakesService: CarMakesService){
    }

    ngOnInit(){
        this._carMakesService.getCarModelYears(this.model.make,this.model.model)
            .debounceTime(3000)
            .subscribe(
                data =>{
                    this.model = data;
                    console.log('model');
                    console.log(this.model);
                },
                error => console.error(error)
            )
    }
}
