import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from '../models/emails';
import { IEmailAPI } from '../models/IEmailAPI';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = 'http://127.0.0.1:3200/emails';
  cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token')! });
  constructor(private http: HttpClient) { }
  enviar({ destinatario, assunto, conteudo }: { destinatario: string, assunto: string, conteudo: string }) {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.http
      .post<IEmailAPI>(this.api, emailParaApi, { headers: this.cabecalho })
      .pipe<Email>(
        map(
          (emailApi) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.createdAt,
              id: emailApi.id
            })
          }
        )
      )
  }

  listar() {
    return this.http
      .get<IEmailAPI[]>(this.api, { headers: this.cabecalho })
      .pipe<Email[]>(
        map(
          (response: any[]) => {
            return response.map(
              emailApi => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.createdAt,
                id: emailApi.id
              })
            )
          }
        )
      )
  }

  deletar(id: String) {
    return this
      .http
      .delete(`${this.api}/${id}`, { headers: this.cabecalho })
  }

}