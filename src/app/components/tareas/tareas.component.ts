import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/tarea.model';
import { UsersService } from 'src/app/users.service';
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
    })
  }

  toggleChange(change: MatCheckboxChange, index: number) {
    console.log(change);
  }

  deleteTarea(index: number) {

  }

  editarTarea(index: number) {
    
  }

}
