import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

interface Task {
  id: number,
  name: string,
  done: boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getList();
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
