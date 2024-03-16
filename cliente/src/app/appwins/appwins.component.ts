import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


export interface Task {
    id: string;
    name: string;
    done: boolean;
}

@Component({
    selector: 'app-appwins',
    standalone: true,
    imports: [HttpClientModule ],
    providers: [],
    templateUrl: './appwins.component.html',
    styleUrl: './appwins.component.css',
})
export class AppwinsComponent {


    constructor() {}


  
}
