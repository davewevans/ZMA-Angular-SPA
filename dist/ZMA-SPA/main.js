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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--  \n<nav mat-tab-nav-bar>\n    <a mat-tab-link *ngFor=\"let link of navLinks\" \n        [routerLink]=\"link.path\" \n        routerLinkActive #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{ link.label }}\n    </a>\n</nav>  -->\n\n<app-nav></app-nav> \n<!-- <app-dialog-example></app-dialog-example> -->\n<router-outlet></router-outlet>\n\n<!-- <mat-tab-group dynamicHeight=\"true\" >\n    <mat-tab>      \n        <ng-template mat-tab-label>\n            The <em>best</em> pasta\n        </ng-template> \n        <h1>Best pasta restaurants</h1>\n        <p>...</p>\n    </mat-tab>\n    <mat-tab>\n            <ng-template mat-tab-label>\n                 <mat-icon>thumb_down</mat-icon> The worst sushi \n            </ng-template>\n            <h1>Terrible sushi restaurants</h1>\n            <p>...</p>\n          </mat-tab>\n    <mat-tab label=\"Third\"> Content 3 </mat-tab>\n  </mat-tab-group>   -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.navlinks = [
            { path: 'home', label: 'Home' },
            { path: 'about', label: 'About' }
        ];
        this.title = 'ZMA-SPA';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_member_directory_member_directory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/member-directory/member-directory.component */ "./src/app/components/member-directory/member-directory.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_member_table_member_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/member-table/member-table.component */ "./src/app/components/member-table/member-table.component.ts");
/* harmony import */ var _components_members_grid_members_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/members-grid/members-grid.component */ "./src/app/components/members-grid/members-grid.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_member_directory_sidenav_member_directory_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/member-directory-sidenav/member-directory-sidenav.component */ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.ts");
/* harmony import */ var _components_send_message_dialog_send_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/send-message-dialog/send-message-dialog.component */ "./src/app/components/send-message-dialog/send-message-dialog.component.ts");
/* harmony import */ var _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog-example/dialog-example.component */ "./src/app/dialog-example/dialog-example.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { NoopAnimationsModule } from '@angular/platform-browser';


//import { FormBuilderModule } from '@angular/forms';














var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: 'members', component: _components_members_grid_members_grid_component__WEBPACK_IMPORTED_MODULE_13__["MembersGridComponent"] },
    { path: 'dialogtest', component: _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_17__["DialogOverviewExampleDialog"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _components_member_directory_member_directory_component__WEBPACK_IMPORTED_MODULE_6__["MemberDirectoryComponent"],
                _components_member_table_member_table_component__WEBPACK_IMPORTED_MODULE_12__["MemberTableComponent"],
                _components_members_grid_members_grid_component__WEBPACK_IMPORTED_MODULE_13__["MembersGridComponent"],
                _components_member_directory_sidenav_member_directory_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["MemberDirectorySidenavComponent"],
                _components_send_message_dialog_send_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SendMessageDialogComponent"],
                _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_17__["DialogExampleComponent"],
                _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_17__["DialogOverviewExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot()
            ],
            providers: [
            // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
            ],
            entryComponents: [_components_send_message_dialog_send_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SendMessageDialogComponent"], _dialog_example_dialog_example_component__WEBPACK_IMPORTED_MODULE_17__["DialogOverviewExampleDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works great!\n</p>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/member-directory-sidenav/member-directory-sidenav.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n    <mat-sidenav-content>\n        <app-members-grid></app-members-grid>\n    </mat-sidenav-content>\n  </mat-sidenav-container> -->\n\n\n<!-- \n<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n                 (closed)=\"events.push('close!')\">\n      Sidenav content\n    </mat-sidenav>\n  \n    <mat-sidenav-content>\n      <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n      <p>Events:</p>\n      <div class=\"example-events\">\n        <div *ngFor=\"let e of events\">{{e}}</div>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n  \n  <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div> -->\n  "

/***/ }),

/***/ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/member-directory-sidenav/member-directory-sidenav.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555; }\n"

/***/ }),

/***/ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/member-directory-sidenav/member-directory-sidenav.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MemberDirectorySidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDirectorySidenavComponent", function() { return MemberDirectorySidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberDirectorySidenavComponent = /** @class */ (function () {
    function MemberDirectorySidenavComponent() {
        this.events = [];
        this.shouldRun = true;
    }
    MemberDirectorySidenavComponent.prototype.ngOnInit = function () {
    };
    MemberDirectorySidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-directory-sidenav',
            template: __webpack_require__(/*! ./member-directory-sidenav.component.html */ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./member-directory-sidenav.component.scss */ "./src/app/components/member-directory-sidenav/member-directory-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberDirectorySidenavComponent);
    return MemberDirectorySidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/member-directory/member-directory.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/member-directory/member-directory.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <!-- <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon> -->\n      Members\n    </ng-template>\n\n    <h1>Member Directory</h1>\n\n    <!-- <app-data-table></app-data-table> -->\n    <!-- <app-member-table></app-member-table> -->\n    <!-- <app-member-directory-sidenav></app-member-directory-sidenav> -->\n    <app-members-grid></app-members-grid>\n\n    <!-- <div *ngIf=\"(members$ | async) as members; else loadingOrError\"> -->\n    <!-- <div *ngFor=\"let member of members\">\n        {{ member.firstName }}\n      </div> -->\n\n    <!-- <table mat-table [dataSource]=\"members\">\n\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef width=\"100\"> First Name </th>\n          <td mat-cell *matCellDef=\"let member\"> {{member.firstName}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef width=\"100\"> Last Name </th>\n          <td mat-cell *matCellDef=\"let member\"> {{member.lastName}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef width=\"100\"> Email </th>\n          <td mat-cell *matCellDef=\"let member\"> {{member.email}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"photo\">\n          <th mat-header-cell *matHeaderCellDef> Photo </th>\n          <td mat-cell *matCellDef=\"let member\">\n            <img [src]=\"member.primaryPhotoUri\" width=\"100\" height=\"100\" />          \n           </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      \n    </div> -->\n\n\n    <!-- <ng-template #loadingOrError>\n      <div *ngIf=\"errorLoading$ | async; else loading\">\n        Error loading the list of users. Please try again later.\n      </div>\n      <ng-template #loading>\n        Loading users...\n      </ng-template>\n    </ng-template> -->\n\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <!-- <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon> -->\n      Groups\n    </ng-template>\n    <h1>Group Directory</h1>\n  </mat-tab>\n\n  <!-- <mat-tab>\n    <ng-template mat-tab-label>\n       <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon> \n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab> -->\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/member-directory/member-directory.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/member-directory/member-directory.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tab-icon {\n  margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/components/member-directory/member-directory.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/member-directory/member-directory.component.ts ***!
  \***************************************************************************/
/*! exports provided: MemberDirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDirectoryComponent", function() { return MemberDirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pagination.service */ "./src/app/services/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable, Subject, throwError, of } from 'rxjs';
// import { catchError, retry, map } from 'rxjs/operators';
// import { Member } from '../../models/member';
// import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
// import { HttpErrorResponse } from '@angular/common/http';
var MemberDirectoryComponent = /** @class */ (function () {
    // members$: Observable<{} | Member[]>;
    // loadingError$ = new Subject<boolean>();
    //columnsToDisplay: string[] = ['firstName', 'lastName', 'email', 'photo'];
    // dataSource = new MatTableDataSource<Member>();
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ViewChild(MatSort) sort: MatSort;
    function MemberDirectoryComponent(dataService, paginationService) {
        this.dataService = dataService;
        this.paginationService = paginationService;
    }
    MemberDirectoryComponent.prototype.ngOnInit = function () {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;   
        // this.members$ = this.dataService.getMembers().pipe(
        //   retry(3),
        //   catchError((error) => {
        //     this.dataService.handleError('error loading the list of members', error);
        //     this.loadingError$.next(true);
        //     return of();
        //   }));
    };
    MemberDirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-directory',
            template: __webpack_require__(/*! ./member-directory.component.html */ "./src/app/components/member-directory/member-directory.component.html"),
            styles: [__webpack_require__(/*! ./member-directory.component.scss */ "./src/app/components/member-directory/member-directory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            src_app_services_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]])
    ], MemberDirectoryComponent);
    return MemberDirectoryComponent;
}());



/***/ }),

/***/ "./src/app/components/member-table/member-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/member-table/member-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"(members$ | async) as members; else loadingOrError\"> -->\n\n<div class=\"members\">\n\n  <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell *matHeaderCellDef width=\"100\"> First Name </th>\n      <td mat-cell *matCellDef=\"let member\"> {{member.firstName}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell *matHeaderCellDef width=\"100\"> Last Name </th>\n      <td mat-cell *matCellDef=\"let member\"> {{member.lastName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef width=\"100\"> Email </th>\n      <td mat-cell *matCellDef=\"let member\"> {{member.email}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"photo\">\n      <th mat-header-cell *matHeaderCellDef> Photo </th>\n      <td mat-cell *matCellDef=\"let member\">\n        <img [src]=\"member.primaryPhotoUri\" width=\"100\" height=\"100\" />\n      </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"4\">\n        No Data\n      </mat-footer-cell>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></tr>\n\n   \n    <!-- <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(dataSource!=null && dataSource.length==0)}\"></mat-footer-row> -->\n\n  </table>\n\n  <mat-paginator [length]=\"\" \n    [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10, 25]\"></mat-paginator>\n\n</div>\n<!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n\n\n\n\n<!-- <ng-template #loadingOrError>\n    <div *ngIf=\"errorLoading$ | async; else loading\">\n      Error loading the list of users. Please try again later.\n    </div>\n    <ng-template #loading>\n      Loading users...\n    </ng-template>\n  </ng-template>\n\n </div>  -->"

/***/ }),

/***/ "./src/app/components/member-table/member-table.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/member-table/member-table.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/member-table/member-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/member-table/member-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: MemberTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTableComponent", function() { return MemberTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_member_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/member.datasource */ "./src/app/services/member.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberTableComponent = /** @class */ (function () {
    function MemberTableComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'photo'];
    }
    MemberTableComponent.prototype.ngOnInit = function () {
        var data = this.route.snapshot.data;
        console.info("this.route.snapshot.data", data);
        this.dataSource = new src_app_services_member_datasource__WEBPACK_IMPORTED_MODULE_5__["MemberDataSource"](this.dataService);
        //this.dataSource.loadMembers();
    };
    MemberTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loadMembersPage(); })).subscribe();
    };
    MemberTableComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row.firstName);
    };
    MemberTableComponent.prototype.loadMembersPage = function () {
        //this.dataSource.loadMembers('', 'asc',
        //this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MemberTableComponent.prototype, "paginator", void 0);
    MemberTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-table',
            template: __webpack_require__(/*! ./member-table.component.html */ "./src/app/components/member-table/member-table.component.html"),
            styles: [__webpack_require__(/*! ./member-table.component.scss */ "./src/app/components/member-table/member-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberTableComponent);
    return MemberTableComponent;
}());

// export class MemberDataSource extends DataSource<any>{
//   private membersSubject = new BehaviorSubject<Member[]>([]);
//   private loadingMembers = new BehaviorSubject<boolean>(false);
//   public loading$ = this.loadingMembers.asObservable();
//   constructor(private dataService: DataService) {
//     super();
//   }
//   connect(collectionViewer: CollectionViewer): Observable<Member[]> {
//     return this.membersSubject.asObservable();
//   }
//   disconnect(collectionViewer: CollectionViewer) {
//     this.loadingMembers.complete();
//     this.membersSubject.complete();
//   }
//   loadMembers(filter: string = '', sortDirection: string = 'asc',
//     pageIndex: number = 0, pageSize: number = 10) {
//     this.loadingMembers.next(true);
//     this.dataService.getMembers(filter, sortDirection,
//       pageIndex, pageSize).pipe(
//         catchError(() => of([])),
//         finalize(() => this.loadingMembers.next(false))
//       ).subscribe(members => this.membersSubject.next(members));
//   }
// }


/***/ }),

/***/ "./src/app/components/members-grid/members-grid.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/members-grid/members-grid.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<h2>ZMA Members</h2>\n\n   <mat-form-field>\n    <input matInput placeholder=\"Search members\" #searchInput>   \n </mat-form-field>  \n\n <div class=\"spinner-container\" *ngIf=\"loading$ | async\">\n  <mat-spinner></mat-spinner>\n</div>  \n\n  <!-- <div *ngIf=\"(members$ | async) as members\">  -->\n\n <div>\n<mat-grid-list cols=\"4\" rowHeight=\"225\" gutterSize=\"3px\">\n  <mat-grid-tile class=\"members-grid\" *ngFor=\"let member of members\">    \n   \n     <div>        \n        <img [src]=\"member.primaryPhotoUri\" width=\"125\" height=\"125\" />        \n    </div> \n       <mat-grid-tile-header>\n          <div class=\"header\"> \n            {{member.firstName}} {{member.lastName}}\n          </div>  \n      </mat-grid-tile-header>  \n\n      <mat-grid-tile-footer>\n        <div class=\"footer\">\n            <button mat-raised-button color=\"accent\" \n            (click)=\"openSendMessageDialog(member)\">Encourage {{member.firstName}}</button>\n        </div>        \n      </mat-grid-tile-footer> \n  </mat-grid-tile>\n</mat-grid-list> \n\n</div> \n\n <mat-paginator [length]=\"totalCount\" \n  [pageSize]=\"paginationService.pageSize\"\n  [pageSizeOptions]=\"paginationService.selectItemsPerPage\" \n  (page)=\"switchPage($event)\">\n</mat-paginator>  \n\n \n\n<!-- <mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"3px\">\n  <mat-grid-tile *ngFor=\"let tile of tiles\" \n  [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\n    {{tile.text}}\n     <mat-grid-tile-header>\n      <h3>Header</h3>\n      </mat-grid-tile-header> \n\n      <mat-grid-tile-footer>\n        <h3>Footer</h3>\n        </mat-grid-tile-footer> \n  </mat-grid-tile>\n</mat-grid-list>  -->"

/***/ }),

/***/ "./src/app/components/members-grid/members-grid.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/members-grid/members-grid.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".members-grid {\n  background: #DDBDF1; }\n\n.header {\n  position: absolute;\n  top: 15px;\n  left: 80px;\n  bottom: 15px; }\n\n.footer {\n  text-align: center;\n  position: absolute;\n  left: 50px; }\n"

/***/ }),

/***/ "./src/app/components/members-grid/members-grid.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/members-grid/members-grid.component.ts ***!
  \*******************************************************************/
/*! exports provided: MembersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersGridComponent", function() { return MembersGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pagination.service */ "./src/app/services/pagination.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _send_message_dialog_send_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-message-dialog/send-message-dialog.component */ "./src/app/components/send-message-dialog/send-message-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MembersGridComponent = /** @class */ (function () {
    function MembersGridComponent(dataService, paginationService, dialog) {
        this.dataService = dataService;
        this.paginationService = paginationService;
        this.dialog = dialog;
        this.membersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.totalCount = 50;
        this.counter = 1;
        //membersSubject = new BehaviorSubject<Member[]>([]);
        this.loadingMembers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading$ = this.loadingMembers.asObservable();
    }
    MembersGridComponent.prototype.ngOnInit = function () {
        //this.dataSource = new MemberDataSource(this.dataService);
        this.loadMembers();
    };
    MembersGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.paginationService.resetPageIndex();
            _this.loadMembers();
        }))
            .subscribe();
    };
    MembersGridComponent.prototype.loadMembers = function (filter, sortDirection) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        this.loadingMembers.next(true);
        filter = filter === '' ? this.searchInput.nativeElement.value : filter;
        console.info("filter: " + filter);
        //console.info("page: " + this.paginationService.page);
        //console.info("pageCount: " + this.paginationService.pageSize);
        this.dataService.getMembers(filter, sortDirection, this.paginationService.page, this.paginationService.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.loadingMembers.next(false); }))
            .subscribe(function (resp) {
            _this.members = resp.body;
            _this.totalCount = JSON.parse(resp.headers.get('X-Pagination')).totalCount;
            console.info("totalCount: " + _this.totalCount);
        });
    };
    MembersGridComponent.prototype.switchPage = function (event) {
        this.paginationService.change(event);
        this.loadMembers();
        console.info("switchPage event: " + (this.counter));
        this.counter++;
    };
    MembersGridComponent.prototype.openSendMessageDialog = function (member) {
        var _this = this;
        console.info(member.firstName + ' ' + member.lastName);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = '450px';
        //dialogConfig.height = '450px';
        dialogConfig.data = {
            memberId: member.memberId,
            firstName: member.firstName,
            lastName: member.lastName,
            primaryPhotoUri: member.primaryPhotoUri,
            title: 'Send Encouraging Message',
            message: ''
        };
        var dialogRef = this.dialog.open(_send_message_dialog_send_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SendMessageDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.sendMessage(result);
        });
    };
    MembersGridComponent.prototype.sendMessage = function (result) {
        console.info("toMemberId: " + result.memberId);
        console.info("message: " + result.message);
        this.dataService.sendMessage(result).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MembersGridComponent.prototype, "searchInput", void 0);
    MembersGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members-grid',
            template: __webpack_require__(/*! ./members-grid.component.html */ "./src/app/components/members-grid/members-grid.component.html"),
            styles: [__webpack_require__(/*! ./members-grid.component.scss */ "./src/app/components/members-grid/members-grid.component.scss")],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], MembersGridComponent);
    return MembersGridComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">   -->\n<!-- <button mat-button routerLink=\"/\">ZMA</button> -->\n<!-- </mat-toolbar>  -->\n<!-- <button mat-button routerLink=\"/messages\">Messages</button>  -->\n<!-- <span style=\"flex: 1 1 auto\"></span> -->\n<!-- <button *ngIf=\"!auth.isAuthenticated\" mat-button routerLink=\"/login\">Login</button> -->\n\n\n<mat-toolbar color=\"accent\">\n  <button mat-button routerLink=\"/\"><span class=\"nav-title\">ZMA</span></button>\n  <button mat-button routerLink=\"/members\"><span class=\"nav-menu-items\">Members</span></button>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-title {\n  font-size: 2.5em; }\n\n.nav-menu-items {\n  font-size: 1em; }\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/send-message-dialog/send-message-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/send-message-dialog/send-message-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h2 mat-dialog-title>{{ data.title }}</h2>\n\n\n<mat-dialog-content>\n <h3>To: {{ data.firstName }} {{ data.lastName }}</h3>\n  <div>\n        <img [src]=\"data.primaryPhotoUri\" width=\"100\" height=\"100\" /> \n  </div>\n    <br />\n    <mat-form-field>       \n        <input matInput [(ngModel)]=\"data.message\" type=\"text\" placeholder=\"Your Message\">      \n    </mat-form-field>\n\n  </mat-dialog-content>\n\n <mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"onCancel()\">Close</button>\n    <button class=\"mat-raised-button mat-accent\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Send Message</button>\n</mat-dialog-actions>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/send-message-dialog/send-message-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/send-message-dialog/send-message-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/send-message-dialog/send-message-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/send-message-dialog/send-message-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SendMessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageDialogComponent", function() { return SendMessageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SendMessageDialogComponent = /** @class */ (function () {
    function SendMessageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.message = '';
        this.data = data;
    }
    SendMessageDialogComponent.prototype.ngOnInit = function () {
        //   fb: FormBuilder = new FormBuilder();
        //   this.form = this.fb.group({
        //       description: [this.description, []]
        //   });
    };
    // onConfirm() {
    //     this.dialogRef.close("confirm");
    // } 
    SendMessageDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close("cancel");
    };
    SendMessageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-message-dialog',
            template: __webpack_require__(/*! ./send-message-dialog.component.html */ "./src/app/components/send-message-dialog/send-message-dialog.component.html"),
            styles: [__webpack_require__(/*! ./send-message-dialog.component.scss */ "./src/app/components/send-message-dialog/send-message-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SendMessageDialogComponent);
    return SendMessageDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog-example/dialog-example.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialog-example/dialog-example.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dialog-example works!\n</p>\n\n\n<ol>\n    <li>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n      </mat-form-field>\n    </li>\n    <li>\n      <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n    </li>\n    <li *ngIf=\"animal\">\n      You chose: <i>{{animal}}</i>\n    </li>\n  </ol>\n  "

/***/ }),

/***/ "./src/app/dialog-example/dialog-example.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialog-example/dialog-example.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog-example/dialog-example.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog-example/dialog-example.component.ts ***!
  \************************************************************/
/*! exports provided: DialogExampleComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExampleComponent", function() { return DialogExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogExampleComponent = /** @class */ (function () {
    function DialogExampleComponent(dialog) {
        this.dialog = dialog;
    }
    DialogExampleComponent.prototype.ngOnInit = function () {
    };
    DialogExampleComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
            console.log('name: ' + _this.name + ' ' + 'animal: ' + _this.animal);
        });
    };
    DialogExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-example',
            template: __webpack_require__(/*! ./dialog-example.component.html */ "./src/app/dialog-example/dialog-example.component.html"),
            styles: [__webpack_require__(/*! ./dialog-example.component.scss */ "./src/app/dialog-example/dialog-example.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogExampleComponent);
    return DialogExampleComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = {
            name: '',
            animal: '',
        };
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog.html */ "./src/app/dialog-example/dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/dialog-example/dialog.html":
/*!********************************************!*\
  !*** ./src/app/dialog-example/dialog.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.service */ "./src/app/services/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { of } from 'rxjs/observable/of';
var DataService = /** @class */ (function () {
    function DataService(http, sb, paginationService) {
        this.http = http;
        this.sb = sb;
        this.paginationService = paginationService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.BASE_URL = 'http://localhost:57544/api';
        console.info('dataservice constructor');
        // this.headers = this.headers.set('Content-Type', 'application/json');
        // this.headers = this.headers.set('Accept', 'application/json');
    }
    DataService.prototype.getMembers = function (filter, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (pageSize === void 0) { pageSize = 25; }
        console.info("getMembers filter: " + filter);
        var mergedUrl = this.BASE_URL + '/members';
        return this.http.get(mergedUrl, {
            observe: 'response',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('query', filter)
                .set('sortOrder', sortOrder)
                .set('page', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    DataService.prototype.sendMessage = function (result) {
        console.info("sendMessage: " + result.message);
        var messageData = {
            "toMemberId": result.memberId,
            "body": result.message
        };
        return this.http.post(this.BASE_URL + '/messages', messageData);
    };
    DataService.prototype.handleError = function (errorMsg, error) {
        console.error(errorMsg, error);
        this.sb.open(errorMsg, "close", { duration: 2000 });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/member.datasource.ts":
/*!***********************************************!*\
  !*** ./src/app/services/member.datasource.ts ***!
  \***********************************************/
/*! exports provided: MemberDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDataSource", function() { return MemberDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MemberDataSource = /** @class */ (function (_super) {
    __extends(MemberDataSource, _super);
    function MemberDataSource(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.membersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        _this.loadingMembers = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingMembers.asObservable();
        return _this;
    }
    MemberDataSource.prototype.connect = function (collectionViewer) {
        return this.membersSubject.asObservable();
    };
    MemberDataSource.prototype.disconnect = function (collectionViewer) {
        this.loadingMembers.complete();
        this.membersSubject.complete();
    };
    return MemberDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/services/pagination.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/pagination.service.ts ***!
  \************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.paginationModel = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__["PaginationModel"]();
    }
    Object.defineProperty(PaginationService.prototype, "page", {
        get: function () {
            return this.paginationModel.pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "pageSize", {
        get: function () {
            return this.paginationModel.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "selectItemsPerPage", {
        get: function () {
            return this.paginationModel.selectItemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.resetPageIndex = function () {
        this.paginationModel.pageIndex = 1;
    };
    PaginationService.prototype.change = function (pageEvent) {
        this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/shared/models/pagination.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/pagination.model.ts ***!
  \***************************************************/
/*! exports provided: PaginationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return PaginationModel; });
var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
        this.selectItemsPerPage = [5, 10, 25, 50, 100];
        this.pageIndex = 1;
        this.pageSize = 25;
    }
    return PaginationModel;
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

module.exports = __webpack_require__(/*! C:\Users\Public\Documents\Hello World Projects\Encourage Me\ZMA Angular SPA\ZMA-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map