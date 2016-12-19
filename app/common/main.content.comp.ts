import { Component } from '@angular/core';

@Component({
  selector: 'main-content',
  template: `
     <div class="productContent">
     <router-outlet></router-outlet>
     </div>
  `
})
export class MainContentComponent { 
 maincontent = 'MainContent here';   
}