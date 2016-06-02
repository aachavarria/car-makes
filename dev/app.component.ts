import {Component} from '@angular/core';
import {CarMakesListComponent} from './car-makes/car-makes-list.component';

@Component({
    selector: 'my-app',
    template: `
        <section>
            <div class="brand">Car Makes</div>
            <car-makes-list></car-makes-list>
        </section>
    `,
    directives:[CarMakesListComponent]
})
export class AppComponent {

}
