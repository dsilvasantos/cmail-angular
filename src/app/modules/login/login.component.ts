import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDadosLogin } from 'src/app/models/IDadosLogin';
import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ],
})
export class LoginComponent implements OnInit {

  mensagemErro: any;


  login: IDadosLogin = {
    email: '',
    password: ''
  }
  constructor(private loginService: LoginService
    , private roteador: Router, private pageDataService: PageDataService) { }

  ngOnInit(): void {
    this.pageDataService
      .defineTitulo('Login - CMail');
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService
        .logar(this.login)
        .subscribe(
          () => this.roteador.navigate(['/inbox'])
          , (responseError: HttpErrorResponse) => this.mensagemErro = responseError.error
        )
    }
  }
}