import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './pages/task/create-task/create-task.component';
import { ListTaskComponent } from './pages/task/list-task/list-task.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeTaskComponent } from './pages/task/_home-task/home-task.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { DoneTaskComponent } from './pages/task/done-task/done-task.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './components/snack/snack.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CreateTaskComponent,
        ListTaskComponent,
        HomeTaskComponent,
        DoneTaskComponent,
        SnackComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      MatSnackBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
