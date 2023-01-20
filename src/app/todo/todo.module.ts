import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from "./entrada/EntradaComponent";
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    EntradaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EntradaComponent,
    ListadoComponent
  ]
})
export class TodoModule { }
