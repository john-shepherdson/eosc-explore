import { NgModule}            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RouterModule } from '@angular/router';

 import{ReloadModule} from '../openaireLibrary/reload/reload.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, ReloadModule
  ],
  declarations: [

   ],
  providers:[

    ],
  exports: [

     ]
})
export class LibReloadModule { }
