import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { map, catchError, filter, tap, delay, switchMap } from "rxjs/operators";
import { interval, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnDestroy {
  subs: any;
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?'
    )]),
    avatar: new FormControl('', [Validators.required], this.validaImagemDebounced.bind(this))
  })

  mensagensErro: any = [];

  constructor(private httpClient: HttpClient, private roteador: Router, private pageDataService: PageDataService) {

  }
  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.pageDataService
      .defineTitulo('Cadastro - CMail');
  }

  validaImagem(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {
    let a: AsyncValidator;
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }

  validaImagemDebounced(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {
    return of<string>(campoDoFormulario.value)
      .pipe(
        delay(1000),
        switchMap(url => this.httpClient
          .head(url, {
            observe: 'response'
          })
          .pipe(
            map(
              (response: HttpResponseBase) =>
                response.ok ? null : { urlInvalida: true }
            ),
            catchError(() => [{ urlInvalida: true }])
          )
        )
      );
  }



  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);
      this.httpClient
        .post('http://127.0.0.1:3200/users', userData)
        .subscribe(
          (response) => {
            console.log(`Cadastrado com sucesso`);
            this.formCadastro.reset()
            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000);
          }
          , (responseError: HttpErrorResponse) => {
            //resposta caso existam erros!
            this.mensagensErro = responseError.error.body
          }
        )
    }
  }
}

