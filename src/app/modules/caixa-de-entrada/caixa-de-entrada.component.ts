import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/emails';
import { EmailService } from 'src/app/services/email.service';
import { HeaderDataService } from 'src/app/services/header.service';
import { PageDataService } from 'src/app/services/page-data.service';
@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [
    `ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
      }`
  ]
})
export class CaixaDeEntradaComponent implements OnInit {

  termoParaFiltro = '';

  ngOnInit(): void {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        })

    this.pageDataService
      .defineTitulo('Caixa de entrada - CMail');

    this.headerService
      .valorDoFiltro
      .subscribe(novoValor => this.termoParaFiltro = novoValor)
  }

  constructor(private emailService: EmailService, private pageDataService: PageDataService, private headerService: HeaderDataService) {

  }

  private inter: any;

  private _isNewEmailFormOpen = false;

  emailList: Email[] = [];

  email: Email = {
    destinatario: '',
    assunto: '',
    conteudo: '',
    dataDeEnvio: '',
    introducaoDoConteudo: '',
    id: ''
  };

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleRemoveEmail(eventoVaiRemover: any, emailId: String) {
    console.log(eventoVaiRemover);
    if (eventoVaiRemover.status === 'removing') {
      this.emailService
        .deletar(emailId)
        .subscribe(
          res => {
            console.log(res);
            //remove o email da lista de emails depois dela ser apagada da API
            this.emailList = this.emailList.filter(email => email.id != emailId);
          }
          , err => console.error(err)
        )
    }
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;
    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          //Fazemos todas as outras operações após o OK da API
          this.emailList.push(emailApi)
          this.email = { destinatario: '', assunto: '', conteudo: '', dataDeEnvio: '', introducaoDoConteudo: '', id: '' }
          formEmail.reset();
        }
        , erro => console.error(erro)
      )
  }

  filtrarEmailsPorAssunto() {
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
    return this.emailList.filter(email => {
      const assunto = email.assunto.toLowerCase()
      return assunto.includes(termoParaFiltroEmMinusculo)
    })
  }
}