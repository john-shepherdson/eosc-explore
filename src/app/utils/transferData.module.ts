import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EGIDataTransferComponent} from "./transferData.component";
import {InputModule} from "../openaireLibrary/sharedComponents/input/input.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, InputModule

  ],
  declarations: [
    EGIDataTransferComponent
   ],

  exports: [
    EGIDataTransferComponent
     ]
})
export class EGIDataTransferModule { }
