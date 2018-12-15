(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/template-driven-forms/template-driven-forms.component */ "./src/app/pages/template-driven-forms/template-driven-forms.component.ts");
/* harmony import */ var _pages_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/reactive-forms/reactive-forms.component */ "./src/app/pages/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var _pages_reactive_forms2_reactive_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/reactive-forms2/reactive-forms.component */ "./src/app/pages/reactive-forms2/reactive-forms.component.ts");








var routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'templateForms',
        component: _pages_template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_5__["TemplateDrivenFormsComponent"]
    },
    {
        path: 'reactiveForms',
        component: _pages_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsComponent"]
    },
    {
        path: 'reactive2Forms',
        component: _pages_reactive_forms2_reactive_forms_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveForms2Component"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Inicio</a>\n      </li>\n      \n      <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\n        <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Forms\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/templateForms\" >Template Driven</a>\n          <a class=\"dropdown-item\" routerLink=\"/reactiveForms\" >Reactive</a>\n          <a class=\"dropdown-item\" routerLink=\"/reactive2Forms\" >Reactive formBuilder</a>\n        </div>\n      </li>\n\n    </ul>\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n  </div>\n</nav>\n\n\n<div class=\"jumbotron\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  color: white !important;\n  font-weight: bolder; }\n\nimg {\n  height: 40px;\n  width: 40px; }\n\n.jumbotron, ::ng-deep body {\n  color: white;\n  background-color: black; }\n\nli {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1RSQUJBSk8vYXBwcy8wMTYuQW5ndWxhclRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGFBQVk7RUFDWix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYWN0aXZle1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmltZ3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbi5qdW1ib3Ryb24sIDo6bmctZGVlcCAgYm9keSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5saXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularTest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/template-driven-forms/template-driven-forms.component */ "./src/app/pages/template-driven-forms/template-driven-forms.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reactive-forms/reactive-forms.component */ "./src/app/pages/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var _pages_reactive_forms2_reactive_forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reactive-forms2/reactive-forms.component */ "./src/app/pages/reactive-forms2/reactive-forms.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_template_driven_forms_template_driven_forms_component__WEBPACK_IMPORTED_MODULE_6__["TemplateDrivenFormsComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _pages_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsComponent"],
                _pages_reactive_forms2_reactive_forms_component__WEBPACK_IMPORTED_MODULE_10__["ReactiveForms2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: sexEnum, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sexEnum", function() { return sexEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var sexEnum;
(function (sexEnum) {
    sexEnum[sexEnum["hombre"] = 0] = "hombre";
    sexEnum[sexEnum["mujer"] = 1] = "mujer";
})(sexEnum || (sexEnum = {}));
var User = /** @class */ (function () {
    function User(id, name, color, sex, isOk, email) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.sex = sex;
        this.isOk = isOk;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/reactive-forms/reactive-forms.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reactive-forms/reactive-forms.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <h1>Reactive Form</h1>\n\n  <form [formGroup]=\"miFormulario\" (ngSubmit)=\"guardarCambios()\" novalidate=\"\">\n\n    <div formGroupName=\"nombreCompleto\">\n      <!-- [ngClass]=\"{'is-invalid': !miFormulario.get('nombre').valid}\" -->\n      <div class=\"form-group row\">\n        <label class=\"col-3 col-form-label\">Nombre</label>\n        <div class=\"col-8\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Nombre\" formControlName=\"nombre\" [ngClass]=\"{'is-invalid': !miFormulario.get('nombreCompleto.nombre').valid}\">\n          <div *ngIf=\"miFormulario.get('nombreCompleto.nombre').errors?.required\" class=\"invalid-feedback\">\n            El nombre es necesario\n          </div>\n          <div *ngIf=\"miFormulario.get('nombreCompleto.nombre').errors?.minlength\" class=\"invalid-feedback\">\n            Por lo menos 3 caracteres\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-3 col-form-label\">Apellido</label>\n        <div class=\"col-8\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Apellido\" formControlName=\"apellido\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Correo</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" type=\"email\" placeholder=\"Correo electrónico\" formControlName=\"correo\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Aficciones</label>\n      <div class=\"col-md-6\" formArrayName=\"aficciones\">\n        <input class=\"form-control\" type=\"text\" *ngFor=\"let item of miFormulario.controls['aficciones'].controls; let i=index\"\n          [formControlName]=\"i\">\n      </div>\n      <button type=\"button\" (click)=\"agregarAficciones()\" class=\"btn btn-primary\">Nuevo </button>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Username</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"username\" formControlName=\"username\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Password</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"password\" formControlName=\"password1\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Password2</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"repetir password\" formControlName=\"password2\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">&nbsp;</label>\n      <div class=\"input-group col-md-8\">\n        <button type=\"submit\" class=\"btn btn-outline-primary\">\n          Guardar\n        </button>\n      </div>\n    </div>\n\n    {{miFormulario.valid}}\n    <br>\n    {{miFormulario.status}}\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/reactive-forms/reactive-forms.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/reactive-forms/reactive-forms.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWN0aXZlLWZvcm1zL3JlYWN0aXZlLWZvcm1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/reactive-forms/reactive-forms.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reactive-forms/reactive-forms.component.ts ***!
  \******************************************************************/
/*! exports provided: ReactiveFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsComponent", function() { return ReactiveFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ReactiveFormsComponent = /** @class */ (function () {
    function ReactiveFormsComponent() {
        this.usuario = {
            nombreCompleto: {
                nombre: 'Jose Luis',
                apellido: 'Garcia'
            },
            correo: 'joseluis@jolugama.com',
            aficciones: ['tocar la armónica'],
            username: '',
            password1: '',
            password2: '',
        };
        this.usuarioVacio = {
            nombreCompleto: {
                nombre: '',
                apellido: ''
            },
            correo: '',
            aficciones: [null]
        };
        this.miFormulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombreCompleto': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Jose', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ]),
                'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
            }),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            'aficciones': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Correr', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ]),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.UserExist]),
            'password1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'password2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.match('password1')
            ])
        });
        // this.miFormulario.controls['password2'].setValidators([
        //   Validators.required,
        //   this.noIgual.bind(this)
        // ]);
        // setteo de datos
        this.miFormulario.setValue(this.usuario);
        this.miFormulario.controls['username'].valueChanges.subscribe(function (data) {
            console.log(data);
        });
        this.miFormulario.controls['username'].statusChanges.subscribe(function (data) {
            console.log(data);
        });
    }
    ReactiveFormsComponent.prototype.ngOnInit = function () {
    };
    ReactiveFormsComponent.prototype.guardarCambios = function () {
        console.log(this.miFormulario.value);
        console.log(this.miFormulario);
        console.log('xx', this.miFormulario.get('nombreCompleto.nombre'));
        // this.miFormulario.reset(this.usuarioVacio);
    };
    ReactiveFormsComponent.prototype.agregarAficciones = function () {
        this.miFormulario.controls['aficciones'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
    };
    ReactiveFormsComponent.prototype.noIgual = function (control) {
        if (control.value !== this.miFormulario.controls['password2'].value) {
            return {
                noIgual: false
            };
        }
        return null;
    };
    /** control.value debe ser igual a <FormGroup>.controls[controlKey].value */
    ReactiveFormsComponent.prototype.match = function (controlKey) {
        return function (control) {
            // control.parent es el FormGroup
            if (control.parent) { // en las primeras llamadas control.parent es undefined
                var checkValue = control.parent.controls[controlKey].value;
                if (control.value !== checkValue) {
                    return {
                        match: true
                    };
                }
            }
            return null;
        };
    };
    ReactiveFormsComponent.prototype.UserExist = function (control) {
        return new Promise(function (resolv, reject) {
            setTimeout(function () {
                if (control.value === 'admin') {
                    resolv({ existe: true });
                }
                else {
                    resolv(null);
                }
            }, 3000);
        });
    };
    ReactiveFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reactive-forms',
            template: __webpack_require__(/*! ./reactive-forms.component.html */ "./src/app/pages/reactive-forms/reactive-forms.component.html"),
            styles: [__webpack_require__(/*! ./reactive-forms.component.scss */ "./src/app/pages/reactive-forms/reactive-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());



/***/ }),

/***/ "./src/app/pages/reactive-forms2/reactive-forms.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reactive-forms2/reactive-forms.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <h1>Reactive Form</h1>\n\n  <form [formGroup]=\"miFormulario\" (ngSubmit)=\"guardarCambios()\" novalidate=\"\">\n\n    <div formGroupName=\"nombreCompleto\">\n      <!-- [ngClass]=\"{'is-invalid': !miFormulario.get('nombre').valid}\" -->\n      <div class=\"form-group row\">\n        <label class=\"col-3 col-form-label\">Nombre</label>\n        <div class=\"col-8\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Nombre\" formControlName=\"nombre\" [ngClass]=\"{'is-invalid': !miFormulario.get('nombreCompleto.nombre').valid}\">\n          <div *ngIf=\"miFormulario.get('nombreCompleto.nombre').errors?.required\" class=\"invalid-feedback\">\n            El nombre es necesario\n          </div>\n          <div *ngIf=\"miFormulario.get('nombreCompleto.nombre').errors?.minlength\" class=\"invalid-feedback\">\n            Por lo menos 3 caracteres\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-3 col-form-label\">Apellido</label>\n        <div class=\"col-8\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Apellido\" formControlName=\"apellido\">\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Correo</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" type=\"email\" placeholder=\"Correo electrónico\" formControlName=\"correo\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Aficciones</label>\n      <div class=\"col-md-6\" formArrayName=\"aficciones\">\n        <input class=\"form-control\" type=\"text\" *ngFor=\"let item of miFormulario.controls['aficciones'].controls; let i=index\"\n          [formControlName]=\"i\">\n      </div>\n      <button type=\"button\" (click)=\"agregarAficciones()\" class=\"btn btn-primary\">Nuevo </button>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Username</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"username\" formControlName=\"username\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Password</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"password\" formControlName=\"password1\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">Password2</label>\n      <div class=\"col-8\">\n        <input class=\"form-control\" type=\"password\" placeholder=\"repetir password\" formControlName=\"password2\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-3 col-form-label\">&nbsp;</label>\n      <div class=\"input-group col-md-8\">\n        <button type=\"submit\" class=\"btn btn-outline-primary\">\n          Guardar\n        </button>\n      </div>\n    </div>\n\n    {{miFormulario.valid}}\n    <br>\n    {{miFormulario.status}}\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/reactive-forms2/reactive-forms.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reactive-forms2/reactive-forms.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWN0aXZlLWZvcm1zMi9yZWFjdGl2ZS1mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/reactive-forms2/reactive-forms.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reactive-forms2/reactive-forms.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReactiveForms2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveForms2Component", function() { return ReactiveForms2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ReactiveForms2Component = /** @class */ (function () {
    function ReactiveForms2Component(fb) {
        this.fb = fb;
        this.usuario = {
            nombreCompleto: {
                nombre: 'Jose Luis',
                apellido: 'Garcia'
            },
            correo: 'joseluis@jolugama.com',
            aficciones: ['tocar la armónica'],
            username: '',
            password1: '',
            password2: '',
        };
        this.usuarioVacio = {
            nombreCompleto: {
                nombre: '',
                apellido: ''
            },
            correo: '',
            aficciones: [null]
        };
        this.miFormulario = this.fb.group({
            'nombreCompleto': this.fb.group({
                'nombre': this.fb.control('Jose', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ]),
                'apellido': this.fb.control('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
            }),
            'correo': this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            'aficciones': this.fb.array([
                this.fb.control('Correr', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ]),
            'username': this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.UserExist]),
            'password1': this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'password2': this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.match('password1')
            ])
        });
        // this.miFormulario.controls['password2'].setValidators([
        //   Validators.required,
        //   this.noIgual.bind(this)
        // ]);
        // setteo de datos
        this.miFormulario.setValue(this.usuario);
        this.miFormulario.controls['username'].valueChanges.subscribe(function (data) {
            console.log(data);
        });
        this.miFormulario.controls['username'].statusChanges.subscribe(function (data) {
            console.log(data);
        });
    }
    ReactiveForms2Component.prototype.ngOnInit = function () {
    };
    ReactiveForms2Component.prototype.guardarCambios = function () {
        console.log(this.miFormulario.value);
        console.log(this.miFormulario);
        console.log('xx', this.miFormulario.get('nombreCompleto.nombre'));
        // this.miFormulario.reset(this.usuarioVacio);
    };
    ReactiveForms2Component.prototype.agregarAficciones = function () {
        this.miFormulario.controls['aficciones'].push(this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
    };
    ReactiveForms2Component.prototype.noIgual = function (control) {
        if (control.value !== this.miFormulario.controls['password2'].value) {
            return {
                noIgual: false
            };
        }
        return null;
    };
    /** control.value debe ser igual a <FormGroup>.controls[controlKey].value */
    ReactiveForms2Component.prototype.match = function (controlKey) {
        return function (control) {
            // control.parent es el FormGroup
            if (control.parent) { // en las primeras llamadas control.parent es undefined
                var checkValue = control.parent.controls[controlKey].value;
                if (control.value !== checkValue) {
                    return {
                        match: true
                    };
                }
            }
            return null;
        };
    };
    ReactiveForms2Component.prototype.UserExist = function (control) {
        return new Promise(function (resolv, reject) {
            setTimeout(function () {
                if (control.value === 'admin') {
                    resolv({ existe: true });
                }
                else {
                    resolv(null);
                }
            }, 3000);
        });
    };
    ReactiveForms2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reactive-forms',
            template: __webpack_require__(/*! ./reactive-forms.component.html */ "./src/app/pages/reactive-forms2/reactive-forms.component.html"),
            styles: [__webpack_require__(/*! ./reactive-forms.component.scss */ "./src/app/pages/reactive-forms2/reactive-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ReactiveForms2Component);
    return ReactiveForms2Component;
}());



/***/ }),

/***/ "./src/app/pages/template-driven-forms/template-driven-forms.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/template-driven-forms/template-driven-forms.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-5\">\n  <div [hidden]=\"submitted\">\n    <h1>Template Driven Form</h1>\n    <form (ngSubmit)=\"onSubmit(userForm)\" #userForm=\"ngForm\" novalidate=\"\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Nombre *</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"myUser.name\" name=\"name\" #name=\"ngModel\"\n          minlength=\"5\">\n        <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors?.required\">\n            Este campo es requerido.\n          </div>\n          <div *ngIf=\"name.errors?.minlength\">\n            Por lo menos {{ name.errors.minlength.requiredLength}} caracteres.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"myUser.email\" name=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n          #email=ngModel>\n        <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors?.pattern\">\n            El email es incorrecto. Debe contener @ y .\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"color\">Color *</label>\n        <select class=\"form-control\" id=\"color\" required [(ngModel)]=\"myUser.color\" name=\"color\" #color=\"ngModel\">\n          <option *ngFor=\"let color of colors\" [value]=\"color\">{{color.color}}</option>\n        </select>\n        <div [hidden]=\"color.valid || color.pristine\" class=\"alert alert-danger\">\n          Color es obligatorio\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div> <label>Sexo</label></div>\n        <div class=\"custom-control custom-radio custom-control-inline\" *ngFor=\"let item of sexKeys2\">\n          <input type=\"radio\" id=\"sexo{{item}}\" [(ngModel)]=\"myUser.sex\" [value]=\"item\" name=\"sex\" class=\"custom-control-input\">\n          <label class=\"custom-control-label\" for=\"sexo{{item}}\">{{item}}</label>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div> <label>Acepta</label></div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" required [(ngModel)]=\"myUser.isOk\" name=\"isOk\" class=\"custom-control-input\" id=\"customCheck1\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">Acepta las condiciones</label>\n        </div>\n      </div>\n\n\n\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid\">Enviar</button>\n      <button type=\"submit\" class=\"btn btn-success\">Enviar Test</button>\n\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"userForm.reset()\">Reset User</button>\n\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"newUser()\">Nuevo Usuario</button>\n\n      <div>\n        {{myUser |json }}\n      </div>\n\n\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\">\n    <h2>Enviaste lo siguiente:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name: </div>\n      <div class=\"col-xs-9\">{{ myUser.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Email: </div>\n      <div class=\"col-xs-9\">{{ myUser.email }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">color: </div>\n      <div class=\"col-xs-9\">{{ myUser.color.color }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">sexo: </div>\n      <div class=\"col-xs-9\">{{ myUser.sex }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Editar</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/template-driven-forms/template-driven-forms.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/template-driven-forms/template-driven-forms.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px; }\n\ndiv {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.ng-invalid.ng-touched:not(form) {\n  border: 2px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpbnV4L1RSQUJBSk8vYXBwcy8wMTYuQW5ndWxhclRlc3Qvc3JjL2FwcC9wYWdlcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybXMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0ksZ0JBQWM7RUFDZCxtQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybXMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5kaXZ7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/template-driven-forms/template-driven-forms.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/template-driven-forms/template-driven-forms.component.ts ***!
  \********************************************************************************/
/*! exports provided: TemplateDrivenFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenFormsComponent", function() { return TemplateDrivenFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");



var TemplateDrivenFormsComponent = /** @class */ (function () {
    function TemplateDrivenFormsComponent() {
        this.colors = [
            { id: 0, color: 'rojo' },
            { id: 1, color: 'amarillo' },
            { id: 2, color: 'azul' },
            { id: 3, color: 'verde' }
        ];
        this.sexKeys = Object.keys(src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["sexEnum"]);
        this.sexKeys2 = this.sexKeys.slice(this.sexKeys.length / 2);
        // sexKeys = objectEnum.slice( objectEnum.length / 2 );
        this.myUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"](18, 'Vito Corleone', this.colors[0], 'hombre', false, 'donvito@gmail.com');
        this.submitted = false;
    }
    TemplateDrivenFormsComponent.prototype.onSubmit = function (userForm) {
        console.log('form', userForm);
        console.log('form controls', userForm.controls);
        console.log('form value', userForm.value);
        console.log('myUser', this.myUser);
        if (userForm.form.valid) {
            this.submitted = true;
        }
        else {
            console.log('FORMULARIO INVALIDO');
        }
    };
    TemplateDrivenFormsComponent.prototype.newUser = function () {
        this.myUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"](18, 'here name ;)', this.colors[0], 'mujer', false, '');
    };
    TemplateDrivenFormsComponent.prototype.ngOnInit = function () {
    };
    TemplateDrivenFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-driven-forms',
            template: __webpack_require__(/*! ./template-driven-forms.component.html */ "./src/app/pages/template-driven-forms/template-driven-forms.component.html"),
            styles: [__webpack_require__(/*! ./template-driven-forms.component.scss */ "./src/app/pages/template-driven-forms/template-driven-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemplateDrivenFormsComponent);
    return TemplateDrivenFormsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/linux/TRABAJO/apps/016.AngularTest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map