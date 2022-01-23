import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  tareaForm = new FormControl(null, Validators.required);
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string, tarea?: string},
    public dialogRef: MatDialogRef<AgregarTareaComponent>
  ) { }

  ngOnInit(): void {
    if (this.data.tarea)
      this.tareaForm.setValue(this.data.tarea);
  }

  confirmar() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }
    const tarea = this.tareaForm.value;
    this.dialogRef.close(tarea);
  }

}
