import { Component } from '@angular/core';

@Component({
  selector: 'main-content',
  template: `
 
  {{maincontent}}
   <router-outlet></router-outlet>

  `
})
export class MainContentComponent { 
 maincontent = 'MainContent here';   
}