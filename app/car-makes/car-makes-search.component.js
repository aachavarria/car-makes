System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var CarMakesSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CarMakesSearchComponent = (function () {
                function CarMakesSearchComponent() {
                    this.delay = 300;
                    this.update = new core_1.EventEmitter();
                    this.term = new common_1.Control();
                }
                CarMakesSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.term.valueChanges
                        .debounceTime(this.delay)
                        .subscribe(function (term) { return _this.update.emit(term); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CarMakesSearchComponent.prototype, "delay", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CarMakesSearchComponent.prototype, "update", void 0);
                CarMakesSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'car-makes-search',
                        template: "\n        <input #input class=\"form-control\" type=\"text\" placeholder=\"Starts With\" [ngFormControl]=\"term\"/>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarMakesSearchComponent);
                return CarMakesSearchComponent;
            }());
            exports_1("CarMakesSearchComponent", CarMakesSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1tYWtlcy9jYXItbWFrZXMtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO29CQUNhLFVBQUssR0FBVSxHQUFHLENBQUM7b0JBQ2xCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDdEMsU0FBSSxHQUFHLElBQUksZ0JBQU8sRUFBRSxDQUFDO2dCQU96QixDQUFDO2dCQUxHLDBDQUFRLEdBQVI7b0JBQUEsaUJBSUM7b0JBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO3lCQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDeEIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFSRDtvQkFBQyxZQUFLLEVBQUU7O3NFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7dUVBQUE7Z0JBVGI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsa0JBQWtCO3dCQUMzQixRQUFRLEVBQUMsMkhBRVI7cUJBQ0osQ0FBQzs7MkNBQUE7Z0JBWUYsOEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDZEQVVDLENBQUEiLCJmaWxlIjoiY2FyLW1ha2VzL2Nhci1tYWtlcy1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQgLCBPdXRwdXQgLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDYXJNYWtlc1NlcnZpY2V9IGZyb20gJy4vY2FyLW1ha2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY2FyLW1ha2VzLXNlYXJjaCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8aW5wdXQgI2lucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0cyBXaXRoXCIgW25nRm9ybUNvbnRyb2xdPVwidGVybVwiLz5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyTWFrZXNTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgQElucHV0KCkgZGVsYXk6bnVtYmVyID0gMzAwO1xuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGVybSA9IG5ldyBDb250cm9sKCk7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnRlcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4gdGhpcy51cGRhdGUuZW1pdCh0ZXJtKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
