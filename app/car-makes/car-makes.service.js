System.register(['@angular/core', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CarMakesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarMakesService = (function () {
                function CarMakesService(_http) {
                    this._http = _http;
                    this.url = 'http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q';
                }
                CarMakesService.prototype.fetchAllMakes = function () {
                    return this._http.get(this.url)
                        .map(function (response) { return response.json(); });
                };
                CarMakesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CarMakesService);
                return CarMakesService;
            }());
            exports_1("CarMakesService", CarMakesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQztnQkFHRyx5QkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUZ0QixRQUFHLEdBQUcsdUZBQXVGLENBQUM7Z0JBRXJFLENBQUM7Z0JBRXBDLHVDQUFhLEdBQWI7b0JBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQzFCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFURjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFXYixzQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsNkNBVUMsQ0FBQSIsImZpbGUiOiJjYXItbWFrZXMvY2FyLW1ha2VzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuXG4gQEluamVjdGFibGUoKVxuIGV4cG9ydCBjbGFzcyBDYXJNYWtlc1NlcnZpY2V7XG4gICAgcHJpdmF0ZSB1cmwgPSAnaHR0cDovL2FwaS5lZG11bmRzLmNvbS9hcGkvdmVoaWNsZS92Mi9tYWtlcz9mbXQ9anNvbiZhcGlfa2V5PXI5bjdmYTVzOTJrZmV2d2tuNTNrbjU3cSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApIHt9XG5cbiBcdGZldGNoQWxsTWFrZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy51cmwpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gXHR9XG5cbiB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
