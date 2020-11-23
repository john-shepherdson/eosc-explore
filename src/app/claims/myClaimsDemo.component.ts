// import {Component, Input} from '@angular/core';
// import {Observable}       from 'rxjs/Observable';
// import { Router } from '@angular/router';
//
//
//
// @Component({
//     selector: 'my-claims-demo',
//     template: `
//     <div *ngIf="user" class="container">
//       <div class="page-header">
//           <h1> My Claims Demo</h1>
//       </div>
//       <div>
//         <div class=""><a  routerLink="/Linking">Linking</a></div>
//         <div class=""><a  routerLink]="/MyClaims">MyClaims</a></div>
//         <div class=""><a  routerLink="/Claims">Claims Admin</a></div>
//         <p> Extra parameters for claims admin</p>
//         <div class=""><a  href="claims?fetchBy=User&fetchId=amelie.baecker@uni-bielefeld.de">Claims By user</a></div>
//         <div class=""><a  href="claims?fetchBy=Project&fetchId=corda_______::2c37878a0cede85dbbd1081bb9b4a2f8">Claims By project</a></div>
//         <div class=""><a  href="claims?fetchBy=Context&fetchId=egi::country::gr">Claims By context</a></div>
//
// <!--        <p>Orcid
//           <p>N.M.
//           0000-0002-3477-3082
//           </p>
//         </p> -->
//          <div class=""><a href="publication?articleId=od_______908::3a5b2885656a91307156325644e73b92"  >Publication od_______908::3a5b2885656a91307156325644e73b92</a></div>
//          <!--<div class=""><a href="publication?articleId=od_______908::3a5b2885656a91307156325644e73b92"  >Publication od_______908::3a5b2885656a91307156325644e73b92</a></div>
//          <div class=""><a href="publication?articleId=od_______908::3a5b2885656a91307156325644e73b92"  >Publication od_______908::3a5b2885656a91307156325644e73b92</a></div>-->
//        </div>
//     </div>
//
//
//
// `
// //(click)="changeOrderby('target')"
// //od_______908::3a5b2885656a91307156325644e73b92
//
// })
//  export class MyClaimsDemoComponent {
//   constructor ( private _router: Router  ) {
//    }
//   user:string="argirok@di.uoa.gr";
//    ngOnInit() {
//
//   }
//   goToPub(id: number){
//     this._router.navigate( ['Publication', { articleId: id}] );
//   }
// }
