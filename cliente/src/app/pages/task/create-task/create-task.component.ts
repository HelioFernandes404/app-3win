import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TaskService} from "../../../services/task.service";
import { SnackbarService } from '../../../services/snackbar.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  constructor(
    private taskService: TaskService,
    private snackbarService: SnackbarService
  ) {}

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
}
