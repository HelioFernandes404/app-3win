import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private taskService: TaskService) {}
  listTask : any = [] //variable the list

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



  newTaskFrom = new FormGroup(
    {
      nameTask: new FormControl(''),
    });


  public enviar(): void {
    let {
      nameTask,
    } = this.newTaskFrom.value;

    this.taskService.saveTask(
      nameTask
    ).subscribe(
      (res) => {
        window.location.reload();
        console.log('success')
      },
      error => {
        console.log('error')
      }
    );
  }

  deleteByTask() {
    console.log('deleter')
  }
}
