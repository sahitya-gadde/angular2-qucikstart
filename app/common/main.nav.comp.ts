import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav',
  styleUrls:  ['main-nav.component.css'],
  template: `
 <div class="center-block">

 <span *ngFor="let link of navLinks">
   <a  *ngIf="currPage.id-1 === link.id && link.id != 0"  
   [routerLink]="link.targetPage" (click)="gotToPrevPage()">
     <i class="glyphicon glyphicon-chevron-left"></i> 
   </a>
  </span>

  <a  *ngIf="currPage.id-1 === 0"  disabled="true" >
     <i class="glyphicon glyphicon-chevron-left"></i> 
  </a>
 

  <div class="pagination">
   <ul class="pager">
     <li *ngFor="let navLink of navLinks"  >
     <a *ngIf="navLink.name != 'END' && navLink.name != 'START' " 
     [ngClass]="{active: navLink.id === currPage.id}">{{navLink.id}}</a></li>
   </ul>
 </div>

 
  <span *ngFor="let link of navLinks">
   <a  *ngIf="currPage.id+1 === link.id &&  link.id != (navLinks.length-1)"  
   [routerLink]="link.targetPage" (click)="gotTonextPage()">
     <i class="glyphicon glyphicon-chevron-right"></i> 
   </a>
  </span>
 
 <a  *ngIf="currPage.id+1 === (navLinks.length-1)"  disabled="true" >
     <i class="glyphicon glyphicon-chevron-right"></i> 
  </a>


 </div>
  `
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
