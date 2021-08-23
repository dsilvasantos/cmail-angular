import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderDataService } from "src/app/services/header.service";
import { PageDataService } from "src/app/services/page-data.service";
@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})


export class HeaderComponent {

  tituloDaPagina = 'CMail';

  constructor(private roteador: Router, private pageService: PageDataService, private headerService: HeaderDataService) {
    this.pageService
      .titulo
      .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
  }

  private _isMenuOpen = false
  get isMenuOpen() {
    return this._isMenuOpen
  }
  toggleMenu() {
    this._isMenuOpen = !this._isMenuOpen
  }

  logout() {
    localStorage.clear();
    this.roteador.navigate(['/logout']);
  }

  handleBuscaChanges({ target }: any) {
    console.log(target.value);
    this.headerService.atualizarTermoDeFiltro(target.value)
  }
}