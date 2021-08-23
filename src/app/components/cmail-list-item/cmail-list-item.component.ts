import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: [
    './cmail-list-item.component.css'
  ]
})

export class CmailListItemComponent implements OnInit {


  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  removeEmail(click: Event) {
    console.log('Clicou no botão remover!')
    //Emite eventoVaiRemover e ainda manda um status
    if (confirm('Tem certeza?')) {
      this.vaiRemover.emit({ status: 'removing' })
    }
  }

}
