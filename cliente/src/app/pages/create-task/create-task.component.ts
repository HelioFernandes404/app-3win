import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TaskService} from "../../services/task.service";
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  constructor(private taskService: TaskService) {}

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
        console.log('success')
      },
      error => {
        console.log('error')
      }
    );
  }

  public getList() {
    this.taskService.getList().subscribe(
      tasks => {
        console.log(tasks)
      },
      error => {
        console.error('Erro ao obter a lista de tarefas:', error);
      }
    );
  }
}
