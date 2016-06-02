System.register(['@angular/core', './mock-shopping-list'], function(exports_1, context_1) {
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
    var core_1, mock_shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_shopping_list_1_1) {
                mock_shopping_list_1 = mock_shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getItems = function () {
                    return mock_shopping_list_1.shopping_list;
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    mock_shopping_list_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    mock_shopping_list_1.shopping_list.splice(mock_shopping_list_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBYUEsQ0FBQztnQkFaQSxzQ0FBUSxHQUFSO29CQUNDLE1BQU0sQ0FBQyxrQ0FBYSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFjO29CQUN4QixrQ0FBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBYztvQkFDeEIsa0NBQWEsQ0FBQyxNQUFNLENBQUMsa0NBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BELENBQUM7Z0JBYkY7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBZWIsMEJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFEQWFDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcbmltcG9ydCB7c2hvcHBpbmdfbGlzdH0gZnJvbSAnLi9tb2NrLXNob3BwaW5nLWxpc3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RTZXJ2aWNle1xuXHRnZXRJdGVtcygpe1xuXHRcdHJldHVybiBzaG9wcGluZ19saXN0O1xuXHR9XG5cblx0aW5zZXJ0SXRlbShpdGVtOiBMaXN0SXRlbSkge1xuXHRcdHNob3BwaW5nX2xpc3QucHVzaChpdGVtKTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcblx0XHRzaG9wcGluZ19saXN0LnNwbGljZShzaG9wcGluZ19saXN0LmluZGV4T2YoaXRlbSksMSlcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
