"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavComponent = (function () {
    function NavComponent() {
        this.nav = 'Progress bar';
        this.navLinks = [
            { id: 0, name: "START", targetPage: ['START'] },
            { id: 1, name: "GetQuote", targetPage: ['/getQuote'] },
            { id: 2, name: "CustBasicInfo", targetPage: ['/customerBasicInfo'] },
            { id: 3, name: "SelectProdcut", targetPage: ['/productSelect'] },
            { id: 4, name: "END", targetPage: ['END'] }
        ];
        this.currPage = this.navLinks[1];
    }
    NavComponent.prototype.gotTonextPage = function () {
        console.log("Inside Next Page");
        this.currPage = this.navLinks[this.currPage.id + 1];
    };
    NavComponent.prototype.gotToPrevPage = function () {
        console.log("Inside Prev Page");
        this.currPage = this.navLinks[this.currPage.id - 1];
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav',
            styleUrls: ['main-nav.component.css'],
            template: "\n <div class=\"center-block\">\n\n <span *ngFor=\"let link of navLinks\">\n   <a  *ngIf=\"currPage.id-1 === link.id && link.id != 0\"  \n   [routerLink]=\"link.targetPage\" (click)=\"gotToPrevPage()\">\n     <i class=\"glyphicon glyphicon-chevron-left\"></i> \n   </a>\n  </span>\n\n  <a  *ngIf=\"currPage.id-1 === 0\"  disabled=\"true\" >\n     <i class=\"glyphicon glyphicon-chevron-left\"></i> \n  </a>\n \n\n  <div class=\"pagination\">\n   <ul class=\"pager\">\n     <li *ngFor=\"let navLink of navLinks\"  >\n     <a *ngIf=\"navLink.name != 'END' && navLink.name != 'START' \" \n     [ngClass]=\"{active: navLink.id === currPage.id}\">{{navLink.id}}</a></li>\n   </ul>\n </div>\n\n \n  <span *ngFor=\"let link of navLinks\">\n   <a  *ngIf=\"currPage.id+1 === link.id &&  link.id != (navLinks.length-1)\"  \n   [routerLink]=\"link.targetPage\" (click)=\"gotTonextPage()\">\n     <i class=\"glyphicon glyphicon-chevron-right\"></i> \n   </a>\n  </span>\n \n <a  *ngIf=\"currPage.id+1 === (navLinks.length-1)\"  disabled=\"true\" >\n     <i class=\"glyphicon glyphicon-chevron-right\"></i> \n  </a>\n\n\n </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=main.nav.comp.js.map