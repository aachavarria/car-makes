import {Component} from '@angular/core';
import {CarMakesListComponent} from './car-makes/car-makes-list.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="container">
                <h1>Car Makes</h1>
            </div>
        </header>
        <section class="container">
            <car-makes-list></car-makes-list>
        </section>
    `,
    directives:[CarMakesListComponent]
})
export class AppComponent {

}
