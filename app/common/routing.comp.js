"use strict";
var router_1 = require('@angular/router');
var getquote_comp_1 = require('../quote/getquote.comp');
var customer_basic_info_comp_1 = require('../customer/customer-basic-info.comp');
var product_select_comp_1 = require('../product/product-select.comp');
var routes = [
    { path: '', component: getquote_comp_1.GetQouteComponent },
    { path: 'getQuote', component: getquote_comp_1.GetQouteComponent },
    { path: 'customerBasicInfo', component: customer_basic_info_comp_1.CustmrBasicInfoComponent },
    { path: 'productSelect', component: product_select_comp_1.ProdcutSelectComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routing.comp.js.map