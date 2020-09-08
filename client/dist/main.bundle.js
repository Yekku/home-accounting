webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./system/system.module": [
		"./src/app/system/system.module.ts",
		"system.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__ = __webpack_require__("./src/app/shared/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'system', loadChildren: './system/system.module#SystemModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, {
                preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */]
            })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_guard__ = __webpack_require__("./src/app/shared/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_not_found_not_found_component__ = __webpack_require__("./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_http_service__ = __webpack_require__("./src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] }
        ] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AuthRoutingModule);

//# sourceMappingURL=auth-routing.module.js.map

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n  <div class=\"auth-container\">\n    <div class=\"card\">\n      <header class=\"auth-header\">\n        <h1 class=\"auth-title\">\n          <div class=\"logo\">\n            <span class=\"l l1\"></span>\n            <span class=\"l l2\"></span>\n            <span class=\"l l3\"></span>\n            <span class=\"l l4\"></span>\n            <span class=\"l l5\"></span>\n          </div>\n          Home bookkeeping\n        </h1>\n      </header>\n      <div class=\"auth-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__ = __webpack_require__("./src/app/shared/animations/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(router) {
        this.router = router;
        this.a = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.router.navigate(['login']);
    };
    return AuthComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@fade'),
    __metadata("design:type", Object)
], AuthComponent.prototype, "a", void 0);
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-auth',
        template: __webpack_require__("./src/app/auth/auth.component.html"),
        animations: [__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_animation__["a" /* fadeStateTrigger */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthComponent);

var _a;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("./src/app/auth/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__["a" /* AuthRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text-xs-center\">Login Page</p>\n<div\n  @fade\n  class=\"alert alert-{{message.type}}\"\n  *ngIf=\"message.text\"\n>\n  {{message.text}}\n</div>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('email').invalid && form.get('email').touched}\"\n  >\n    <label for=\"email\">Email</label>\n    <input\n      type=\"text\"\n      class=\"form-control underlined\"\n      id=\"email\"\n      placeholder=\"Enter email\"\n      formControlName=\"email\"\n    >\n    <span\n      class=\"form-help-text\"\n      *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n    >\n      <span *ngIf=\"form.get('email')['errors']['required']\">Required field! </span>\n      <span *ngIf=\"form.get('email')['errors']['email']\">Enter correct email. </span>\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('password').invalid && form.get('password').touched}\"\n  >\n    <label for=\"password\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control underlined\"\n      id=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"password\"\n    >\n    <span\n      class=\"form-help-text\"\n      *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n    >\n      <span *ngIf=\"form.get('password')['errors']['required']\">Required field. </span>\n      <span *ngIf=\"form.get('password')['errors']['minlength'] && form.get('password')['errors']['minlength']['requiredLength']\">\n        Password must be at least\n        {{ form.get('password')['errors']['minlength']['requiredLength'] }}\n        characters. Now {{ form.get('password')['errors']['minlength']['actualLength'] }}.\n      </span>\n    </span>\n  </div>\n  <div class=\"form-group\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-block btn-primary\"\n      [disabled]=\"form.invalid\"\n    >\n      Login\n    </button>\n  </div>\n  <div class=\"form-group\">\n    <p class=\"text-muted text-xs-center\">\n      No account? <a [routerLink]=\"'/registration'\">Registration!</a>\n    </p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_message_model__ = __webpack_require__("./src/app/shared/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_animations_fade_animation__ = __webpack_require__("./src/app/shared/animations/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(authService, router, route, title, meta) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.title = title;
        this.meta = meta;
        title.setTitle('Login Page');
        meta.addTags([
            { name: 'keywords', content: 'login,system,enter' },
            { name: 'description', content: 'Login page' }
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = new __WEBPACK_IMPORTED_MODULE_4__shared_models_message_model__["a" /* Message */]('danger', '');
        this.route.queryParams
            .subscribe(function (params) {
            if (params['nowCanLogin']) {
                _this.showMessage({
                    text: 'Now You can enter in system',
                    type: 'success'
                });
            }
            else if (params['accessDenied']) {
                _this.showMessage({
                    text: 'You should login first',
                    type: 'warning',
                });
            }
        });
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)])
        });
    };
    LoginComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        window.setTimeout(function () {
            _this.message.text = '';
        }, 5000);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = this.form.value;
        this.authService.login(formData)
            .subscribe(function () { return _this.router.navigate(['system', 'bill']); }, function (error) { return _this.message.text = "" + error.error.message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-login',
        template: __webpack_require__("./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("./src/app/auth/login/login.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__shared_animations_fade_animation__["a" /* fadeStateTrigger */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Meta"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Meta"]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text-xs-center\">Registration Page</p>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('email').invalid && form.get('email').touched}\"\n  >\n    <label for=\"email\">Email</label>\n    <input\n      type=\"text\"\n      class=\"form-control underlined\"\n      id=\"email\"\n      placeholder=\"Email\"\n      formControlName=\"email\"\n    >\n    <span\n      class=\"form-help-text\"\n      *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n    >\n      <span *ngIf=\"form.get('email')['errors']['required']\">Required field. </span>\n      <span *ngIf=\"form.get('email')['errors']['email']\">Enter correct email. </span>\n      <span *ngIf=\"form.get('email')['errors']['forbiddenEmail']\">Email already taken. </span>\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('password').invalid && form.get('password').touched}\"\n  >\n    <label for=\"password\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control underlined\"\n      id=\"password\"\n      placeholder=\"Password\"\n      formControlName=\"password\"\n    >\n    <span\n      class=\"form-help-text\"\n      *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n    >\n      <span *ngIf=\"form.get('password')['errors']['required']\">Required field. </span>\n      <span *ngIf=\"form.get('password')['errors']['minlength'] && form.get('password')['errors']['minlength']['requiredLength']\">\n        Password must be at least\n        {{ form.get('password')['errors']['minlength']['requiredLength'] }}\n        characters. Now {{ form.get('password')['errors']['minlength']['actualLength'] }}.\n      </span>\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('name').invalid && form.get('name').touched}\"\n  >\n    <label for=\"name\">Name</label>\n    <input\n      type=\"text\"\n      class=\"form-control underlined\"\n      id=\"name\"\n      placeholder=\"Name\"\n      formControlName=\"name\"\n    >\n    <span\n      class=\"form-help-text\"\n      *ngIf=\"form.get('name').invalid && form.get('name').touched\"\n    >\n      Required field.\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [ngClass]=\"{'has-error': form.get('agree').invalid && form.get('agree').touched}\"\n  >\n    <label for=\"agree\">\n      <input\n        class=\"checkbox\"\n        id=\"agree\"\n        type=\"checkbox\"\n        formControlName=\"agree\"\n      >\n      <span>I agree with the rules</span>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-block btn-primary\"\n      [disabled]=\"form.invalid\"\n    >\n      Sign up\n    </button>\n  </div>\n  <div class=\"form-group\">\n    <p class=\"text-muted text-xs-center\">\n      Already have account?\n      <a [routerLink]=\"'/login'\">\n        Login!\n      </a>\n    </p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__ = __webpack_require__("./src/app/shared/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = (function () {
    function RegistrationComponent(auth, router, title) {
        this.auth = auth;
        this.router = router;
        this.title = title;
        title.setTitle('Регистрация');
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)]),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'agree': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].requiredTrue])
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form.value, email = _a.email, password = _a.password, name = _a.name;
        var user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__["a" /* User */](email, password, name);
        this.auth.createNewUser(user)
            .subscribe(function () {
            _this.router.navigate(['login'], {
                queryParams: {
                    nowCanLogin: true
                }
            });
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-registration',
        template: __webpack_require__("./src/app/auth/registration/registration.component.html"),
        styles: [__webpack_require__("./src/app/auth/registration/registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "./src/app/shared/animations/fade.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeStateTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

var fadeStateTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('fade', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 0
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(500)
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
        opacity: 0
    })))
]);
//# sourceMappingURL=fade.animation.js.map

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes pace-spinner {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes pace-spinner {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.loader-animator {\n  display: block;\n  -webkit-animation: pace-spinner 400ms linear infinite;\n          animation: pace-spinner 400ms linear infinite;\n  border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.4);\n  -o-border-image: none;\n     border-image: none;\n  border-radius: 50%;\n  border-right: 2px solid rgba(0, 0, 0, 0) !important;\n  border-style: solid;\n  border-width: 2px;\n  height: 16px;\n  width: 16px;\n  margin: auto;\n  z-index: 2000; }\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-loader',
        template: "<div class=\"loader-animator\"></div>",
        styles: [__webpack_require__("./src/app/shared/components/loader/loader.component.scss")]
    })
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\n  <div class=\"text-center\">\n    <h1>404 Page not found...</h1>\n    <a [routerLink]=\"['login']\">Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ".not-found {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100vw;\n  height: 100vh; }\n  .not-found h1 {\n    color: red; }\n"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wfm-not-found',
        template: __webpack_require__("./src/app/shared/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/not-found/not-found.component.scss")]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "./src/app/shared/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(type, text) {
        this.type = type;
        this.text = text;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, name, id) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.id = id;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.token = window.localStorage.getItem('auth-token');
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isExpired = this.authService.helper.isTokenExpired(this.token);
        if (this.authService.isLoggedIn() || !isExpired) {
            return true;
        }
        else {
            this.router.navigate(['login'], {
                queryParams: {
                    accessDenied: true,
                },
            });
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("./src/app/shared/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = true;
        this.helper = new __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]();
    }
    AuthService.prototype.createNewUser = function (user) {
        return this.http.createPost('registration', user);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.createPost('login', user).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["a" /* tap */])(function (_a) {
            var token = _a.token;
            window.localStorage.setItem('auth-token', token);
            _this.token = token;
        }));
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        window.localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        var isExpired = this.helper.isTokenExpired(this.token);
        if (!isExpired) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
        return this.isAuthenticated;
    };
    AuthService.prototype.getDecodedAccessToken = function (token) {
        try {
            var helper = new __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]();
            return helper.decodeToken(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = HttpService_1 = (function () {
    function HttpService(http) {
        this.http = http;
        this.localStorage = window.localStorage;
    }
    HttpService.prototype.getUrl = function (url) {
        if (url === void 0) { url = ''; }
        return __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].getApiUrl() + url;
    };
    HttpService.prototype.createAuthenticatedHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (this.localStorage.getItem('auth-token')) {
            headers.append('Authorization', this.localStorage.getItem('auth-token'));
        }
        return headers;
    };
    HttpService.prototype.createHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return headers;
    };
    HttpService.prototype.createAuthenticatedRequest = function (url, options) {
        options.headers.append('Content-Type', 'application/json');
        if (this.localStorage.getItem('auth-token')) {
            options.headers.append('Authorization', this.localStorage.getItem('auth-token'));
        }
        return this.http
            .request(this.getUrl(url), options)
            .map(function (response) {
            HttpService_1.requestHandle.next(response);
            return response.json();
        })
            .catch(this.errorHandler);
    };
    HttpService.prototype.get = function (url) {
        var headers = this.createHeaders();
        return this.http
            .get(url, {
            headers: headers,
        })
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    HttpService.prototype.createPost = function (url, body) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: 'post',
            body: JSON.stringify(body),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](),
        });
        return this.createAuthenticatedRequest(url, options);
    };
    HttpService.prototype.createPut = function (url, body) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: 'put',
            body: JSON.stringify(body),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](),
        });
        return this.createAuthenticatedRequest(url, options);
    };
    HttpService.prototype.createGet = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: 'get',
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](),
        });
        return this.createAuthenticatedRequest(url, options);
    };
    HttpService.prototype.createGetQuery = function (url, params) {
        var queryParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        if (params) {
            // tslint:disable-next-line:forin
            for (var key in params) {
                queryParams.set(key, params[key]);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: 'get',
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](),
            search: queryParams,
        });
        options.headers.append('Cache-Control', 'no-cache');
        options.headers.append('Pragma', 'no-cache');
        return this.createAuthenticatedRequest(url, options);
    };
    HttpService.prototype.createDelete = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: 'delete',
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](),
        });
        return this.createAuthenticatedRequest(url, options);
    };
    HttpService.prototype.errorHandler = function (error) {
        console.log(error);
        HttpService_1.requestHandle.next(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return HttpService;
}());
HttpService.requestHandle = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
HttpService = HttpService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var HttpService_1, _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_component__ = __webpack_require__("./src/app/shared/components/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_loader_loader_component__["a" /* LoaderComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_component__["a" /* LoaderComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    Config.getApiUrl = function () {
        var environment = window.location.host;
        var endPoint;
        switch (environment) {
            case 'localhost:4200':
                endPoint = 'http://localhost:5001/';
                break;
            default:
                endPoint = '/';
                break;
        }
        return endPoint;
    };
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map