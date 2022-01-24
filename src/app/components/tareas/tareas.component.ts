import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/tarea.model';
import { UsersService } from 'src/app/services/users.service';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  rol: string;
  tareas: Tarea[] = [];

  constructor(
    public userSrv: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.rol = this.userSrv.getUserInfo();
    this.tareas = this.userSrv.getTareas();
  }

  agregarTarea() {
    const dialogRef = this.dialog.open(AgregarTareaComponent, {
      disableClose: true,
      data: { title: 'Agregar nueva tarea' }
    }).afterClosed();
    dialogRef.subscribe(data => {
      console.log(data);
      if (!data) return;
      const fecha = new Date();
      const nuevaTarea: Tarea = {
        titulo: data,
        done: false,
        fecha,
        id: fecha.getTime()
      }
      this.tareas.push(nuevaTarea);
      this.userSrv.guardarTareas(this.tareas);
    });
  }

  toggleChange(change: MatCheckboxChange, index: number) {
    if (!change) return;
    this.tareas[index].done = change.checked;
    this.userSrv.guardarTareas(this.tareas);
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    this.userSrv.guardarTareas(this.tareas);
  }

  editarTarea(index: number) {
    const tarea = this.tareas[index].titulo;
    const dialogRef = this.dialog.open(AgregarTareaComponent, {
      disableClose: true,
      data: { title: 'Agregar nueva tarea', tarea }
    }).afterClosed();
    dialogRef.subscribe(data => {
      console.log(data);
      if (!data) return;
      const fecha = new Date();
      this.tareas[index].titulo = data;
      this.tareas[index].fecha = fecha;
      this.userSrv.guardarTareas(this.tareas);
    });
  }

}
