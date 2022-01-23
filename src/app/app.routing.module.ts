import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnonimousGuard } from "./guards/anonimous.guard";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AnonimousGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home',  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
