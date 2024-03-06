import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppwinsComponent } from './appwins/appwins.component';

export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'appwin', component: AppwinsComponent }, 
];
