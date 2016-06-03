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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQztnQkFFRyx5QkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUFHLENBQUM7Z0JBRXBDLHVDQUFhLEdBQWI7b0JBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHVGQUF1RixDQUFDO3lCQUN6RyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUMsMENBQWdCLEdBQWhCLFVBQWlCLElBQVcsRUFBQyxLQUFZO29CQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkNBQXlDLElBQUksU0FBSSxLQUFLLGdEQUE2QyxDQUFDO3lCQUNySCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBYko7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBZWIsc0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZDQWNDLENBQUE7Ozs7QUFHRiwyRkFBMkYiLCJmaWxlIjoiY2FyLW1ha2VzL2Nhci1tYWtlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cblxuIEBJbmplY3RhYmxlKClcbiBleHBvcnQgY2xhc3MgQ2FyTWFrZXNTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fVxuXG4gXHRmZXRjaEFsbE1ha2VzKCk6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vYXBpLmVkbXVuZHMuY29tL2FwaS92ZWhpY2xlL3YyL21ha2VzP2ZtdD1qc29uJmFwaV9rZXk9cjluN2ZhNXM5MmtmZXZ3a241M2tuNTdxJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiBcdH1cblxuICAgIGdldENhck1vZGVsWWVhcnMobWFrZTpzdHJpbmcsbW9kZWw6c3RyaW5nKSA6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGBodHRwOi8vYXBpLmVkbXVuZHMuY29tL2FwaS92ZWhpY2xlL3YyLyR7bWFrZX0vJHttb2RlbH0vP2ZtdD1qc29uJmFwaV9rZXk9cjluN2ZhNXM5MmtmZXZ3a241M2tuNTdxYClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiB9XG5cblxuLy9odHRwczovL2FwaS5lZG11bmRzLmNvbS9hcGkvdmVoaWNsZS92Mi9hY3VyYS9jbD9mbXQ9anNvbiZhcGlfa2V5PXI5bjdmYTVzOTJrZmV2d2tuNTNrbjU3cVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
