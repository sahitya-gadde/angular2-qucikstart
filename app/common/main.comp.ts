import { Component } from '@angular/core';
import { NavComponent }  from './main.nav.comp';
import { MainContentComponent }  from './main.content.comp';


@Component({
  selector: 'main',
  template: `
   <main-content> </main-content>
   <nav> </nav>
   `
})
export class MainComponent { 
main = 'Main Content Goes Here';   
}
 