import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  getList() {
    const url = "http://localhost:8080/api/v1/task"
    return this.http.get(url)
  }

  public saveTask(
    name: any,
  ): Observable<any> {
    const url = "http://localhost:8080/api/v1/task";
    return this.http
      .post(
        url,
        {
          name,
        },
        { responseType: 'json' }
      )
      .pipe(catchError((err): any => {}));
  }

}
