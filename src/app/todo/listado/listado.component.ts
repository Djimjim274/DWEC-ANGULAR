import { OnInit } from "@angular/core";
import { TareasService } from "../tareas.service";

export class ListadoComponent implements OnInit {
  private _tareas: string[] = [];
  constructor(private servicioTareas: TareasService) {}
  public get tareas(): string[] {
  return this._tareas;
  }
  public set tareas(value: string[]) {
  this._tareas = value;
  }
  ngOnInit(): void {
  this._tareas = this.servicioTareas.tareas;
}
completada(tareaCompletada: string): void {
this._tareas = this._tareas.filter((tarea) => tarea !== tareaCompletada);
}
}