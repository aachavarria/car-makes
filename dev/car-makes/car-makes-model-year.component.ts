import {Component, EventEmitter, Input  , OnInit} from '@angular/core';
import {CarMakesService} from './car-makes.service';

@Component({
    selector:'[table-data]',
    template:`
            <th *ngIf="model.name!= ''">{{model.name}}</th><th *ngIf="model.year!= ''">{{model.year}}</th>
    `
})

export class CarMakesModelYearComponent implements OnInit{
    @Input('table-data') selected;
    model = {name:'',year:''};

    constructor( private _carMakesService: CarMakesService){
    }

    ngOnInit(){
        if(this.selected.i < 10){
            this._carMakesService.getCarModelYears(this.selected.make,this.selected.model)
                .subscribe(
                    data =>{
                        this.model.year = data.years[0].year;
                        this.model.name = data.name;
                    },
                    error => console.error(error)
                )
        }

    }
}
