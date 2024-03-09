import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
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
import { ThemePalette } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DoneTaskComponent } from './pages/task/done-task/done-task.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CreateTaskComponent,
        ListTaskComponent,
        HomeTaskComponent,
        DoneTaskComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
