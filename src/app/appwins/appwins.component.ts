import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-appwins',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './appwins.component.html',
  styleUrl: './appwins.component.css'
})
export class AppwinsComponent {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  
}
