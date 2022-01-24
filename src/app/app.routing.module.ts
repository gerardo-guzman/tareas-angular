import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnonimousGuard } from "./guards/anonimous.guard";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AnonimousGuard] },
    { path: '', loadChildren: () => import('../app/views/views.module').then(m => m.ViewsModule), canActivate: [AuthGuard] },
    { path: '**', redirectTo: '',  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
