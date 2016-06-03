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
    var CarMakesModelYearComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_makes_service_1_1) {
                car_makes_service_1 = car_makes_service_1_1;
            }],
        execute: function() {
            CarMakesModelYearComponent = (function () {
                function CarMakesModelYearComponent(_carMakesService) {
                    this._carMakesService = _carMakesService;
                }
                CarMakesModelYearComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carMakesService.getCarModelYears(this.model.make, this.model.model)
                        .debounceTime(3000)
                        .subscribe(function (data) {
                        _this.model = data;
                        console.log('model');
                        console.log(_this.model);
                    }, function (error) { return console.error(error); });
                };
                __decorate([
                    core_1.Input('tableData'), 
                    __metadata('design:type', Object)
                ], CarMakesModelYearComponent.prototype, "model", void 0);
                CarMakesModelYearComponent = __decorate([
                    core_1.Component({
                        selector: '[tableData]',
                        template: "\n        <td>{{model.name}}</td>\n        <td>{{model.year}}</td>\n    "
                    }), 
                    __metadata('design:paramtypes', [car_makes_service_1.CarMakesService])
                ], CarMakesModelYearComponent);
                return CarMakesModelYearComponent;
            }());
            exports_1("CarMakesModelYearComponent", CarMakesModelYearComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtbW9kZWwteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSSxvQ0FBcUIsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUN0RCxDQUFDO2dCQUVELDZDQUFRLEdBQVI7b0JBQUEsaUJBV0M7b0JBVkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3lCQUNuRSxZQUFZLENBQUMsSUFBSSxDQUFDO3lCQUNsQixTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQTtnQkFDVCxDQUFDO2dCQWhCRDtvQkFBQyxZQUFLLENBQUMsV0FBVyxDQUFDOzt5RUFBQTtnQkFUdkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsYUFBYTt3QkFDdEIsUUFBUSxFQUFDLDBFQUdSO3FCQUNKLENBQUM7OzhDQUFBO2dCQW9CRixpQ0FBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsbUVBa0JDLENBQUEiLCJmaWxlIjoiY2FyLW1ha2VzL2Nhci1tYWtlcy1tb2RlbC15ZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0ICwgT3V0cHV0ICwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2FyTWFrZXNTZXJ2aWNlfSBmcm9tICcuL2Nhci1tYWtlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J1t0YWJsZURhdGFdJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDx0ZD57e21vZGVsLm5hbWV9fTwvdGQ+XG4gICAgICAgIDx0ZD57e21vZGVsLnllYXJ9fTwvdGQ+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENhck1ha2VzTW9kZWxZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIEBJbnB1dCgndGFibGVEYXRhJykgbW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfY2FyTWFrZXNTZXJ2aWNlOiBDYXJNYWtlc1NlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2Nhck1ha2VzU2VydmljZS5nZXRDYXJNb2RlbFllYXJzKHRoaXMubW9kZWwubWFrZSx0aGlzLm1vZGVsLm1vZGVsKVxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSgzMDAwKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
