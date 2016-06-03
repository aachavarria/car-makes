import {Component, EventEmitter, Input , Output , OnInit} from '@angular/core';
import {Control} from '@angular/common';
import {CarMakesService} from './car-makes.service';

@Component({
    selector:'car-makes-search',
    template:`
        <input #input class="form-control" type="text" placeholder="Starts With" [ngFormControl]="term"/>
    `
})

export class CarMakesSearchComponent implements OnInit{
    @Input() delay:number = 300;
    @Output() update = new EventEmitter();
    term = new Control();

    ngOnInit(){
        this.term.valueChanges
            .debounceTime(this.delay)
            .subscribe(term => this.update.emit(term));
    }
}
