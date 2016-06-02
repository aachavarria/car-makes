System.register(['@angular/core', './car-makes.service'], function(exports_1, context_1) {
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
    var core_1, car_makes_service_1;
    var CarMakesSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_makes_service_1_1) {
                car_makes_service_1 = car_makes_service_1_1;
            }],
        execute: function() {
            CarMakesSearchComponent = (function () {
                function CarMakesSearchComponent(_carMakesService) {
                    this._carMakesService = _carMakesService;
                    this.makes = [];
                    this.selected = new core_1.EventEmitter();
                }
                CarMakesSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carMakesService.fetchAllMakes()
                        .subscribe(function (data) {
                        _this.makes = data.makes;
                        console.log(_this.makes);
                    }, function (error) { return console.error(error); });
                };
                CarMakesSearchComponent.prototype.selectOnChange = function ($event) {
                    this.selected.emit($event.target.value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CarMakesSearchComponent.prototype, "selected", void 0);
                CarMakesSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'car-makes-search',
                        template: "\n        <select (change)=\"selectOnChange($event)\">\n            <option *ngFor=\"let make of makes\"> {{make.name}}</option>\n        <select>\n    "
                    }), 
                    __metadata('design:paramtypes', [car_makes_service_1.CarMakesService])
                ], CarMakesSearchComponent);
                return CarMakesSearchComponent;
            }());
            exports_1("CarMakesSearchComponent", CarMakesSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlJLGlDQUFxQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBSHRELFVBQUssR0FBUSxFQUFFLENBQUM7b0JBQ04sYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUl4QyxDQUFDO2dCQUVELDBDQUFRLEdBQVI7b0JBQUEsaUJBVUM7b0JBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTt5QkFDaEMsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFBO2dCQUVULENBQUM7Z0JBRUQsZ0RBQWMsR0FBZCxVQUFlLE1BQU07b0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBcEJEO29CQUFDLGFBQU0sRUFBRTs7eUVBQUE7Z0JBWGI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsa0JBQWtCO3dCQUMzQixRQUFRLEVBQUMsMEpBSVI7cUJBQ0osQ0FBQzs7MkNBQUE7Z0JBeUJGLDhCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCw2REF1QkMsQ0FBQSIsImZpbGUiOiJjYXItbWFrZXMvY2FyLW1ha2VzLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXJNYWtlc1NlcnZpY2V9IGZyb20gJy4vY2FyLW1ha2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY2FyLW1ha2VzLXNlYXJjaCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8c2VsZWN0IChjaGFuZ2UpPVwic2VsZWN0T25DaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbWFrZSBvZiBtYWtlc1wiPiB7e21ha2UubmFtZX19PC9vcHRpb24+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENhck1ha2VzU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIG1ha2VzID0gPGFueT5bXTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfY2FyTWFrZXNTZXJ2aWNlOiBDYXJNYWtlc1NlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIHRoaXMuX2Nhck1ha2VzU2VydmljZS5mZXRjaEFsbE1ha2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlcyA9IGRhdGEubWFrZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFrZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcblxuICAgIH1cblxuICAgIHNlbGVjdE9uQ2hhbmdlKCRldmVudCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCgkZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
