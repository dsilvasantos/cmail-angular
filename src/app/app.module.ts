import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRountingModule } from "./app-rounting.module";
import { AppComponent } from "./app.component";
import { FiltroPorAssunto } from "./modules/caixa-de-entrada/filtro-por-assunto.pipe";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }