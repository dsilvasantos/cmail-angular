import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPorAssunto } from './filtro-por-assunto.pipe';



@NgModule({
  declarations: [CaixaDeEntradaComponent, FiltroPorAssunto],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ]
})
export class CaixaDeEntradaModule { }

