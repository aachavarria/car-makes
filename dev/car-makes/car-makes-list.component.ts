import {Component, EventEmitter, Output , OnInit} from '@angular/core';
import {CarMakesService} from './car-makes.service';
import {CarMakesSearchComponent} from './car-makes-search.component';
import {CarMakesModelYearComponent} from './car-makes-model-year.component';
import {SearchPipe} from './car-makes-filter.pipe';

@Component({
    selector:'car-makes-list',
    template:`
        <section class="box">
            <div class="filter-container">
                <car-makes-search [delay]="500" (update)="term = $event"></car-makes-search>
            </div>
            <div class="table-container">
                <table class="table table-hover table-bordered">
                    <tr *ngFor="let make of makes | search:term" >
                        <td (click)="onSelected(make)">{{make.name}}</td>
                    <tr>
                </table>
            </div>
        </section>
        <section *ngIf="selected != '' " class="box second">
            <div class="table-container">
                <table class="table table-hover table-bordered">
                    <tr><th>Model</th><th>First year</th></tr>
                    <tr *ngFor="let model of selected.models; let i = index" [table-data]="{make:selected.niceName,model:model.niceName, i:i}">
                    </tr>
                </table>
            </div>
        </section >
    `,
    directives: [CarMakesSearchComponent,CarMakesModelYearComponent],
    providers: [CarMakesService],
    pipes:[SearchPipe]
})

//[ngIf]="i<10" [selected]="{make:selected.niceName,model:model.niceName}"

export class CarMakesListComponent implements OnInit{
    makes = <any>[];
    term = '';
    selected = <any>[];

    constructor( private _carMakesService: CarMakesService){
    }

    onSelected(item){
        this.selected = item;
    }

    ngOnInit():any{
        this._carMakesService.fetchAllMakes()
            .subscribe(
                data =>{
                    this.makes = data.makes;
                },
                error => console.error(error)
            )

    }
}
