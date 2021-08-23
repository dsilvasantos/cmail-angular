import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: [
  ]
})
export class CmailFormGroupComponent implements OnInit {



  idCampo = '';
  textoDaLabel = '';

  @Input() campo: AbstractControl | null = new FormControl();
  //@Input() textoErro: string | null = 'Deu ruim';
  //Se o texto erro passado for nulo ele joga uma mensagem padrão

  @Input() textoErro: string | null = null;
  @Input() textoErroDois: string | null = null;
  constructor(private elemento: ElementRef) {

  }

  ngOnInit() {
    const campo = this.elemento.nativeElement.querySelector('input')
    this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
    this.idCampo = campo.name;
    if (this.textoErro == null) {
      this.textoErro = 'Informar um ' + campo.name + ' é obrigatório';
    }

  }




}

