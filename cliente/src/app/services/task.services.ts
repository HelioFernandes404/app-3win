import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  constructor(private httpClient: HttpClient) {}

  public cadastrar(
    razaoSocial: any,
    documentacao: any,
    email: any,
    telefone: any,
    senha: any,
    confirmacaoSenha: any,
    confirmacaoEmail: any,
    nacionalidade: any
  ): Observable<any> {
    let casa;
    const url = `${casa}`;
    return this.httpClient
      .post(
        url + `usuarios`,
        {
          razaoSocial,
          documentacao,
          email,
          telefone,
          senha,
          confirmacaoSenha,
          confirmacaoEmail,
          nacionalidade,
        },
        { responseType: 'json' }
      )
      .pipe(catchError((err): any => {}));
  }

  
}
