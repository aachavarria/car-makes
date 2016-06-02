System.register(['@angular/core', './car-makes.service', './car-makes-search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, car_makes_service_1, car_makes_search_component_1;
    var CarMakesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_makes_service_1_1) {
                car_makes_service_1 = car_makes_service_1_1;
            },
            function (car_makes_search_component_1_1) {
                car_makes_search_component_1 = car_makes_search_component_1_1;
            }],
        execute: function() {
            CarMakesListComponent = (function () {
                function CarMakesListComponent() {
                }
                CarMakesListComponent.prototype.onSelected = function (selected) {
                    console.log(selected);
                };
                CarMakesListComponent = __decorate([
                    core_1.Component({
                        selector: 'car-makes-list',
                        template: "\n        <section>\n            <car-makes-search (selected)=\"onSelected($event)\"></car-makes-search>\n        </section>\n        <section>\n            <h3>My list</h3>\n            <div class=\"list\">\n                <ul>\n                    <li>item 1</li>\n                </ul>\n            </div>\n        </section>\n\n    ",
                        directives: [car_makes_search_component_1.CarMakesSearchComponent],
                        providers: [car_makes_service_1.CarMakesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarMakesListComponent);
                return CarMakesListComponent;
            }());
            exports_1("CarMakesListComponent", CarMakesListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIRywwQ0FBVSxHQUFWLFVBQVcsUUFBUTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQ3pCLFFBQVEsRUFBQyxtVkFhUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvREFBdUIsQ0FBQzt3QkFDckMsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7eUNBQUE7Z0JBTUYsNEJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHlEQUlDLENBQUEiLCJmaWxlIjoiY2FyLW1ha2VzL2Nhci1tYWtlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FyTWFrZXNTZXJ2aWNlfSBmcm9tICcuL2Nhci1tYWtlcy5zZXJ2aWNlJztcbmltcG9ydCB7Q2FyTWFrZXNTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vY2FyLW1ha2VzLXNlYXJjaC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY2FyLW1ha2VzLWxpc3QnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8Y2FyLW1ha2VzLXNlYXJjaCAoc2VsZWN0ZWQpPVwib25TZWxlY3RlZCgkZXZlbnQpXCI+PC9jYXItbWFrZXMtc2VhcmNoPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPk15IGxpc3Q8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5pdGVtIDE8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ2FyTWFrZXNTZWFyY2hDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0Nhck1ha2VzU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJNYWtlc0xpc3RDb21wb25lbnR7XG4gICAgb25TZWxlY3RlZChzZWxlY3RlZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
