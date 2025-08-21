(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-todo-list></app-todo-list>\r\n<img class=\"hand-animation\" src=\"assets/hand.gif\" alt=\"Main qui écrit\">\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todo-container\">\r\n  <h1 class=\"title\">📝 TodoList</h1>\r\n\r\n  <!-- 🔍 Barre de recherche -->\r\n  <input\r\n    type=\"text\"\r\n    [(ngModel)]=\"searchTerm\"\r\n    placeholder=\"Rechercher une tâche...\"\r\n    class=\"search-input\"\r\n  >\r\n\r\n  <!-- 🎯 Filtre -->\r\n  <select [(ngModel)]=\"filter\" class=\"filter-select\">\r\n    <option value=\"all\">Toutes</option>\r\n    <option value=\"completed\">Terminées</option>\r\n    <option value=\"pending\">À venir</option>\r\n    <option value=\"overdue\">En retard</option>\r\n  </select>\r\n\r\n  <!-- Formulaire ajout -->\r\n  <div class=\"input-container\">\r\n    <input\r\n      [(ngModel)]=\"newTodo.title\"\r\n      (keyup.enter)=\"addTodo()\"\r\n      placeholder=\"Nouvelle tâche...\"\r\n      class=\"task-input\"\r\n    >\r\n\r\n    <input\r\n      type=\"date\"\r\n      [(ngModel)]=\"newTodo.deadline\"\r\n      class=\"date-input\"\r\n    >\r\n\r\n    <select [(ngModel)]=\"newTodo.priority\" class=\"priority-select\">\r\n      <option value=\"low\">Faible</option>\r\n      <option value=\"medium\">Moyenne</option>\r\n      <option value=\"high\">Haute</option>\r\n    </select>\r\n\r\n    <button (click)=\"addTodo()\" class=\"add-btn\">\r\n      ➕ Ajouter\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Liste -->\r\n  <ul class=\"task-list\">\r\n    <li\r\n      *ngFor=\"let todo of getFilteredTodos()\"\r\n      [class.completed]=\"todo.completed\"\r\n      [ngClass]=\"{\r\n        'priority-low': todo.priority === 'low',\r\n        'priority-medium': todo.priority === 'medium',\r\n        'priority-high': todo.priority === 'high',\r\n        'deadline-warning': isDeadlineToday(todo.deadline),\r\n        'deadline-overdue': isDeadlineOverdue(todo.deadline)\r\n      }\"\r\n    >\r\n      <label>\r\n        <input\r\n          type=\"checkbox\"\r\n          [(ngModel)]=\"todo.completed\"\r\n          (change)=\"saveTodos()\"\r\n          class=\"checkbox\"\r\n        >\r\n        <span>{{ todo.title }}</span>\r\n        <small *ngIf=\"todo.deadline\">\r\n          📅 {{ todo.deadline | date:'dd/MM/yyyy' }}\r\n        </small>\r\n      </label>\r\n      <button (click)=\"deleteTodo(todo.id)\" class=\"delete-btn\">\r\n        🗑 Supprimer\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\r\n  --primary: #ff758c;  /* Rose vif */\r\n  --secondary: #ff7eb3; /* Rose moyen */\r\n  --danger: #ff4d6d;   /* Rose foncé */\r\n  --light-pink: #ffccd5; /* Rose très clair */\r\n  --bg-gradient-start: #fff0f3; /* Début dégradé */\r\n  --bg-gradient-end: #ffccd5;   /* Fin dégradé */\r\n}\r\n\r\n/* Reset de base */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Segoe UI', sans-serif;\r\n}\r\n\r\n:host {\r\n  display: block;\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding: 20px;\r\n}\r\n\r\n/* Bulles animées roses */\r\n\r\n:host::before,\r\n:host::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  opacity: 0.15;\r\n  -webkit-animation: float 10s infinite ease-in-out alternate;\r\n          animation: float 10s infinite ease-in-out alternate;\r\n  background: var(--secondary);\r\n}\r\n\r\n.container {\r\n  max-width: 600px;\r\n  margin: 2rem auto;\r\n  padding: 2rem;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border-radius: 15px;\r\n  box-shadow: 0 5px 20px rgba(255, 117, 140, 0.2);\r\n  position: relative;\r\n  z-index: 1;\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n}\r\n\r\n.title {\r\n  color: var(--primary);\r\n  text-align: center;\r\n  margin-bottom: 1.5rem;\r\n  font-size: 2.2rem;\r\n  text-shadow: 0 2px 4px rgba(255, 117, 140, 0.2);\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  padding: 12px;\r\n  border: 2px solid var(--light-pink);\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  transition: all 0.3s;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.task-input:focus {\r\n  border-color: var(--primary);\r\n  outline: none;\r\n  box-shadow: 0 0 0 3px rgba(255, 117, 140, 0.3);\r\n}\r\n\r\n.add-btn {\r\n  background: var(--primary);\r\n  color: white;\r\n  border: none;\r\n  padding: 0 1.5rem;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  font-size: 1rem;\r\n  box-shadow: 0 2px 5px rgba(255, 117, 140, 0.4);\r\n}\r\n\r\n.add-btn:hover {\r\n  background: var(--danger);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.task-list {\r\n  list-style: none;\r\n}\r\n\r\n.task-list li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 12px;\r\n  margin-bottom: 10px;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  border-radius: 10px;\r\n  transition: all 0.3s;\r\n  border-left: 4px solid var(--primary);\r\n}\r\n\r\n.task-list li:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 5px 12px rgba(255, 126, 179, 0.2);\r\n  background: white;\r\n}\r\n\r\n.completed span {\r\n  text-decoration: line-through;\r\n  color: #c9184a;\r\n  opacity: 0.7;\r\n}\r\n\r\n.delete-btn {\r\n  background: none;\r\n  border: none;\r\n  color: var(--danger);\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  padding: 5px;\r\n  margin-left: 10px;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.delete-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.hand-animation {\r\n  position: fixed;\r\n  bottom: 20px;   /* Distance depuis le bas */\r\n  right: 20px;    /* Distance depuis la droite */\r\n  width: 200px;   /* Taille réduite */\r\n  z-index: 100;\r\n  opacity: 0.9;\r\n  pointer-events: none;\r\n\r\n  -webkit-animation: none;\r\n\r\n          animation: none; /* Pas de flottement */\r\n}\r\n\r\n@-webkit-keyframes float {\r\n  0%, 100% { transform: translateY(0); }\r\n  50% { transform: translateY(-15px); }\r\n}\r\n\r\n@keyframes float {\r\n  0%, 100% { transform: translateY(0); }\r\n  50% { transform: translateY(-15px); }\r\n}\r\n\r\n/* Bulles animées */\r\n\r\n:host::before {\r\n  width: 250px;\r\n  height: 250px;\r\n  background: var(--secondary);\r\n  top: -50px;\r\n  left: -50px;\r\n}\r\n\r\n:host::after {\r\n  width: 350px;\r\n  height: 350px;\r\n  background: var(--primary);\r\n  bottom: -100px;\r\n  right: -100px;\r\n  opacity: 0.1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsR0FBRyxhQUFhO0VBQ2xDLG9CQUFvQixFQUFFLGVBQWU7RUFDckMsaUJBQWlCLElBQUksZUFBZTtFQUNwQyxxQkFBcUIsRUFBRSxvQkFBb0I7RUFDM0MsNEJBQTRCLEVBQUUsa0JBQWtCO0VBQ2hELDBCQUEwQixJQUFJLGdCQUFnQjtBQUNoRDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxRkFBcUY7RUFDckYsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUEseUJBQXlCOztBQUN6Qjs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkRBQW1EO1VBQW5ELG1EQUFtRDtFQUNuRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLCtDQUErQztFQUMvQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWSxJQUFJLDJCQUEyQjtFQUMzQyxXQUFXLEtBQUssOEJBQThCO0VBQzlDLFlBQVksSUFBSSxtQkFBbUI7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7O0VBRXBCLHVCQUFlOztVQUFmLGVBQWUsRUFBRSxzQkFBc0I7QUFDekM7O0FBR0E7RUFDRSxXQUFXLHdCQUF3QixFQUFFO0VBQ3JDLE1BQU0sNEJBQTRCLEVBQUU7QUFDdEM7O0FBSEE7RUFDRSxXQUFXLHdCQUF3QixFQUFFO0VBQ3JDLE1BQU0sNEJBQTRCLEVBQUU7QUFDdEM7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tcHJpbWFyeTogI2ZmNzU4YzsgIC8qIFJvc2UgdmlmICovXHJcbiAgLS1zZWNvbmRhcnk6ICNmZjdlYjM7IC8qIFJvc2UgbW95ZW4gKi9cclxuICAtLWRhbmdlcjogI2ZmNGQ2ZDsgICAvKiBSb3NlIGZvbmPDqSAqL1xyXG4gIC0tbGlnaHQtcGluazogI2ZmY2NkNTsgLyogUm9zZSB0csOocyBjbGFpciAqL1xyXG4gIC0tYmctZ3JhZGllbnQtc3RhcnQ6ICNmZmYwZjM7IC8qIETDqWJ1dCBkw6lncmFkw6kgKi9cclxuICAtLWJnLWdyYWRpZW50LWVuZDogI2ZmY2NkNTsgICAvKiBGaW4gZMOpZ3JhZMOpICovXHJcbn1cclxuXHJcbi8qIFJlc2V0IGRlIGJhc2UgKi9cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJnLWdyYWRpZW50LXN0YXJ0KSwgdmFyKC0tYmctZ3JhZGllbnQtZW5kKSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogQnVsbGVzIGFuaW3DqWVzIHJvc2VzICovXHJcbjpob3N0OjpiZWZvcmUsXHJcbjpob3N0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9wYWNpdHk6IDAuMTU7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMjU1LCAxMTcsIDE0MCwgMC4yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMjU1LCAxMTcsIDE0MCwgMC4yKTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnRhc2staW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1waW5rKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLnRhc2staW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDExNywgMTQwLCAwLjMpO1xyXG59XHJcblxyXG4uYWRkLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgyNTUsIDExNywgMTQwLCAwLjQpO1xyXG59XHJcblxyXG4uYWRkLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrLWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50YXNrLWxpc3QgbGk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMnB4IHJnYmEoMjU1LCAxMjYsIDE3OSwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbXBsZXRlZCBzcGFuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjogI2M5MTg0YTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmRlbGV0ZS1idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmhhbmQtYW5pbWF0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4OyAgIC8qIERpc3RhbmNlIGRlcHVpcyBsZSBiYXMgKi9cclxuICByaWdodDogMjBweDsgICAgLyogRGlzdGFuY2UgZGVwdWlzIGxhIGRyb2l0ZSAqL1xyXG4gIHdpZHRoOiAyMDBweDsgICAvKiBUYWlsbGUgcsOpZHVpdGUgKi9cclxuICB6LWluZGV4OiAxMDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICBhbmltYXRpb246IG5vbmU7IC8qIFBhcyBkZSBmbG90dGVtZW50ICovXHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7IH1cclxufVxyXG5cclxuLyogQnVsbGVzIGFuaW3DqWVzICovXHJcbjpob3N0OjpiZWZvcmUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgdG9wOiAtNTBweDtcclxuICBsZWZ0OiAtNTBweDtcclxufVxyXG5cclxuOmhvc3Q6OmFmdGVyIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3R0b206IC0xMDBweDtcclxuICByaWdodDogLTEwMHB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.newTodo = '';
        this.todos = [];
    }
    // Ajoute une tâche
    addTodo() {
        if (this.newTodo.trim()) {
            this.todos.push({
                id: Date.now(),
                title: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        }
    }
    // Supprime une tâche
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/todo-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]
        ],
        imports: [
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/todo-list.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo-list.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-container {\r\n  max-width: 500px;\r\n  margin: 40px auto;\r\n  padding: 20px;\r\n  border-radius: 15px;\r\n  background: linear-gradient(135deg, #f3e5f5, #ce93d8);\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);\r\n  font-family: Arial, sans-serif;\r\n  -webkit-animation: fadeIn 0.6s ease-in-out;\r\n          animation: fadeIn 0.6s ease-in-out;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  color: #4a148c;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  border: 1px solid #4a148c;\r\n  transition: 0.3s;\r\n}\r\n\r\n.task-input:focus {\r\n  border-color: #7b1fa2;\r\n  box-shadow: 0 0 5px #7b1fa2;\r\n}\r\n\r\n.add-btn {\r\n  background-color: #7b1fa2;\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: transform 0.15s ease, background-color 0.3s;\r\n}\r\n\r\n.add-btn:hover {\r\n  background-color: #4a148c;\r\n}\r\n\r\n.add-btn:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.task-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 20px;\r\n}\r\n\r\n.task-list li {\r\n  background: white;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  -webkit-animation: slideIn 0.4s ease forwards;\r\n          animation: slideIn 0.4s ease forwards;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.task-list li:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.task-list li.completed span {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: #e53935;\r\n  color: white;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  transition: transform 0.15s ease, background-color 0.3s;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: #b71c1c;\r\n}\r\n\r\n.delete-btn:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* Animations */\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from { opacity: 0; transform: translateY(-15px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; transform: translateY(-15px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@-webkit-keyframes slideIn {\r\n  from { opacity: 0; transform: translateX(-20px); }\r\n  to { opacity: 1; transform: translateX(0); }\r\n}\r\n\r\n@keyframes slideIn {\r\n  from { opacity: 0; transform: translateX(-20px); }\r\n  to { opacity: 1; transform: translateX(0); }\r\n}\r\n\r\n.priority-low {\r\n  border-left: 5px solid green;\r\n}\r\n\r\n.priority-medium {\r\n  border-left: 5px solid orange;\r\n}\r\n\r\n.priority-high {\r\n  border-left: 5px solid red;\r\n}\r\n\r\n.deadline-warning {\r\n  background-color: #fff3cd; /* jaune pâle */\r\n}\r\n\r\n.deadline-overdue {\r\n  background-color: #f8d7da; /* rouge clair */\r\n}\r\n\r\n.multiline-snackbar {\r\n  white-space: pre-line;\r\n  max-height: 500px;\r\n  overflow-y: auto;\r\n}\r\n\r\n// Ajoutez ce style global dans styles.css\r\n\r\n.mat-snack-bar-container {\r\n  position: absolute !important;\r\n  top: 20px !important;\r\n  right: 20px !important;\r\n  z-index: 1000 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELHlDQUF5QztFQUN6Qyw4QkFBOEI7RUFDOUIsMENBQWtDO1VBQWxDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7RUFDakQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBSEE7RUFDRSxPQUFPLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtFQUNqRCxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUM3Qzs7QUFFQTtFQUNFLE9BQU8sVUFBVSxFQUFFLDRCQUE0QixFQUFFO0VBQ2pELEtBQUssVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQzdDOztBQUhBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7RUFDakQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSxlQUFlO0FBQzVDOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsZ0JBQWdCO0FBQzdDOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjNlNWY1LCAjY2U5M2Q4KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzRhMTQ4YztcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi50YXNrLWlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YTE0OGM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnRhc2staW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzdiMWZhMjtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3YjFmYTI7XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmFkZC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTE0OGM7XHJcbn1cclxuXHJcbi5hZGQtYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRhc2stbGlzdCBsaSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjRzIGVhc2UgZm9yd2FyZHM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi50YXNrLWxpc3QgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi50YXNrLWxpc3QgbGkuY29tcGxldGVkIHNwYW4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmRlbGV0ZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzFjMWM7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG59XHJcbi5wcmlvcml0eS1sb3cge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxuLnByaW9yaXR5LW1lZGl1bSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuLnByaW9yaXR5LWhpZ2gge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcbi5kZWFkbGluZS13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkOyAvKiBqYXVuZSBww6JsZSAqL1xyXG59XHJcblxyXG4uZGVhZGxpbmUtb3ZlcmR1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTsgLyogcm91Z2UgY2xhaXIgKi9cclxufVxyXG4ubXVsdGlsaW5lLXNuYWNrYmFyIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4vLyBBam91dGV6IGNlIHN0eWxlIGdsb2JhbCBkYW5zIHN0eWxlcy5jc3NcclxuXHJcbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/todo-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo-list.component.ts ***!
  \****************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "./src/app/todo.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let TodoListComponent = class TodoListComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.todos = [];
        this.newTodo = new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
        this.searchTerm = '';
        this.filter = 'all';
        this.alertSound = new Audio('assets/sounds/bip.mp3');
        this.alertsKey = 'todoAlerts';
        this.alertsMap = {};
    }
    ngOnInit() {
        // 1. Charge les tâches existantes
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            this.todos = JSON.parse(savedTodos).map(todo => (Object.assign({}, todo, { 
                // Force le reconvertissement des dates strings en objets Date
                deadline: todo.deadline ? new Date(todo.deadline) : null })));
            this.sortTodos();
        }
        // 2. Charge l'historique des alertes
        const savedAlerts = localStorage.getItem(this.alertsKey);
        this.alertsMap = savedAlerts ? JSON.parse(savedAlerts) : {};
        // 3. Déclenchement IMMÉDIAT avec vérification forcée
        setTimeout(() => {
            console.log('Tâches chargées :', this.todos);
            this.checkDeadlines(true); // true = mode forcé
        }, 300);
    }
    ngOnDestroy() {
        if (this.deadlineCheckInterval) {
            clearInterval(this.deadlineCheckInterval);
        }
    }
    saveTodos() {
        this.sortTodos();
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    addTodo() {
        if (this.newTodo.title.trim() !== '') {
            this.newTodo.id = this.todos.length > 0
                ? Math.max(...this.todos.map(t => t.id)) + 1
                : 1;
            this.todos.push(Object.assign({}, this.newTodo));
            this.newTodo = new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"]();
            this.saveTodos();
            this.playAlert(); // petit bip quand on ajoute
        }
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
    }
    toggleComplete(todo) {
        todo.completed = !todo.completed;
        this.saveTodos();
    }
    sortTodos() {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        this.todos.sort((a, b) => {
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            if (a.deadline && b.deadline) {
                return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
            }
            if (a.deadline && !b.deadline)
                return -1;
            if (!a.deadline && b.deadline)
                return 1;
            return 0;
        });
    }
    getFilteredTodos() {
        return this.todos.filter(todo => {
            const matchesSearch = todo.title.toLowerCase().includes(this.searchTerm.toLowerCase());
            if (this.filter === 'completed') {
                return matchesSearch && todo.completed;
            }
            if (this.filter === 'pending') {
                return matchesSearch && !todo.completed && !this.isDeadlineOverdue(todo.deadline);
            }
            if (this.filter === 'overdue') {
                return matchesSearch && !todo.completed && this.isDeadlineOverdue(todo.deadline);
            }
            return matchesSearch;
        });
    }
    isDeadlineToday(deadline) {
        if (!deadline)
            return false;
        const today = new Date();
        const date = new Date(deadline);
        return date.toDateString() === today.toDateString();
    }
    isDeadlineOverdue(deadline) {
        if (!deadline)
            return false;
        const today = new Date();
        const date = new Date(deadline);
        return date < today && !this.isDeadlineToday(deadline);
    }
    isDeadlineTomorrow(deadline) {
        if (!deadline)
            return false;
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const date = new Date(deadline);
        return date.toDateString() === tomorrow.toDateString();
    }
    // 🔔 Vérifie les deadlines et notifie
    checkDeadlines(forceCheck = false) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayISO = today.toISOString().slice(0, 10);
        const messages = [];
        // Réinitialisation quotidienne des alertes
        if (forceCheck || localStorage.getItem('lastCheckDate') !== todayISO) {
            localStorage.setItem('lastCheckDate', todayISO);
            this.alertsMap = {}; // Reset des alertes chaque jour
        }
        this.todos.forEach(todo => {
            if (todo.completed || !todo.deadline)
                return;
            const deadlineDate = new Date(todo.deadline);
            deadlineDate.setHours(0, 0, 0, 0);
            const isToday = deadlineDate.getTime() === today.getTime();
            const isTomorrow = new Date(today).setDate(today.getDate() + 1) === deadlineDate.getTime();
            const isOverdue = deadlineDate < today && !isToday;
            if (isToday || isTomorrow || isOverdue) {
                const alertKey = `${todo.id}_${deadlineDate.toISOString().slice(0, 10)}`;
                if (forceCheck || !this.alertsMap[alertKey]) {
                    if (isToday)
                        messages.push(`🚨 "${todo.title}" - À faire AUJOURD'HUI`);
                    else if (isTomorrow)
                        messages.push(`⚠️ "${todo.title}" - Pour DEMAIN`);
                    else
                        messages.push(`❌ "${todo.title}" - EN RETARD depuis ${deadlineDate.toLocaleDateString()}`);
                    this.alertsMap[alertKey] = true;
                }
            }
        });
        if (messages.length > 0) {
            this.snackBar.open(messages.join('\n\n'), 'OK', {
                duration: 10000,
                panelClass: ['multiline-snackbar'],
                verticalPosition: 'top'
            });
            this.playAlert();
            localStorage.setItem(this.alertsKey, JSON.stringify(this.alertsMap));
        }
    }
    playAlert() {
        this.alertSound.play().catch(err => console.log('Impossible de jouer le son :', err));
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-todo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list.component.css")).default]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/todo.model.ts":
/*!*******************************!*\
  !*** ./src/app/todo.model.ts ***!
  \*******************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// todo.model.ts
class Todo {
    constructor(id = 0, title = '', completed = false, deadline = '', // Format YYYY-MM-DD
    priority = 'low' // Priorité
    ) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.deadline = deadline;
        this.priority = priority;
    }
}


/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    getTodos() {
        return this.http.get(this.baseUrl + '/api/todos/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createTodo(todoData) {
        return this.http.post(this.baseUrl + '/api/todos/', todoData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateTodo(todoData) {
        return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteTodo(id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TodoService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\OneDrive\Bureau\todo-app-spring-boot-angular\angular-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);