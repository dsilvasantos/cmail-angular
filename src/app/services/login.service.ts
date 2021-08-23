import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDadosLogin } from '../models/IDadosLogin';
@Injectable()
export class LoginService {

  api = 'http://127.0.0.1:3200/login'

  constructor(private http: HttpClient) {

  }


  logar(dadosLogin: IDadosLogin) {
    return this.http
      .post(this.api, dadosLogin)
      .pipe(
        map((response: any) => {
          localStorage.setItem('cmail-token', response.token);
          return response;
        })
      )
  }
}