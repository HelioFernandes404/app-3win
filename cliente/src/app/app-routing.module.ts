import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTaskComponent } from './pages/task/_home-task/home-task.component';

const routes: Routes = [
  {path:"", redirectTo:"",pathMatch: 'full'},
  {path:"", component:HomeTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
