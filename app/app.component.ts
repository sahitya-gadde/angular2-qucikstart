import { Component } from '@angular/core';
import { HeaderComponent }  from './common/header.comp';
import { FooterComponent }  from './common/footer.comp';
import { MainComponent }  from './common/main.comp';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <nw-header> </nw-header>
    <main>   </main>
    <nw-footer> </nw-footer>
   </div>
  `,
})


export class AppComponent  { 
body = 'Body here';  
 }
