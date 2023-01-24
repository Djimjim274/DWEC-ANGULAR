import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    PipesComponent
  ],

  imports: [
    CommonModule
  ],
  exports:[
    PipesComponent
  ]
})
export class ModuloModule { }
