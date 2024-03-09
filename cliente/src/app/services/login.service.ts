
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import {map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private mockUsers: any[] = [
    {
      email: 'teste@email.com',
      password: '1234'
    }
  ];

  constructor(private httpClient:HttpClient) { }

  // public login(email:any ,password:any):Observable<any>{
  //   const user = this.mockUsers.find((user) => user.email === email && user.password === password);
  //   if (!user) {
  //     throw new Error('Usuário não encontrado');
  //   }

  //   return user;
  // }

   public login(email:any ,password:any):Observable<any>{
     const url = `${environment.baseURLBackEnd}/login`
     return this.httpClient.post(url,{email,password},{responseType:'json'}).pipe(
     map((data)=> this.setTokenLocalStorage(data)),
     catchError((err)=>{
     this.removeTokenLocalStorage();
     throw 'falha ao conectar'
    })
   )
   }
  public getToken():string|null{
    return localStorage.getItem(environment.token)
  }
  private removeTokenLocalStorage(){
    localStorage.removeItem(environment.token)
  }
  private setTokenLocalStorage(response:any){
    const{type,token, _} =response;
    localStorage.setItem(environment.token,token)
  }
}
