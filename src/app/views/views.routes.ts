import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TareasComponent } from "../components/tareas/tareas.component";
import { TestFiveComponent } from "./test-five/test-five.component";
import { TestFourComponent } from "./test-four/test-four.component";
import { TestOneComponent } from "./test-one/test-one.component";
import { TestThreeComponent } from "./test-three/test-three.component";
import { TestTwoComponent } from "./test-two/test-two.component";
import { ViewsComponent } from "./views.component";

const routes: Routes = [
    {
        path: '', component: ViewsComponent,
        children: [
            { path: 'tareas', component: TareasComponent },
            { path: 'test-1', component: TestOneComponent },
            { path: 'test-2', component: TestTwoComponent },
            { path: 'test-3', component: TestThreeComponent },
            { path: 'test-4', component: TestFourComponent },
            { path: 'test-5', component: TestFiveComponent },
            { path: '**', redirectTo: 'tareas' }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutesModule { }
