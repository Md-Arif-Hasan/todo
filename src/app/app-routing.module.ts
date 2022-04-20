import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: DashboardComponent ,canActivate:[AuthGuard]},
  // { path: '', component: TodosComponent ,canActivate:[AuthGuard]},
  // { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }