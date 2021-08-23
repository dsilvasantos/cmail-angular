import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'cmail-card',
  templateUrl: './cmail-card.component.html',
  styles: [
  ]
})
export class CmailCardComponent implements OnInit {
  @Input()
  cabecalho = '';

  @Input()
  corpo = '';

  @Input()
  rodape = '';

  constructor() { }

  ngOnInit(): void {
  }

}
