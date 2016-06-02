import {Component} from '@angular/core';
import {CarMakesService} from './car-makes.service';
import {CarMakesSearchComponent} from './car-makes-search.component';

@Component({
    selector:'car-makes-list',
    template:`
        <section>
            <car-makes-search (selected)="onSelected($event)"></car-makes-search>
        </section>
        <section>
            <h3>My list</h3>
            <div class="list">
                <ul>
                    <li>item 1</li>
                </ul>
            </div>
        </section>

    `,
    directives: [CarMakesSearchComponent],
    providers: [CarMakesService]
})

export class CarMakesListComponent{
    onSelected(selected){
        console.log(selected);
    }
}
