import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TaskService } from 'src/app/services/task.service';

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

@Component({
    selector: 'app-home-task',
    templateUrl: './home-task.component.html',
    styleUrls: ['./home-task.component.scss'],
})
export class HomeTaskComponent {
    task: Task = {
        name: 'Indeterminate',
        completed: false,
        color: 'primary',
        subtasks: [
            { name: 'Primary', completed: false, color: 'primary' },
            { name: 'Accent', completed: false, color: 'accent' },
            { name: 'Warn', completed: false, color: 'warn' },
        ],
    };

    allComplete: boolean = false;

    updateAllComplete() {
        this.allComplete =
            this.task.subtasks != null &&
            this.task.subtasks.every(t => t.completed);
    }

    someComplete(): boolean {
        if (this.task.subtasks == null) {
            return false;
        }
        return (
            this.task.subtasks.filter(t => t.completed).length > 0 &&
            !this.allComplete
        );
    }

    setAll(completed: boolean) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }

    
  constructor(private taskService: TaskService) {}

  listTask : any = [] //variavel da lita

  public getList() {
    this.taskService.getList().subscribe(
      tasks => {
        console.log(tasks)
        this.listTask = tasks
      },
      error => {
        console.error('Erro ao obter a lista de tarefas:', error);
      }
    );
  }

  ngOnInit() {
    this.getList();
  }
}
