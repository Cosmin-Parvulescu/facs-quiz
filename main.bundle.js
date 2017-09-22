webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parallax_js__ = __webpack_require__("../../../../parallax-js/dist/parallax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parallax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parallax_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        var header = document.getElementById('header-parallax');
        var parallaxI = new __WEBPACK_IMPORTED_MODULE_1_parallax_js___default.a(header, {
            relativeInput: true,
            hoverOnly: true
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_entry_component__ = __webpack_require__("../../../../../src/app/components/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_component__ = __webpack_require__("../../../../../src/app/components/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_exit_component__ = __webpack_require__("../../../../../src/app/components/exit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_slide_slide_question_component__ = __webpack_require__("../../../../../src/app/components/slide/slide-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_slide_slide_options_component__ = __webpack_require__("../../../../../src/app/components/slide/slide-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_slide_slide_answer_component__ = __webpack_require__("../../../../../src/app/components/slide/slide-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_question_service__ = __webpack_require__("../../../../../src/app/shared/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'hi', component: __WEBPACK_IMPORTED_MODULE_3__components_entry_component__["a" /* EntryComponent */] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_component__["a" /* QuizComponent */] },
    { path: 'bye/:score', component: __WEBPACK_IMPORTED_MODULE_5__components_exit_component__["a" /* ExitComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_entry_component__["a" /* EntryComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_exit_component__["a" /* ExitComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_slide_slide_question_component__["a" /* SlideQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_slide_slide_options_component__["a" /* SlideOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_slide_slide_answer_component__["a" /* SlideAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_question_service__["a" /* QuestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* Medium Devices, Desktops */\r\n @media only screen and (min-width : 992px) {\r\n    #slide-image-container {\r\n        margin-top: -50%;\r\n    }\r\n\r\n    #image-shadow {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        top: 90px;\r\n        left: 25px;\r\n        background: #00ffcc;\r\n        z-index: -1;\r\n    }\r\n}\r\n\r\n#slide-image-container {\r\n    position: relative;\r\n}\r\n\r\n#image {\r\n    padding: 25px;\r\n}\r\n\r\n.btn-red {\r\n    color: #0d1942;\r\n    background-color: #ef476e;\r\n\r\n    text-align: left;\r\n\r\n    border-radius: 0;\r\n    height: 7.5rem;\r\n}\r\n\r\n.btn-red span {\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n    <div class='row'>\r\n        <div class='col-lg-6 col-md-6 col-sm-12 order-sm-2 order-sm-2 order-lg-1 centered'>\r\n            <div class='row'>\r\n                <div class='col-sm-6'>\r\n                    <p class='blue' style='margin-top: 25px; margin-bottom: 25px; font-weight: bold;'>Testează-ți abilitățile de recunoaștere a microexpresiilor și află dacă ești un bun decodificator FACTS!</p>\r\n                </div>\r\n            </div>\r\n\r\n            <p class='blue'>Răspunde la întrebarea <br /> <span style='font-weight: bold;'>\"Ce emoție resimte persoana din imagine?\"</span> <br /> selectând una dintre cele 8 emoții\r\n                de bază.</p>\r\n\r\n            <div class='row' style='margin-top: 25px;'>\r\n                <div class='col-sm-8'>\r\n                    <button class='btn btn-lg btn-block btn-red' (click)='navigateToQuiz()'>Începe testul <span class=\"glyphicon glyphicon-play\"></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='col-lg-6 col-md-6 col-sm-12 col order-sm-1 order-sm-1 order-lg-2'>\r\n            <div id='slide-image-container'>\r\n                <section id='image'>\r\n                    <img src='/assets/img/test.png' width='100%' />\r\n                </section>\r\n\r\n                <button style='visibility: hidden; padding-top: 2rem;'>&nbsp;</button>\r\n\r\n                <section id='image-shadow'>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntryComponent = (function () {
    function EntryComponent(router) {
        this.router = router;
    }
    EntryComponent.prototype.navigateToQuiz = function () {
        this.router.navigate(['/quiz']);
    };
    return EntryComponent;
}());
EntryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'entry',
        template: __webpack_require__("../../../../../src/app/components/entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/entry.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], EntryComponent);

var _a;
//# sourceMappingURL=entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/exit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* Medium Devices, Desktops */\r\n @media only screen and (min-width : 992px) {\r\n    #slide-image-container {\r\n        margin-top: -50%;\r\n    }\r\n\r\n    #image-shadow {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        top: 90px;\r\n        left: 25px;\r\n        background: #00ffcc;\r\n        z-index: -1;\r\n    }\r\n}\r\n\r\n#slide-image-container {\r\n    position: relative;\r\n}\r\n\r\n#image {\r\n    padding: 25px;\r\n}\r\n\r\n.btn-red {\r\n    color: #0d1942;\r\n    background-color: #ef476e;\r\n\r\n    text-align: left;\r\n\r\n    border-radius: 0;\r\n\r\n    padding: 2.5rem 1rem;\r\n}\r\n\r\n.btn-red span {\r\n    float: right;\r\n}\r\n\r\n.btn-quiz {\r\n    border: 2px solid;\r\n    border-radius: 0;\r\n    padding: 2.5rem 1rem;\r\n    color: #0d1942;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/exit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n    <div class='row'>\r\n        <div class='col-lg-6 col-md-6 col-sm-12'>\r\n            <div class='row'>\r\n                <div class='col-sm-12'>\r\n                    <h3><b>{{ subtitle }}</b></h3>\r\n                    <p style='text-align: justify;'>{{ text }}</p>\r\n\r\n                    <p style='margin-top: 3.5rem;'>Cursul va avea loc în data de 21-22 octombrie. </p>\r\n                    <p>Ți se pare interesant? Află mai multe despre curs și modalitatea de înscriere:</p>\r\n                </div>\r\n\r\n                <div class='col-sm-12'>\r\n                    <div class='row' style='margin-top: 25px;'>\r\n                        <div class='col-sm-8'>\r\n                            <a target='_blank' href='https://www.eventbrite.com/e/curs-facs-cu-dr-igor-vitale-facial-action-coding-system-tickets-37977947062'\r\n                                class='btn btn-lg btn-block btn-red'><b>Înscrie-te la cursul F.A.C.S.</b><span class=\"glyphicon glyphicon-play\"></span></a>\r\n                        </div>\r\n\r\n                        <div class='col-sm-4'>\r\n                            <a href='/quiz' class='btn btn-default btn-quiz btn-lg btn-block'>Reia testul</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='col-lg-6 col-md-6 col-sm-12'>\r\n            <div id='slide-image-container'>\r\n                <section id='image'>\r\n                    <img [src]='imgUrl' width='100%' />\r\n                </section>\r\n\r\n                <section id='share' *ngIf='score !== 0'>\r\n                    <p style='text-align: center; padding-top: 2rem; font-size: 1.75rem;'>Împarte rezultatul cu prietenii</p>\r\n\r\n                    <div style='display: flex; flex-flow: row nowrap; justify-content: center;'>\r\n                        <a target='_blank' [href]='liSharer' style='margin: 0 15px' style='margin: 0 15px'><img src='/assets/img/Logo-LinkedIN-101px-R.png' width='45' /></a>\r\n                        <a target='_blank' [href]='fbSharer' style='margin: 0 15px'><img src='/assets/img/FB-f-Logo.png' width='45' /></a>\r\n                    </div>\r\n                </section>\r\n\r\n                <section id='image-shadow'>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/exit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExitComponent = (function () {
    function ExitComponent(route) {
        this.route = route;
    }
    ExitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.score = +params['score'];
            _this.fbSharer = 'https://www.facebook.com/sharer/sharer.php?u=facs.zivac.ro/bye/' + _this.score;
            _this.liSharer = 'https://www.linkedin.com/shareArticle?mini=true&url=facs.zivac.ro/bye/' + _this.score + '/&title=Testeaz%C4%83-%C8%9Bi%20abilit%C4%83%C8%9Bile%20de%20recunoa%C8%99tere%20a%20microexpresiilor%20%C8%99i%20afl%C4%83%20dac%C4%83%20e%C8%99ti%20un%20bun%20decodificator%20FACS!&summary=&source=';
            if (_this.score >= 10) {
                _this.title = 'EXPERT în decodificarea microexpresiilor';
                _this.subtitle = 'Felicitări! Ești un observator dibace! Ai obținut punctajul maxim în recunoașterea microexpresiilor.';
                _this.text = 'Dacă vrei să îți perfecționezi abilitățile de decodificare și să afli informații noi despre limbajul nonverbal și interpretarea microexpresiilor, te invităm să participi la cusul  de formare FACS (Facial Action Coding System) susținut de Trainerul Internațional Dr. Igor Vitale, expert în analiza comportamentală și tehnici FACS. La final vei primi o Diplomă de Participare, sub egida Zivac Group, Internațional Applied Psychology Institute, Universita Popolare Europea (UPE) și Academia Italiană di Scienze dell’Investigazione, Criminalistiche e per la Sicurezza (AIICS) în care îți vor fi recunoscute competențele.';
                _this.imgUrl = '/assets/img/results/Expert-app.png';
            }
            else if (_this.score < 10 && _this.score > 6) {
                _this.title = 'SPECIALIST în decodificarea microexpresiilor';
                _this.subtitle = 'Felicitări! Ai recunoscut majoritatea microexpresiilor!';
                _this.text = 'Dacă vrei să îți perfecționezi abilitățile de decodificare și să afli informații noi despre limbajul nonverbal și interpretarea microexpresiilor, te invităm să participi la cusul  de formare FACS (Facial Action Coding System) susținut de Trainerul Internațional Dr. Igor Vitale, expert în analiza comportamentală și tehnici FACS. La final vei primi o Diplomă de Participare, sub egida Zivac Group, Internațional Applied Psychology Institute, Universita Popolare Europea (UPE) și Academia Italiană di Scienze dell’Investigazione, Criminalistiche e per la Sicurezza (AIICS) în care îți vor fi recunoscute competențele.';
                _this.imgUrl = '/assets/img/results/Specialist-app.png';
            }
            else if (_this.score < 7 && _this.score > 3) {
                _this.title = 'Decodificator INTUITIV al microexpresiilor';
                _this.subtitle = 'Ai un ochi bun! Ai reușit să recunoști peste jumătate din emoțiile prezentate!';
                _this.text = 'Dacă vrei să îți perfecționezi abilitățile de decodificare și să afli informații noi despre limbajul nonverbal și interpretarea microexpresiilor, te invităm să participi la cusul  de formare FACS (Facial Action Coding System) susținut de Trainerul Internațional Dr. Igor Vitale, expert în analiza comportamentală și tehnici FACS. La final vei primi o Diplomă de Participare, sub egida Zivac Group, Internațional Applied Psychology Institute, Universita Popolare Europea (UPE) și Academia Italiană di Scienze dell’Investigazione, Criminalistiche e per la Sicurezza (AIICS) în care îți vor fi recunoscute competențele.';
                _this.imgUrl = '/assets/img/results/Intuitiv-app.png';
            }
            else if (_this.score < 4 && _this.score > 0) {
                _this.title = 'Decodificator ÎNCEPĂTOR al microexpresiilor';
                _this.subtitle = 'Ai recunoscut câteva emoții dar nu strică să mai exersezi!';
                _this.text = 'Dacă vrei să îți construiești baza de cunoștințe în decodificarea și interpretarea microexpresiilor, să afli despre mecanismele limbajulului nonverbal și să îți îmbunătățești abilitățile de comunicare te invităm să participi la cusul  de formare FACS (Facial Action Coding System) susținut de Trainerul Internațional Dr. Igor Vitale, expert în analiza comportamentală și tehnici FACS. La final vei primi o Diplomă de Participare, sub egida Zivac Group, Internațional Applied Psychology Institute, Universita Popolare Europea (UPE) și Academia Italiană di Scienze dell’Investigazione, Criminalistiche e per la Sicurezza (AIICS) în care îți vor fi recunoscute competențele.';
                _this.imgUrl = '/assets/img/results/Incepator-app.png';
            }
            else {
                _this.title = 'Mai încearcă!';
                _this.subtitle = 'Nu ai recunoscut nici o emoție dar poți învăța!';
                _this.text = 'Dacă vrei să îți construiești baza de cunoștințe în decodificarea și interpretarea microexpresiilor, să afli despre mecanismele limbajulului nonverbal și să îți îmbunătățești abilitățile de comunicare te invităm să participi la cusul  de formare FACS (Facial Action Coding System) susținut de Trainerul Internațional Dr. Igor Vitale, expert în analiza comportamentală și tehnici FACS. La final vei primi o Diplomă de Participare, sub egida Zivac Group, Internațional Applied Psychology Institute, Universita Popolare Europea (UPE) și Academia Italiană di Scienze dell’Investigazione, Criminalistiche e per la Sicurezza (AIICS) în care îți vor fi recunoscute competențele.';
                _this.imgUrl = '/assets/img/test.png';
            }
        });
    };
    ExitComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ExitComponent;
}());
ExitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exit',
        template: __webpack_require__("../../../../../src/app/components/exit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/exit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ExitComponent);

var _a;
//# sourceMappingURL=exit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* Medium Devices, Desktops */\r\n@media only screen and (min-width : 992px) {\r\n    #slide-image-container {\r\n        margin-top: -50%;\r\n    }\r\n\r\n    #image-shadow {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        top: 90px;\r\n        left: 25px;\r\n        background: #00ffcc;\r\n        z-index: -1;\r\n    }\r\n}\r\n\r\n#slide-image-container {\r\n    position: relative;\r\n}\r\n\r\n#image {\r\n    padding: 25px;\r\n}\r\n\r\n.nav-but {\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n\r\n    width: 100%;\r\n    text-align: right;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.nav-but span {\r\n    float: right;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.arrow {\r\n    background: url(/assets/img/arrow.png) no-repeat;\r\n\r\n    height: 1rem;\r\n    width: 3rem;\r\n\r\n    background-position: cover;\r\n    background-size: contain;\r\n    \r\n    margin-top: 5px;\r\n    margin-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <div class='row'>\r\n    <div class='col-lg-6 col-sm-12 col-lg-push-6'>\r\n      <div id='slide-image-container'>\r\n        <section id='image'>\r\n          <img [src]='currentQuestion.mainImg' width='100%' />\r\n        </section>\r\n\r\n        <button class='nav-but' *ngIf='finishedSlide' (click)=\"stepUp()\">Next slide <span class=\"arrow\"></span></button>\r\n        <button class='nav-but' *ngIf='!finishedSlide'>&nbsp;</button>\r\n\r\n        <section id='image-shadow'>\r\n        </section>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-lg-6 col-sm-12 col-lg-pull-6'>\r\n      <slide-question *ngIf='!answeredSlide' [question]='currentQuestion' [answered]='answeredSlide'></slide-question>\r\n      <slide-options *ngIf='!answeredSlide' [options]='currentQuestion.options' [correctOption]='currentQuestion.answer' (onSelectOption)='optionSelected($event)'></slide-options>\r\n      <slide-answer *ngIf='answeredSlide' [answer]='currentQuestion.answer'></slide-answer>\r\n\r\n      <hr />\r\n\r\n      <section id='features' *ngIf='answeredSlide'>\r\n        <p *ngFor='let feature of currentQuestion.features'> <b>{{ feature.code }}</b> - {{ feature.desc }}</p>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_question_service__ = __webpack_require__("../../../../../src/app/shared/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = (function () {
    function QuizComponent(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.step = 0;
        this.score = 0;
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.questions = this.questionService.getQuestions().slice(0, 10);
        this.questionService.scrambleQuestions(this.questions);
        this.currentQuestion = this.questions[this.step];
    };
    QuizComponent.prototype.stepUp = function () {
        if (this.finishedQuiz) {
            return;
        }
        if (++this.step >= this.questions.length) {
            this.finishedQuiz = true;
            this.router.navigate(['/bye', this.score]);
            return;
        }
        this.currentQuestion = this.questions[this.step];
        this.answeredSlide = false;
        this.finishedSlide = false;
    };
    QuizComponent.prototype.optionSelected = function (option) {
        var _this = this;
        if (this.answeredSlide || this.finishedQuiz) {
            return;
        }
        if (this.currentQuestion.answer.id === option.id) {
            this.score++;
        }
        setTimeout(function () {
            _this.answeredSlide = true;
            _this.finishedSlide = true;
        }, 1500);
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'quiz',
        template: __webpack_require__("../../../../../src/app/components/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/quiz.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_question_service__["a" /* QuestionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuizComponent);

var _a, _b;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emotion-heading {\r\nbackground: #00ffcc;\r\ntext-align: center;\r\npadding: 1rem;\r\n}\r\n\r\n#answer {\r\n    text-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id='answer'>\r\n  <h3 class='emotion-heading'>{{ answer.text }}</h3>\r\n  <p>{{ answer.description }}</p>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__ = __webpack_require__("../../../../../src/app/shared/entities/option.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideAnswerComponent = (function () {
    function SlideAnswerComponent() {
    }
    return SlideAnswerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__["a" /* default */]) === "function" && _a || Object)
], SlideAnswerComponent.prototype, "answer", void 0);
SlideAnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'slide-answer',
        template: __webpack_require__("../../../../../src/app/components/slide/slide-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slide/slide-answer.component.css")]
    })
], SlideAnswerComponent);

var _a;
//# sourceMappingURL=slide-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#options {\r\n    margin-top: 50px;\r\n}\r\n\r\n#options ul {\r\n    list-style-type: none;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    text-align: center;\r\n}\r\n\r\n#options ul li {\r\n    border: 2px solid;\r\n    padding: 1rem 2rem;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n\r\n    margin: 12.5px 25px;\r\n\r\n    text-align: center;\r\n\r\n    cursor: pointer;\r\n\r\n    width: 150px;\r\n\r\n    display: inline-block;\r\n}\r\n\r\n#options ul li.green {\r\n    background-color: #00ffcc;\r\n}\r\n\r\n#options ul li.red {\r\n    background-color: #ffbdb8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-options.component.html":
/***/ (function(module, exports) {

module.exports = "<section id='options'>\r\n  <ul>\r\n    <li *ngFor='let option of displayOptions' (click)=\"select(option)\" [class.green]=\"option.green\" [class.red]=\"option.red\">\r\n      {{ option.text }}\r\n    </li>\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__ = __webpack_require__("../../../../../src/app/shared/entities/option.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideOptionsComponent = (function () {
    function SlideOptionsComponent() {
        this.onSelectOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SlideOptionsComponent.prototype.ngOnInit = function () {
        this.displayOptions = this.options.map(function (o) {
            return {
                id: o.id,
                text: o.text,
                green: false,
                red: false
            };
        });
    };
    SlideOptionsComponent.prototype.select = function (option) {
        var _this = this;
        if (option.id === this.correctOption.id) {
            this.displayOptions = this.options.map(function (o) {
                if (o.id === option.id) {
                    return {
                        id: o.id,
                        text: o.text,
                        green: true,
                        red: false
                    };
                }
                return {
                    id: o.id,
                    text: o.text,
                    green: false,
                    red: false
                };
            });
        }
        else {
            this.displayOptions = this.options.map(function (o) {
                if (o.id === option.id && o.id !== _this.correctOption.id) {
                    return {
                        id: o.id,
                        text: o.text,
                        green: false,
                        red: true
                    };
                }
                else if (o.id === _this.correctOption.id) {
                    return {
                        id: o.id,
                        text: o.text,
                        green: true,
                        red: false
                    };
                }
                return {
                    id: o.id,
                    text: o.text,
                    green: false,
                    red: false
                };
            });
        }
        this.onSelectOption.emit(option);
    };
    return SlideOptionsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], SlideOptionsComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_entities_option__["a" /* default */]) === "function" && _a || Object)
], SlideOptionsComponent.prototype, "correctOption", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], SlideOptionsComponent.prototype, "onSelectOption", void 0);
SlideOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'slide-options',
        template: __webpack_require__("../../../../../src/app/components/slide/slide-options.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slide/slide-options.component.css")]
    })
], SlideOptionsComponent);

var _a, _b;
//# sourceMappingURL=slide-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#slide-question {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-question.component.html":
/***/ (function(module, exports) {

module.exports = "<section id='slide-question'>\r\n  <h3 style='margin-top: 25px;'><b>{{ question.text }}</b></h3>\r\n\r\n  <p *ngIf='!answered' style='margin-top: 25px;'>Răspunde la întrebare selectând una dintre cele 8 emoții de bază</p>\r\n  <p *ngIf='answered' style='margin-top: 25px;'>&nbsp;</p>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/slide/slide-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_question__ = __webpack_require__("../../../../../src/app/shared/entities/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideQuestionComponent = (function () {
    function SlideQuestionComponent() {
    }
    return SlideQuestionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_entities_question__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_entities_question__["a" /* default */]) === "function" && _a || Object)
], SlideQuestionComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SlideQuestionComponent.prototype, "answered", void 0);
SlideQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'slide-question',
        template: __webpack_require__("../../../../../src/app/components/slide/slide-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slide/slide-question.component.css")]
    })
], SlideQuestionComponent);

var _a;
//# sourceMappingURL=slide-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/entities/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Option = (function () {
    function Option(id, text, description) {
        this.id = id;
        this.text = text;
        this.description = description;
    }
    return Option;
}());
/* harmony default export */ __webpack_exports__["a"] = (Option);
//# sourceMappingURL=option.js.map

/***/ }),

/***/ "../../../../../src/app/shared/entities/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Question = (function () {
    function Question(text, options, answer, mainImg, features) {
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.mainImg = mainImg;
        this.features = features;
    }
    return Question;
}());
/* harmony default export */ __webpack_exports__["a"] = (Question);
//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var shuffle = function (a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
};
var OPTIONS = [
    {
        id: 1,
        text: 'dezgust',
        description: 'Dezgust este o emoție ce dezvăluie repulsie. În cazul dezgustului obiectul emoției este evaluat negativ. Evaluarea se produce imediat și este însoțită de  regulă de o repulsie fizică. De cele mai multe ori dezgustul este asociat cu lucruri necomestibile, urât misositoare, infecțioase, contaminate etc. În unele cazuri dezgustul poate fi asociat cu disprețul. Manifestarea dezgustlui se regasete în expresiile faciale prin: nasul încrețit cu zonă superioară tensionată, obrajii ridicați, sprâncene coborâte și ușor încruntate, buza superioară ridicată și gura închisă sau gura întredeschisă cu buza superioară ridicată și colțurile gurii îndreptate în jos.'
    },
    {
        id: 2,
        text: 'tristețe',
        description: 'Tristețea este o emoție de suferință. Multe persoane, circumstanțe, evenimente pot declanșa tristețea dar cel mai des aceasta survine în urma pierderilor, cum ar fi pierderea cauzată de deces, abandonul, pierderea unei oportunități etc. Emoția de tristețe de regulă poate dura câteva minute, ore, sau chiar zile. Tristețea se manifestă printr-o scădere a nivelului energiei și entuziasmului pentru activități, distracție, plăcere. Cel mai adesea tristețea se poate amesteca cu alte emoții precum mânia și frica. Manifestarea tristeții se regăsește în expresiile faciale prin: colțurile interioare ale  sprâncenelor adunate, linii verticale între sprâncene, pleoapa superioară coborâtă, colțul buzelor în jos, proeminență a buzelor.'
    },
    {
        id: 3,
        text: 'mânia / furia',
        description: 'Mânia/Furia este una dintre cele mai periculoase emoții care survine atunci când există o frustrare sau un obstacol între peroana și scopul acesteia sau ca rezultat al acțiunii persoanelor cu care interacționează, când unul dintre principiile morale a acesteia este încălcat, când există un pericol extern care declnseaza comportamentul asociat unei lupte. Expresia furiei include creșterea frecvenței cardiace, tensiunii arteriale, și a nivelului de adrenalină. Ea semnalează declanșarea unui conflict, și poate avea  rol intimidator însă  este cu atât mai periculoasă cu cât poate stârni aceiași reacție la alte persoane și conflictul poate escalada. Cel mai adesea furia se poate amesteca cu alte emoții precum tristețea și frica. Manifestarea furiei se regasete în expresiile faciale prin: sprâncene coborâte, linii verticale între sprâncene, pleoape încordate și coborâte- apertură ochilor redusă, sau deopotrivă ploapa superioară foarte ridicată o exagerare a deschiderii ochilor, buze încordate strânse sau deschise cu colțurile în jos care pot expune dinții și gingiile.'
    },
    {
        id: 4,
        text: 'dispreț',
        description: 'Disprețul este o emoție care survine ca răspuns atunci când în percepția unui individ nu sunt atinse standardele personale. Obiectul emoției, în acest caz, primește o evaluare negativă din punct de vedere moral în timp ce în raport cu acesta se realizează o auto-evaluare pozitivă. Manifestarea disprețului se regăsește în expresiile faciale prin: buze strânse sau întredeschise cu unul din colțuri ușor ridicate, un ușor zâmbet ce poate transmite ironie, în unele cazuri bărbia este ridicată sugerând superioritate.'
    },
    {
        id: 5,
        text: 'uimire',
        description: 'Uimirea este singura emoție neutră, care apare când o persoană se confruntă cu ceva neașteptat. Surpriza autentică are loc nu mai mult de o secundă, iar dacă este reprimată timpul de expunere poate fi și mai scurt. Surpriza poate fi pozitivă sau negativă atunci când se amestecă cu alte emoții. Manifestarea uimirii se regasete în expresiile faciale prin: sprâncene ridicate, linii orizontale pe frunte, gura întredeschisă, obrajii retrași, sprâncenele poat fi ușor ridicate cu colțurile interioare aduse înspre centru sau cu partea exterioară ridicată și pleoapa ușor întinsă, apertura ochilor lărgită.'
    },
    {
        id: 6,
        text: 'bucurie',
        description: 'Bucuria este o emoție pozitivă, motivațională pe care pe parcursul vieții încercam să o maximizam. În context social bucuria de multe ori este mimată/simulată deoarece este percepută ca simbol al unui comportament interpersonal respectuos, amiabil. Manifestarea bucuriei autentice se regasete în expresiile faciale prin: colțurile buzelor ridicate, gura întredeschisă dezvăluind dinții sau închisă într-un zâmbet, linie formată de la nas înspre colțurile gurii,obraj ridicați, pleoapa inferioară ridicată (formează riduri), riduri la colțurile ochilor.'
    },
    {
        id: 7,
        text: 'frică',
        description: 'Frica este o emoție cu rol important în autoconservare/supraviețuire, care apare atunci când persoana este amenințată de pericole fizice sau psihice. Reacțiile fricii sunt inconștiente și sunt legate de sistemul limbic care avertizează atunci când ne confruntăm cu situații periculoase. Manifestarea fricii se regasete în expresiile faciale prin: sprâncene tensionate, ridicate și unite înspre centru, ochii larg deschiși, ploapa superioară ridicată și cea inferioară tensionată, gura întredeschisă, colțurile gurii trase înspre lateral.'
    },
    {
        id: 8,
        text: 'neutru',
        description: ''
    },
];
var QUESTIONS = [
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 1; }),
        mainImg: '/assets/img/emotii/1-dezgust.png',
        features: [
            {
                code: 'AU10C',
                desc: 'Ridicarea buzei superioare'
            },
            {
                code: 'AU16D',
                desc: 'Buza inferioară coborâtă, mușchii depresori tensionați'
            },
            {
                code: 'AU6C',
                desc: 'Obrazul ridicat și pleoapa inferioară tensionată '
            },
            {
                code: 'AU15B',
                desc: 'Colțurile gurii coborâte'
            },
            {
                code: 'AU4B',
                desc: 'Sprâncene coborâte'
            },
            {
                code: 'AU9D',
                desc: 'Riduri în partea superioară a nasului'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 2; }),
        mainImg: '/assets/img/emotii/2-tristete.png',
        features: [
            {
                code: 'AU15B',
                desc: 'Colțurile gurii coborâte'
            },
            {
                code: 'AU17B',
                desc: 'Bărbia ridicată și tensionată'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 3; }),
        mainImg: '/assets/img/emotii/3-manie.png',
        features: [
            {
                code: 'AU4E',
                desc: 'Sprâncene coborâte'
            },
            {
                code: 'AU27E',
                desc: 'Gură întinsă'
            },
            {
                code: 'AU5D',
                desc: 'Pleoapă superioară ridicată'
            },
            {
                code: 'AU7E',
                desc: 'Pleoapă inferioară tensionată'
            },
            {
                code: 'AU29D',
                desc: 'Maxilarul scos în față'
            },
            {
                code: 'AU26D',
                desc: 'Maxilarul coborât'
            },
            {
                code: 'AU38E',
                desc: 'Nări dilatate'
            },
            {
                code: 'AU57D',
                desc: 'Capul orientat în față '
            },
            {
                code: 'AU21E',
                desc: 'Gâtul tensionat'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 3; }),
        mainImg: '/assets/img/emotii/4-manie.png',
        features: [
            {
                code: 'AU4E',
                desc: 'Sprâncene coborâte'
            },
            {
                code: 'AU27E',
                desc: 'Gură întinsă'
            },
            {
                code: 'AU5D',
                desc: 'Pleoapă superioară ridicată'
            },
            {
                code: 'AU7E',
                desc: 'Pleoapă inferioară tensionată'
            },
            {
                code: 'AU38E',
                desc: 'Nări dilatate'
            },
            {
                code: 'AU9E',
                desc: 'Riduri în partea superioară a nasului'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 4; }),
        mainImg: '/assets/img/emotii/5-dispret.png',
        features: [
            {
                code: 'AU14B',
                desc: 'Gropiță în obraz datorată mușchiului buccinator'
            },
            {
                code: 'AU12B',
                desc: 'Colțul gurii ridicat'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 3; }),
        mainImg: '/assets/img/emotii/6-manie.png',
        features: [
            {
                code: 'AU4E',
                desc: 'Sprâncene coborâte'
            },
            {
                code: 'AU24E',
                desc: 'Buze încleștate'
            },
            {
                code: 'AU18E',
                desc: 'Buze țuguiate'
            },
            {
                code: 'AU5D',
                desc: 'Pleoapa superioară ridicată'
            },
            {
                code: 'AU2E',
                desc: 'Exteriorul sprâncenei ridicat'
            },
            {
                code: 'AU57D',
                desc: 'Capul orientat in față'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 5; }),
        mainImg: '/assets/img/emotii/7-uimire.png',
        features: [
            {
                code: 'AU2B',
                desc: 'Exteriorul sprâncenii ridicat'
            },
            {
                code: 'AU5B',
                desc: 'Pleoapa superioară ridicată'
            },
            {
                code: 'AU25B',
                desc: 'Gura intredeschisă'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 2; }),
        mainImg: '/assets/img/emotii/8-tristete.png',
        features: [
            {
                code: 'AU15B',
                desc: 'Colțurile gurii coborâte'
            },
            {
                code: 'AU1B',
                desc: 'Bărbia ridicată și tensionată'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 4; }),
        mainImg: '/assets/img/emotii/9-dispret.png',
        features: [
            {
                code: 'AU12C',
                desc: 'Colțul gurii ridicat'
            },
            {
                code: 'AUM69',
                desc: 'Ochii privind direct spre persoana din față'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 6; }),
        mainImg: '/assets/img/emotii/10-bucurie.png',
        features: [
            {
                code: 'AU6B',
                desc: 'Obrazul ridicat'
            },
            {
                code: 'AU7B',
                desc: 'Pleoapa inferioară tensionată'
            },
            {
                code: 'AU12C',
                desc: 'Colțurile gurii ridicate'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 5; }),
        mainImg: '/assets/img/emotii/11-uimire.png',
        features: [
            {
                code: 'AU2B',
                desc: 'Exteriorul sprâncenei ridicat'
            },
            {
                code: 'AU5B',
                desc: 'Pleoapa superioară ridicată'
            },
            {
                code: 'AU25C',
                desc: 'Gura întredeschisă'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 5; }),
        mainImg: '/assets/img/emotii/12-uimire.png',
        features: [
            {
                code: 'AU2C',
                desc: 'Exteriorul sprâncenei ridicat'
            },
            {
                code: 'AU5C',
                desc: 'Pleoapa superioară ridicată'
            },
            {
                code: 'AU25C',
                desc: 'Gura întredeschisă'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 6; }),
        mainImg: '/assets/img/emotii/13-bucurie.png',
        features: [
            {
                code: 'AU6D',
                desc: 'Obrazul ridicat'
            },
            {
                code: 'AU7D',
                desc: 'Pleoapa inferioară tensionată'
            },
            {
                code: 'AU12D',
                desc: 'Colțurile gurii ridicate'
            },
            {
                code: 'AU27E',
                desc: 'Gura întinsă'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 1; }),
        mainImg: '/assets/img/emotii/14-dezgust.png',
        features: [
            {
                code: 'AU10C',
                desc: 'Ridicarea buzei superioare'
            },
            {
                code: 'AU9C',
                desc: 'Riduri în partea superioară a nasului'
            },
            {
                code: 'AU17C',
                desc: 'Bărbie tensionată'
            },
            {
                code: 'AU15C',
                desc: 'Colțurile gurii coborâte'
            },
            {
                code: 'AU4B',
                desc: 'Sprâncene coborâte'
            }
        ]
    },
    {
        text: 'Ce emoție resimte persoana din imagine?',
        options: OPTIONS,
        answer: OPTIONS.find(function (o) { return o.id === 7; }),
        mainImg: '/assets/img/emotii/15-frica.png',
        features: [
            {
                code: 'AU6D',
                desc: 'Obrazul ridicat'
            },
            {
                code: 'AU26B',
                desc: 'Colțurile gurii coborâte'
            },
            {
                code: 'AU1D',
                desc: 'Partea inferioară a sprâncenelor ridicată'
            },
            {
                code: 'AU5D',
                desc: 'Pleoapa superioară ridicată'
            },
            {
                code: 'AU7E',
                desc: 'Pleoapa inferioară tensionată'
            }
        ]
    }
];
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.getQuestions = function () {
        return QUESTIONS;
    };
    QuestionService.prototype.scrambleQuestions = function (questions) {
        return shuffle(questions);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], QuestionService);

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map