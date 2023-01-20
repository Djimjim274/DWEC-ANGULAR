import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from "./entrada/EntradaComponent";
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntradaComponent,
    ListadoComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    EntradaComponent,
    ListadoComponent
  ]
})
export class TodoModule { }
