import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav',
  styleUrls:  ['main-nav.component.css'],
  templateUrl: 'main.nav.comp.html'
  })

export class NavComponent { 
 nav = 'Progress bar';  
 navLinks: NavLink[];
 currPage:NavLink;

 constructor(){
   this.navLinks=[
  {id:0, name:"START",  targetPage:['START']},
  {id:1, name:"GetQuote",  targetPage:['/getQuote']},
  {id:2, name:"CustBasicInfo", targetPage:['/customerBasicInfo']},
  {id:3, name:"SelectProdcut",  targetPage:['/productSelect']},
  {id:4, name:"END",  targetPage:['END']}
  ];
  this.currPage=this.navLinks[1];
 }

 gotTonextPage() {
   console.log("Inside Next Page");
   this.currPage=this.navLinks[this.currPage.id+1];
   }

   gotToPrevPage(){
   console.log("Inside Prev Page");
   this.currPage=this.navLinks[this.currPage.id-1];

   }

}

interface NavLink {
	id:number;
	name:string;
	targetPage:string[];
}
