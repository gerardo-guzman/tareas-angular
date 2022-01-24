import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutesModule } from './views.routes';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { TestFourComponent } from './test-four/test-four.component';
import { TestFiveComponent } from './test-five/test-five.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { TareasComponent } from '../components/tareas/tareas.component';
import { AgregarTareaComponent } from '../components/agregar-tarea/agregar-tarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MY_MAT_MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDatepickerModule
];

@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    TareasComponent,
    AgregarTareaComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent,
    TestFourComponent,
    TestFiveComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutesModule,
    ReactiveFormsModule,
    ...MY_MAT_MODULES
  ]
})
export class ViewsModule { }
