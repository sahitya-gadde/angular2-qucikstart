import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetQouteComponent }  from '../quote/getquote.comp';
import { CustmrBasicInfoComponent }  from '../customer/customer-basic-info.comp';
import { ProdcutSelectComponent }  from '../product/product-select.comp';

const routes: Routes = [
  { path: '',   component: GetQouteComponent},
  { path: 'getQuote',  component: GetQouteComponent },
  { path: 'customerBasicInfo',  component: CustmrBasicInfoComponent },
  { path: 'productSelect',  component: ProdcutSelectComponent }
];


export const routing: ModuleWithProviders=RouterModule.forRoot(routes);