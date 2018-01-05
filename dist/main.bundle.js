webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-reimbursement/add-reimbursement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-reimbursement/add-reimbursement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/reimbursement\">Back</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/assigned\">Assigned Reimbursements</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<form (submit)=\"addReimbursement($event)\">\n  \t<div class=\"form-group\">\n  \t<label for=\"event\">Event:</label>\n  \t\t<select class=\"form-control\" id=\"event\">\n    \t\t<option>1</option>\n    \t\t<option>2</option>\n  \t\t</select>\n\t</div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description:</label>\n  <textarea class=\"form-control\" rows=\"5\" id=\"description\">\n  </textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"justification\">Justification:</label>\n    <textarea class=\"form-control\" id=\"justification\">\n    </textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/add-reimbursement/add-reimbursement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReimbursementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_reimbursement__ = __webpack_require__("../../../../../src/app/interfaces/reimbursement.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddReimbursementComponent = (function () {
    function AddReimbursementComponent(http, user, router) {
        this.http = http;
        this.user = user;
        this.router = router;
        this.reimbursement = __WEBPACK_IMPORTED_MODULE_4__interfaces_reimbursement__["a" /* defaultReimbursement */];
        this.ROOT_URL = 'http://localhost:8082/TRMSProject/reimbursements/add';
    }
    AddReimbursementComponent.prototype.addReimbursement = function (event) {
        var _this = this;
        event.preventDefault();
        this.constructReimbursement(event);
        this.http.post(this.ROOT_URL, this.reimbursement).subscribe(function (res) { if (res) {
            _this.router.navigate(['reimbursement']);
        } });
    };
    AddReimbursementComponent.prototype.constructReimbursement = function (event) {
        this.reimbursement.employeeId = this.user.getUserID();
        this.reimbursement.supervisorId = this.user.getSupervisorID();
        this.reimbursement.headId = this.user.getHeadID();
        this.reimbursement.eventId = event.target.elements[0].value;
        this.reimbursement.description = event.target.elements[1].value;
        this.reimbursement.justification = event.target.elements[2].value;
    };
    AddReimbursementComponent.prototype.testForID = function () {
        console.log(this.user.getUserID());
        console.log(this.user.getSupervisorID());
        console.log(this.user.getHeadID());
    };
    AddReimbursementComponent.prototype.testReimbursement = function () {
        console.log(this.reimbursement.id);
    };
    AddReimbursementComponent.prototype.logout = function () {
        this.user.logout();
    };
    AddReimbursementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-reimbursement',
            template: __webpack_require__("../../../../../src/app/add-reimbursement/add-reimbursement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-reimbursement/add-reimbursement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddReimbursementComponent);
    return AddReimbursementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_reimbursements_user_reimbursements_component__ = __webpack_require__("../../../../../src/app/user-reimbursements/user-reimbursements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_reimbursement_add_reimbursement_component__ = __webpack_require__("../../../../../src/app/add-reimbursement/add-reimbursement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_reimbursements_service__ = __webpack_require__("../../../../../src/app/shared/reimbursements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_login_guard__ = __webpack_require__("../../../../../src/app/shared/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_employee_type_guard__ = __webpack_require__("../../../../../src/app/shared/employee-type.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assigned_reimbursements_assigned_reimbursements_component__ = __webpack_require__("../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reimbursement_reimbursement_component__ = __webpack_require__("../../../../../src/app/reimbursement/reimbursement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assigned_reimbursement_assigned_reimbursement_component__ = __webpack_require__("../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: 'reimbursement',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__user_reimbursements_user_reimbursements_component__["a" /* UserReimbursementsComponent */],
    },
    {
        path: 'add',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_10__add_reimbursement_add_reimbursement_component__["a" /* AddReimbursementComponent */]
    },
    {
        path: 'assigned',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_14__shared_employee_type_guard__["a" /* EmployeeTypeGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_15__assigned_reimbursements_assigned_reimbursements_component__["a" /* AssignedReimbursementsComponent */]
    },
    {
        path: 'reimbursement/:reimbursementId',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_16__reimbursement_reimbursement_component__["a" /* ReimbursementComponent */]
    },
    {
        path: 'assigned/:reimbursementId',
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_17__assigned_reimbursement_assigned_reimbursement_component__["a" /* AssignedReimbursementComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_reimbursements_user_reimbursements_component__["a" /* UserReimbursementsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_reimbursement_add_reimbursement_component__["a" /* AddReimbursementComponent */],
                __WEBPACK_IMPORTED_MODULE_15__assigned_reimbursements_assigned_reimbursements_component__["a" /* AssignedReimbursementsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__reimbursement_reimbursement_component__["a" /* ReimbursementComponent */],
                __WEBPACK_IMPORTED_MODULE_17__assigned_reimbursement_assigned_reimbursement_component__["a" /* AssignedReimbursementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__shared_reimbursements_service__["a" /* ReimbursementsService */], __WEBPACK_IMPORTED_MODULE_13__shared_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_14__shared_employee_type_guard__["a" /* EmployeeTypeGuard */], __WEBPACK_IMPORTED_MODULE_9__user_reimbursements_user_reimbursements_component__["a" /* UserReimbursementsComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/add\">Add Reimbursement</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/reimbursement\">View Reimbursements</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/assigned\">Back</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<div class=\"well\">\n\t<h3>Reimbursement ID: {{reimbursement.id}}</h3>\n\t<h4>Event: {{reimbursement.eventId}}</h4>\n    <h5>Description: {{reimbursement.description}}</h5>\n    <h5>Exceed Amount: {{reimbursement.exceedAmount}}</h5>\n    <h5>Justification: {{reimbursement.justification}}</h5>\n    <h5>Status: {{reimbursement.status}}</h5>\n    <h5>Time Missed: {{reimbursement.timeMissed}}</h5>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deny()\">Deny</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignedReimbursementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reimbursements_service__ = __webpack_require__("../../../../../src/app/shared/reimbursements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_reimbursement__ = __webpack_require__("../../../../../src/app/interfaces/reimbursement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssignedReimbursementComponent = (function () {
    function AssignedReimbursementComponent(route, user, reimbService, router, http) {
        this.route = route;
        this.user = user;
        this.reimbService = reimbService;
        this.router = router;
        this.http = http;
        this.reimbursement = __WEBPACK_IMPORTED_MODULE_4__interfaces_reimbursement__["a" /* defaultReimbursement */];
        this.ROOT_URL = 'http://localhost:8082/TRMSProject/reimbursements/assigned';
    }
    AssignedReimbursementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post(this.ROOT_URL, this.user.person).subscribe(function (reimbursements) {
            var reimbID = _this.route.snapshot.params['reimbursementId'];
            for (var i = 0; i < reimbursements.length; i++) {
                if (reimbursements[i].id == reimbID) {
                    _this.reimbursement = reimbursements[i];
                }
            }
        });
    };
    AssignedReimbursementComponent.prototype.update = function () {
        this.reimbService.updateReimbursement(this.reimbursement.id).subscribe();
        this.router.navigate(['reimbursement']);
    };
    AssignedReimbursementComponent.prototype.deny = function () {
        this.reimbService.denyReimbursement(this.reimbursement.id).subscribe();
        this.router.navigate(['reimbursement']);
    };
    AssignedReimbursementComponent.prototype.logout = function () {
        this.user.logout();
    };
    AssignedReimbursementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assigned-reimbursement',
            template: __webpack_require__("../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/assigned-reimbursement/assigned-reimbursement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_reimbursements_service__["a" /* ReimbursementsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], AssignedReimbursementComponent);
    return AssignedReimbursementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/add\">Add Reimbursement</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/reimbursement\">Back</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<div class=\"container\">\n  <h2>Assigned Reimbursements</h2>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>ReimbursementID</th>\n        <th>Status</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let reimbursement of reimbursements; let i = index\">\n        <td><a [routerLink]=\"['/assigned', reimbursement.id]\">{{reimbursement.id}}</a></td>\n        <td>{{reimbursement.status}}</td>\n        <td>{{reimbursement.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignedReimbursementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_reimbursements_service__ = __webpack_require__("../../../../../src/app/shared/reimbursements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignedReimbursementsComponent = (function () {
    function AssignedReimbursementsComponent(reimbService, user, http) {
        this.reimbService = reimbService;
        this.user = user;
        this.http = http;
        this.reimbursements = [];
        this.ROOT_URL = 'http://localhost:8082/TRMSProject/reimbursements/assigned';
    }
    AssignedReimbursementsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.post(this.ROOT_URL, this.user.person).subscribe(function (reimbursements) { return _this.reimbursements = reimbursements; });
    };
    AssignedReimbursementsComponent.prototype.logout = function () {
        this.user.logout();
    };
    AssignedReimbursementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assigned-reimbursements',
            template: __webpack_require__("../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/assigned-reimbursements/assigned-reimbursements.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_reimbursements_service__["a" /* ReimbursementsService */], __WEBPACK_IMPORTED_MODULE_3__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AssignedReimbursementsComponent);
    return AssignedReimbursementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p> Copyright &copy; TRMS</p>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>TRMS</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interfaces/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPerson; });
var DefaultPerson = {
    id: 0,
    last: 'dummy',
    first: 'dummy',
    email: 'dummy@dummy.com',
    employeeTypeId: 0,
    supervisorId: 0,
    headId: 0
};


/***/ }),

/***/ "../../../../../src/app/interfaces/reimbursement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultReimbursement; });
var defaultReimbursement = {
    bencoId: 2,
    dateCreated: '2018-01-03T23:34:50Z[UTC]',
    description: 'dummyDescrip',
    employeeId: 0,
    eventId: 1,
    exceedAmount: 0,
    headId: 0,
    id: 0,
    justification: 'dummyJust',
    status: 'SUPER',
    supervisorId: 1,
    timeMissed: 1
};


/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\ndiv.input {\r\n\tposition: relative;\r\n}\r\n\r\ndiv.input label {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\t-webkit-transform: translateY(-50%);\r\n\t        transform: translateY(-50%);\r\n\tleft: 10px;\r\n\tbackground: white;\r\n\tpadding: 5px 2px;\r\n}\r\n\r\ndiv.input input {\r\n\tpadding: 10px 20px;\r\n\tfont-size: 25px;\r\n\toutline: 0;\r\n}\r\n\r\ndiv.input {\r\n\tmargin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"loginUser($event)\">\n\t<div class=\"input\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\">\n\t</div>\n\t<div class=\"input\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\">\n\t</div>\n\t<div class=\"input\">\n\t\t<input type=\"submit\" value=\"Login\">\n\t</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        var username = event.target.elements[0].value;
        var password = event.target.elements[1].value;
        this.userService.getUser(username, password);
        if (this.userService.getUserID() > 0) {
            this.router.navigate(['reimbursement']);
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reimbursement/reimbursement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reimbursement/reimbursement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/add\">Add Reimbursement</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/assigned\">Assigned Reimbursements</button>\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/reimbursement\">Back</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<div class=\"well\">\n\t<h3>Reimbursement ID: {{reimbursement.id}}</h3>\n\t<h4>Event: {{reimbursement.eventId}}</h4>\n    <h5>Description: {{reimbursement.description}}</h5>\n    <h5>Exceed Amount: {{reimbursement.exceedAmount}}</h5>\n    <h5>Justification: {{reimbursement.justification}}</h5>\n    <h5>Status: {{reimbursement.status}}</h5>\n    <h5>Time Missed: {{reimbursement.timeMissed}}</h5>\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"delete()\">Delete</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reimbursement/reimbursement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reimbursement__ = __webpack_require__("../../../../../src/app/interfaces/reimbursement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_reimbursements_service__ = __webpack_require__("../../../../../src/app/shared/reimbursements.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReimbursementComponent = (function () {
    function ReimbursementComponent(route, user, reimbService, router) {
        this.route = route;
        this.user = user;
        this.reimbService = reimbService;
        this.router = router;
        this.reimbursement = __WEBPACK_IMPORTED_MODULE_1__interfaces_reimbursement__["a" /* defaultReimbursement */];
    }
    ReimbursementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reimbService.getUserReimbursements(this.user.getUserID()).subscribe(function (reimbs) {
            console.log(reimbs.length);
            var reimbID = _this.route.snapshot.params['reimbursementId'];
            for (var i = 0; i < reimbs.length; i++) {
                if (reimbs[i].id == reimbID) {
                    _this.reimbursement = reimbs[i];
                    break;
                }
            }
        });
    };
    ReimbursementComponent.prototype.delete = function () {
        var leavePage = false;
        this.reimbService.deleteReimbursement(this.reimbursement.id).subscribe(leavePage = function (result) { return result; });
        console.log(leavePage);
        if (leavePage) {
            console.log('heh');
            this.router.navigate(['reimbursement']);
        }
    };
    ReimbursementComponent.prototype.logout = function () {
        this.user.logout();
    };
    ReimbursementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reimbursement',
            template: __webpack_require__("../../../../../src/app/reimbursement/reimbursement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reimbursement/reimbursement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_reimbursements_service__["a" /* ReimbursementsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ReimbursementComponent);
    return ReimbursementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/employee-type.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeTypeGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeTypeGuard = (function () {
    function EmployeeTypeGuard(user) {
        this.user = user;
    }
    EmployeeTypeGuard.prototype.canActivate = function (next, state) {
        return this.user.getEmployeeType() > 1;
    };
    EmployeeTypeGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], EmployeeTypeGuard);
    return EmployeeTypeGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(router, user) {
        this.router = router;
        this.user = user;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this.user.getUserID() === 0) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/reimbursements.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursementsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReimbursementsService = (function () {
    function ReimbursementsService(http, user) {
        this.http = http;
        this.user = user;
        this.total = 0;
        this.ROOT_URL = 'http://localhost:8082/TRMSProject/reimbursements';
    }
    ReimbursementsService.prototype.getUserReimbursements = function (userID) {
        return this.http.get(this.ROOT_URL + ("/" + userID));
    };
    ReimbursementsService.prototype.deleteReimbursement = function (reimbursementID) {
        return this.http.get(this.ROOT_URL + ("/delete/" + reimbursementID));
    };
    ReimbursementsService.prototype.getTotalReimbursements = function (person) {
        return this.http.get(this.ROOT_URL + ("/total/" + this.user.getUserID()));
    };
    ReimbursementsService.prototype.updateReimbursement = function (reimbursementID) {
        return this.http.get(this.ROOT_URL + ("/update/" + reimbursementID));
    };
    ReimbursementsService.prototype.denyReimbursement = function (reimbursementID) {
        return this.http.get(this.ROOT_URL + ("/deny/" + reimbursementID));
    };
    ReimbursementsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_user_service__["a" /* UserService */]])
    ], ReimbursementsService);
    return ReimbursementsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_person__ = __webpack_require__("../../../../../src/app/interfaces/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.ROOT_URL = 'http://localhost:8082/TRMSProject/';
        this.person = __WEBPACK_IMPORTED_MODULE_2__interfaces_person__["a" /* DefaultPerson */];
    }
    UserService.prototype.getUser = function (em, password) {
        var _this = this;
        var _properties = (_a = {}, _a['em'] = em, _a['pass'] = password, _a);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](_properties);
        this.http.get(this.ROOT_URL + 'login', { headers: headers }).subscribe(function (person) { _this.person = person; });
        var _a;
    };
    UserService.prototype.setPerson = function (person) {
        this.person = person;
    };
    UserService.prototype.getUserID = function () {
        return this.person.id;
    };
    UserService.prototype.getSupervisorID = function () {
        return this.person.supervisorId;
    };
    UserService.prototype.getHeadID = function () {
        return this.person.headId;
    };
    UserService.prototype.getEmployeeType = function () {
        return this.person.employeeTypeId;
    };
    UserService.prototype.logout = function () {
        this.person = __WEBPACK_IMPORTED_MODULE_2__interfaces_person__["a" /* DefaultPerson */];
        this.router.navigate(['']);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user-reimbursements/user-reimbursements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-reimbursements/user-reimbursements.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/add\">Add Reimbursement</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/assigned\">Assigned Reimbursements</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\r\n</div>\r\n\r\n<h3>Welcome, you currently have {{moneys | currency}} in reimbursements.</h3>\r\n\r\n<div class=\"container\">\r\n  <h2>Reimbursements</h2>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>ReimbursementID</th>\r\n        <th>Description</th>\r\n        <th>Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let reimbursement of reimbursements; let i = index\">\r\n        <td><a [routerLink]=\"['/reimbursement', reimbursement.id]\">{{reimbursement.id}}</a></td>\r\n        <td>{{reimbursement.description}}</td>\r\n        <td>{{reimbursement.status}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/user-reimbursements/user-reimbursements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReimbursementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_reimbursements_service__ = __webpack_require__("../../../../../src/app/shared/reimbursements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_service__ = __webpack_require__("../../../../../src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserReimbursementsComponent = (function () {
    function UserReimbursementsComponent(reimbService, userService, router) {
        this.reimbService = reimbService;
        this.userService = userService;
        this.router = router;
        this.reimbursements = [];
        this.moneys = 0;
    }
    UserReimbursementsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var userID = this.userService.getUserID();
        this.reimbService.getUserReimbursements(userID).subscribe(function (reimbursements) { _this.reimbursements = reimbursements; });
        this.reimbService.getTotalReimbursements(this.userService.person).subscribe(function (money) { _this.moneys = money; console.log(_this.moneys); });
    };
    UserReimbursementsComponent.prototype.getReimbursements = function () {
        var _this = this;
        var loggedUserID = this.userService.getUserID();
        this.reimbService.getUserReimbursements(loggedUserID).subscribe(function (reimbursements) { _this.reimbursements = reimbursements; });
    };
    UserReimbursementsComponent.prototype.returnReimbursements = function () {
        return this.reimbursements;
    };
    UserReimbursementsComponent.prototype.logout = function () {
        this.userService.logout();
    };
    UserReimbursementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-reimbursements',
            template: __webpack_require__("../../../../../src/app/user-reimbursements/user-reimbursements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-reimbursements/user-reimbursements.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_reimbursements_service__["a" /* ReimbursementsService */], __WEBPACK_IMPORTED_MODULE_3__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserReimbursementsComponent);
    return UserReimbursementsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map