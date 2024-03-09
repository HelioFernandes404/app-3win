
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './pages/task/create-task/create-task.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch: 'full'},
  {path:"login", component:LoginComponent},
  {path:"createnewtask",component:CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
