import {Component, EventEmitter, Output , OnInit} from '@angular/core';
import {CarMakesService} from './car-makes.service';

@Component({
    selector:'car-makes-search',
    template:`
        <select (change)="selectOnChange($event)">
            <option *ngFor="let make of makes"> {{make.name}}</option>
        <select>
    `
})

export class CarMakesSearchComponent implements OnInit{
    makes = <any>[];
    @Output() selected = new EventEmitter();

    constructor( private _carMakesService: CarMakesService){

    }

    ngOnInit():any{
        this._carMakesService.fetchAllMakes()
            .subscribe(
                data =>{
                    this.makes = data.makes;
                    console.log(this.makes);
                },
                error => console.error(error)
            )

    }

    selectOnChange($event){
        this.selected.emit($event.target.value);
    }
}
