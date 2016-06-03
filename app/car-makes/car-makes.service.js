System.register(['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/delay'], function(exports_1, context_1) {
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
            function (_1) {},
            function (_2) {}],
        execute: function() {
            CarMakesService = (function () {
                function CarMakesService(_http) {
                    this._http = _http;
                }
                CarMakesService.prototype.fetchAllMakes = function () {
                    return this._http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q')
                        .map(function (response) { return response.json(); });
                };
                CarMakesService.prototype.getCarModelYears = function (make, model) {
                    return this._http.get("http://api.edmunds.com/api/vehicle/v2/" + make + "/" + model + "/?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q")
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
//https://api.edmunds.com/api/vehicle/v2/acura/cl?fmt=json&api_key=r9n7fa5s92kfevwkn53kn57q

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUM7Z0JBRUcseUJBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFBRyxDQUFDO2dCQUVwQyx1Q0FBYSxHQUFiO29CQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx1RkFBdUYsQ0FBQzt5QkFDekcsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFBO2dCQUMzQyxDQUFDO2dCQUVDLDBDQUFnQixHQUFoQixVQUFpQixJQUFJLEVBQUMsS0FBSztvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLFNBQUksS0FBSyxnREFBNkMsQ0FBQzt5QkFDckgsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQWJKO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQWViLHNCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCw2Q0FjQyxDQUFBOzs7O0FBR0YsMkZBQTJGIiwiZmlsZSI6ImNhci1tYWtlcy9jYXItbWFrZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cblxuIEBJbmplY3RhYmxlKClcbiBleHBvcnQgY2xhc3MgQ2FyTWFrZXNTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fVxuXG4gXHRmZXRjaEFsbE1ha2VzKCk6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vYXBpLmVkbXVuZHMuY29tL2FwaS92ZWhpY2xlL3YyL21ha2VzP2ZtdD1qc29uJmFwaV9rZXk9cjluN2ZhNXM5MmtmZXZ3a241M2tuNTdxJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuIFx0fVxuXG4gICAgZ2V0Q2FyTW9kZWxZZWFycyhtYWtlLG1vZGVsKSA6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGBodHRwOi8vYXBpLmVkbXVuZHMuY29tL2FwaS92ZWhpY2xlL3YyLyR7bWFrZX0vJHttb2RlbH0vP2ZtdD1qc29uJmFwaV9rZXk9cjluN2ZhNXM5MmtmZXZ3a241M2tuNTdxYClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiB9XG5cblxuLy9odHRwczovL2FwaS5lZG11bmRzLmNvbS9hcGkvdmVoaWNsZS92Mi9hY3VyYS9jbD9mbXQ9anNvbiZhcGlfa2V5PXI5bjdmYTVzOTJrZmV2d2tuNTNrbjU3cVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
