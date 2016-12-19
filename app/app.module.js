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
var platform_browser_1 = require('@angular/platform-browser');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var header_comp_1 = require('./common/header.comp');
var footer_comp_1 = require('./common/footer.comp');
var main_comp_1 = require('./common/main.comp');
var main_nav_comp_1 = require('./common/main.nav.comp');
var main_content_comp_1 = require('./common/main.content.comp');
var getquote_comp_1 = require('./quote/getquote.comp');
var customer_basic_info_comp_1 = require('./customer/customer-basic-info.comp');
var routing_comp_1 = require('./common/routing.comp');
var product_select_comp_1 = require('./product/product-select.comp');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule.forRoot(), routing_comp_1.routing],
            declarations: [app_component_1.AppComponent, header_comp_1.HeaderComponent, footer_comp_1.FooterComponent, main_comp_1.MainComponent, main_nav_comp_1.NavComponent,
                main_content_comp_1.MainContentComponent, getquote_comp_1.GetQouteComponent, customer_basic_info_comp_1.CustmrBasicInfoComponent, product_select_comp_1.ProdcutSelectComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map