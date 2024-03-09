import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  getList() {
    const url = "http://localhost:8080/api/v1/task"
    return this.http.get(url)
  }
}
