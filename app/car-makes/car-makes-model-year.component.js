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
                    this.model = { name: '', year: '' };
                }
                CarMakesModelYearComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.selected.i < 10) {
                        this._carMakesService.getCarModelYears(this.selected.make, this.selected.model)
                            .subscribe(function (data) {
                            _this.model.year = data.years[0].year;
                            _this.model.name = data.name;
                        }, function (error) { return console.error(error); });
                    }
                };
                __decorate([
                    core_1.Input('table-data'), 
                    __metadata('design:type', Object)
                ], CarMakesModelYearComponent.prototype, "selected", void 0);
                CarMakesModelYearComponent = __decorate([
                    core_1.Component({
                        selector: '[table-data]',
                        template: "\n            <th *ngIf=\"model.name!= ''\">{{model.name}}</th><th *ngIf=\"model.year!= ''\">{{model.year}}</th>\n    "
                    }), 
                    __metadata('design:paramtypes', [car_makes_service_1.CarMakesService])
                ], CarMakesModelYearComponent);
                return CarMakesModelYearComponent;
            }());
            exports_1("CarMakesModelYearComponent", CarMakesModelYearComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtbW9kZWwteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSxvQ0FBcUIsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUZ0RCxVQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztnQkFHMUIsQ0FBQztnQkFFRCw2Q0FBUSxHQUFSO29CQUFBLGlCQVlDO29CQVhHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs2QkFDekUsU0FBUyxDQUNOLFVBQUEsSUFBSTs0QkFDQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDckMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQTtvQkFDVCxDQUFDO2dCQUVMLENBQUM7Z0JBbEJEO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OzRFQUFBO2dCQVJ4QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUMsd0hBRVI7cUJBQ0osQ0FBQzs7OENBQUE7Z0JBc0JGLGlDQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCxtRUFvQkMsQ0FBQSIsImZpbGUiOiJjYXItbWFrZXMvY2FyLW1ha2VzLW1vZGVsLXllYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQgICwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FyTWFrZXNTZXJ2aWNlfSBmcm9tICcuL2Nhci1tYWtlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J1t0YWJsZS1kYXRhXScsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICAgICAgPHRoICpuZ0lmPVwibW9kZWwubmFtZSE9ICcnXCI+e3ttb2RlbC5uYW1lfX08L3RoPjx0aCAqbmdJZj1cIm1vZGVsLnllYXIhPSAnJ1wiPnt7bW9kZWwueWVhcn19PC90aD5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyTWFrZXNNb2RlbFllYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgQElucHV0KCd0YWJsZS1kYXRhJykgc2VsZWN0ZWQ7XG4gICAgbW9kZWwgPSB7bmFtZTonJyx5ZWFyOicnfTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9jYXJNYWtlc1NlcnZpY2U6IENhck1ha2VzU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC5pIDwgMTApe1xuICAgICAgICAgICAgdGhpcy5fY2FyTWFrZXNTZXJ2aWNlLmdldENhck1vZGVsWWVhcnModGhpcy5zZWxlY3RlZC5tYWtlLHRoaXMuc2VsZWN0ZWQubW9kZWwpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwueWVhciA9IGRhdGEueWVhcnNbMF0ueWVhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
