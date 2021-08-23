import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/emails';
@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssunto implements PipeTransform {
  transform(listaEmails: Email[], termoFiltro: string) {
    return listaEmails
      .filter(
        email =>
          email.assunto.toLowerCase()
            .includes(termoFiltro.toLowerCase()))
  }
}