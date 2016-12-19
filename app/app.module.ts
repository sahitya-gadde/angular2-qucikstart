import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './common/header.comp';
import { FooterComponent }  from './common/footer.comp';
import { MainComponent }  from './common/main.comp';
import { NavComponent }  from './common/main.nav.comp';
import { MainContentComponent }  from './common/main.content.comp';
import { GetQouteComponent }  from './quote/getquote.comp';
import { CustmrBasicInfoComponent }  from './customer/customer-basic-info.comp';
import {routing} from './common/routing.comp';
import {ProdcutSelectComponent} from './product/product-select.comp';

@NgModule({
  imports:      [ BrowserModule,NgbModule.forRoot(),routing ],
  declarations: [ AppComponent,HeaderComponent,FooterComponent,MainComponent,NavComponent,
  MainContentComponent,GetQouteComponent,CustmrBasicInfoComponent,ProdcutSelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
