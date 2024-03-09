import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {

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
