import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  titulo = new Subject<string>();
  //titulo = new BehaviorSubject<string>(''); // "É executado antes da assinatura"

  defineTitulo(novoTitulo: string) {
    document.querySelector('title')!.textContent = novoTitulo;
    this.titulo.next(novoTitulo);
  }
}