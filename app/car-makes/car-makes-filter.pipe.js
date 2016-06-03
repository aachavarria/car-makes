System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var SearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe() {
                }
                SearchPipe.prototype.transform = function (value, term) {
                    if (term) {
                        return value.filter(function (item) { return item.name.toLowerCase().startsWith(term.toLowerCase()); });
                    }
                    else {
                        return value;
                    }
                };
                SearchPipe = __decorate([
                    core_1.Pipe({
                        name: "search"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchPipe);
                return SearchPipe;
            }());
            exports_1("SearchPipe", SearchPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFRQSxDQUFDO2dCQVBHLDhCQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUMsSUFBSztvQkFDakIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7b0JBQ3pGLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQVZMO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUMsUUFBUTtxQkFDaEIsQ0FBQzs7OEJBQUE7Z0JBU0YsaUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELG1DQVFDLENBQUEiLCJmaWxlIjoiY2FyLW1ha2VzL2Nhci1tYWtlcy1maWx0ZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6XCJzZWFyY2hcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBle1xuICAgIHRyYW5zZm9ybSh2YWx1ZSx0ZXJtPyl7XG4gICAgICAgIGlmKHRlcm0pe1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcigoaXRlbSk9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRlcm0udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
