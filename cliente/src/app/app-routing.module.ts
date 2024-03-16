
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './pages/task/create-task/create-task.component';

const routes: Routes = [
  {path:"", redirectTo:"",pathMatch: 'full'},
  {path:"", component:HomeComponent},
  {path:"createnewtask",component:CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
